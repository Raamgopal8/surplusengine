import AddDemand from "./AddDemand";
import DemandList from "./DemandList";
import { motion } from "framer-motion";

export default function DemandPage({ setActiveTab }) {
  return (
    <div className="px-8 lg:px-16 py-12 space-y-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="text-left">
            <span className="font-label text-xs uppercase tracking-widest text-secondary font-black mb-4 block">Requests</span>
            <h2 className="text-5xl font-bold tracking-tight text-on-background">Bulk Demand Portal</h2>
          </div>
          <p className="text-on-surface-variant max-w-sm pb-2 text-left">Submit your inventory requirements and let our engine match you with the purest ingredients directly from the source.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Add Demand Form */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="premium-card sticky top-24">
              <h3 className="text-2xl font-bold mb-6">New Sourcing Request</h3>
              <p className="text-sm text-on-surface-variant mb-6">Specify your requirements including item type and volume. Our AI-driven matcher will notify you instantly upon finding a supply match.</p>
              <AddDemand setActiveTab={setActiveTab} />
            </div>
          </motion.div>

          {/* Right: List of Requests */}
          <div className="lg:col-span-7 space-y-12">
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">assignment</span>
                Active Sourcing Requests
              </h3>
              <div className="bg-surface-container-low p-4 rounded-[2rem] border border-outline-variant/10">
                <DemandList />
              </div>
            </section>

            <section className="premium-card bg-primary text-white space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">bolt</span>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white mb-2">Real-Time Logistics</h4>
                  <p className="text-white/70 text-sm leading-relaxed">All requests are matched against our global logistics engine to ensure freight availability and cost optimization.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
