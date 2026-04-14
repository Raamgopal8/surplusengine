import { motion } from "framer-motion";

export default function LandingPage({ setActiveTab }) {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-8 lg:px-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-screen-2xl mx-auto z-10 w-full">
          <motion.div 
            className="lg:col-span-6 space-y-8 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-surface-container px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label text-xs uppercase tracking-widest font-bold text-on-surface-variant">Global Wholesale Hub</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-background leading-[0.9]">
              The Source of <br/><span className="text-primary italic">Pure Ingredients</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl font-medium leading-relaxed">
              Harvest Hub bridges the gap between premium organic farms and global enterprises. We specialize in the bulk distribution of heritage grains and sun-ripened vegetables.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => setActiveTab("surplus")}
                className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-5 rounded-full font-bold text-lg editorial-shadow hover:scale-[1.02] transition-transform"
              >
                Explore Inventory
              </button>
              <button 
                onClick={() => setActiveTab("demand")}
                className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all font-label"
              >
                Request Sourcing
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6 relative h-full flex justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-4/5 aspect-[4/5] bg-surface-container-high rounded-[2rem] overflow-hidden rotate-3 editorial-shadow">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAncvyvZEjDC-tOfeq1uVlZL3gQZLMk_n-h7LDqGRl09bJRI1wKty80K4rFJwAZ-JwMURwgLpAvx_M-p6K__502YUvIWdpSHO3L6FR3oRZuFxmk7Gdlx8v5NML1-T6StV6vfOIp8r_YPvKci8RfvfCUtolE2KLHl1xL57fxG-VLiTOnxddgJD6siFPYD8bP2FEAYaaOE88TKH4sdwulSy5Fdn3WPxiX0zC2QSKRjOoo9y0rZWTEsGBfhV_SI6ZIEOzMJSP41oJxS8Q" 
                alt="Golden wheat field"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-1/2 aspect-square bg-surface-container-lowest rounded-[1.5rem] overflow-hidden -rotate-6 editorial-shadow border border-outline-variant/10">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh3R6fe-6TnbqtTT8PKEiLfvoXdcH0J55410837dlqziy4gO6AMsoVIzPZvxKUTu1iynpXDSmkda4tYKR9Owp_40oc5MT3HBQqy_cEdQ-rVq8UGAuzABzyuaVE-NvnzRpV-MlGxdjCynBgg5GL3kenA4vbJoqGzJ2pOYyCYLTRj7Vk-g24Cd7FBARVcLVDAtM5W86MlfNpFJCVJQgFAku0dheNJxt909z4uwivAW6fPIY37w_eyQJSE3BYsvphlYCE25UsRP3Z7UM" 
                alt="Artisanal rice sacks"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-32 px-8 lg:px-16 bg-surface-container-low rounded-[3rem] mx-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl text-left">
              <span className="font-label text-xs uppercase tracking-widest text-secondary font-black mb-4 block">Our Commitment</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-background">Cultivating a Sustainable Supply Chain from Earth to Enterprise</h2>
            </div>
            <p className="text-on-surface-variant max-w-sm pb-2 text-left">We prioritize soil health and ethical trade, ensuring every grain delivered meets the highest purity standards.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card space-y-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">eco</span>
              </div>
              <h3 className="text-2xl font-bold text-left">Organic Purity</h3>
              <p className="text-on-surface-variant leading-relaxed text-left">Rigorous testing for zero pesticides and non-GMO compliance across all our grains.</p>
            </div>
            <div className="bg-primary text-white p-12 rounded-[2rem] space-y-6 editorial-shadow relative overflow-hidden">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">local_shipping</span>
              </div>
              <h3 className="text-2xl font-bold text-left">Global Distribution</h3>
              <p className="text-white/80 leading-relaxed text-left">Sophisticated logistics network capable of shipping bulk quantities worldwide.</p>
              <div className="pt-8 text-left">
                <span className="text-4xl font-black text-secondary-fixed-dim">120+</span>
                <p className="text-xs font-label uppercase tracking-widest text-white/60">Countries Reached</p>
              </div>
            </div>
            <div className="premium-card space-y-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-3xl">handshake</span>
              </div>
              <h3 className="text-2xl font-bold text-left">Farm-Direct Ties</h3>
              <p className="text-on-surface-variant leading-relaxed text-left">Eliminating middlemen to ensure farmers receive fair prices and fresh quality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
