import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import serveStatic from 'serve-static';
import Stripe from 'stripe';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT, 10) || 8080;
const stripeKey = process.env.STRIPE_SECRET_KEY;

if (!stripeKey) {
  console.warn('Warning: STRIPE_SECRET_KEY is not defined. Stripe functionality will be limited.');
}

const stripe = new Stripe(stripeKey || 'dummy_key');

app.use(express.json());

// Stripe Checkout Session endpoint
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Surplus Engine Premium',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve static files from the 'dist' directory
app.use(serveStatic(path.join(__dirname, 'dist')));

// Fallback for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
