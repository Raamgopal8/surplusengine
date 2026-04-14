import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNotifications } from "../../context/NotificationContext";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const { login, signup } = useAuth();
  const { notify } = useNotifications();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signup(email, password);
        notify("AgriCultivate Account Created!");
      } else {
        await login(email, password);
        notify("Welcome back to AgriCultivate!");
      }
    } catch (error) {
      notify(error.message, "error");
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none grain-texture z-0 opacity-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]"></div>

      <motion.div 
        className="w-full max-w-md bg-white p-12 rounded-[3rem] editorial-shadow relative z-10 space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center space-y-3">
          <div className="text-3xl font-black text-primary tracking-tighter">AgriCultivate</div>
          <h2 className="text-2xl font-bold tracking-tight text-on-background">
            {isSignUp ? "Join the Wholesale Hub" : "Welcome Back"}
          </h2>
          <p className="text-sm text-on-surface-variant font-medium">Direct farm-to-enterprise sourcing platform.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-xl">mail</span>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl pl-12 pr-5 py-4 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-xl">lock</span>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl pl-12 pr-5 py-4 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full btn-primary py-4 text-lg">
            {isSignUp ? "Initialize Account" : "Access Hub"}
          </button>
        </form>
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant font-medium">
            {isSignUp ? "Already a partner?" : "New to the platform?"}
            <button 
              className="text-primary font-bold hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Register Now"}
            </button>
          </div>

          <div className="w-full flex items-center gap-4">
            <div className="h-px bg-outline-variant/20 flex-1"></div>
            <span className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-widest">Secure Access</span>
            <div className="h-px bg-outline-variant/20 flex-1"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
