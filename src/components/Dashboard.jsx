import Matches from "./Matches";
import NotificationList from "./NotificationList";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="px-8 lg:px-16 py-12">
      <div className="max-w-screen-2xl mx-auto space-y-12">
        <div className="text-left">
          <span className="font-label text-xs uppercase tracking-widest text-[#154212] font-black mb-4 block">Operations Hub</span>
          <h2 className="text-5xl font-bold tracking-tight text-on-background">Activity Dashboard</h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-8 h-auto md:h-[800px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Matching Feed (Large) */}
          <div className="md:col-span-2 md:row-span-2 premium-card overflow-hidden flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">hub</span>
              Real-Time Matching Engine
            </h3>
            <div className="flex-1 overflow-y-auto pr-2 scroll-list">
              <Matches />
            </div>
          </div>

          {/* Notifications (Medium) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-surface-container-high p-8 flex flex-col">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-left">
              <span className="material-symbols-outlined text-secondary">notifications_active</span>
              Recent Alerts
            </h3>
            <div className="flex-1 overflow-y-auto scroll-list">
              <NotificationList />
            </div>
          </div>

          
          {/* Quick Stats 2 */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-secondary-container p-8 flex flex-col justify-center text-center items-center space-y-2">
            <span className="material-symbols-outlined text-on-secondary-container text-4xl">verified</span>
            <h4 className="text-on-secondary-container text-xl font-black leading-tight">100% Certified</h4>
            <p className="text-on-secondary-container/70 text-xs font-label uppercase tracking-widest">Quality Guaranteed</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
