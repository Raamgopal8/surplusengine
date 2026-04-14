import AddSurplus from "./AddSurplus";
import SurplusList from "./SurplusList";
import { motion } from "framer-motion";

export default function SurplusPage({ setActiveTab }) {
  const samplePricing = [
    { item: "Organic Wheat", price: "$450 / ton", trend: "up" },
    { item: "Heritage Barley", price: "$380 / ton", trend: "stable" },
    { item: "Golden Millet", price: "$520 / ton", trend: "down" },
  ];

  return (
    <div className="px-8 lg:px-16 py-12 space-y-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="text-left">
            <span className="font-label text-xs uppercase tracking-widest text-primary font-black mb-4 block">Marketplace</span>
            <h2 className="text-5xl font-bold tracking-tight text-on-background">Live Surplus Inventory</h2>
          </div>
          <p className="text-on-surface-variant max-w-sm pb-2 text-left">Browse active surplus from certified organic farms ready for immediate bulk delivery.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Add Surplus Form */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="premium-card sticky top-24">
              <h3 className="text-2xl font-bold mb-6">List Your Surplus</h3>
              <AddSurplus setActiveTab={setActiveTab} />
            </div>
          </motion.div>

          {/* Right: List and Pricing */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">inventory_2</span>
                Current Listings
              </h3>
              <SurplusList />
            </section>

            <section className="bg-surface-container-high p-8 rounded-[2.5rem]">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-left">
                <span className="material-symbols-outlined text-secondary">trending_up</span>
                Market Insights & Sample Pricing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {samplePricing.map((p, i) => (
                  <div key={i} className="bg-white/50 p-6 rounded-2xl border border-outline-variant/10 text-left">
                    <div className="text-sm font-label text-on-surface-variant uppercase tracking-wider mb-1">{p.item}</div>
                    <div className="text-2xl font-black text-primary">{p.price}</div>
                    <div className="flex items-center gap-1 mt-2 text-xs font-bold text-secondary">
                      <span className="material-symbols-outlined text-sm">
                        {p.trend === "up" ? "arrow_upward" : p.trend === "down" ? "arrow_downward" : "remove"}
                      </span>
                      Market Trend
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
