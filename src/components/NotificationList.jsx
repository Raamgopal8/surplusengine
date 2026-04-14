import { motion, AnimatePresence } from "framer-motion";
import { useNotifications } from "../context/NotificationContext";

export default function NotificationList() {
  const { notifications, clearNotifications } = useNotifications();

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {notifications.length === 0 ? (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant/20 mb-2">notifications_off</span>
            <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest">No New Alerts</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <motion.div
              key={notif.id}
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="group flex gap-4 p-4 bg-white/50 rounded-2xl border border-outline-variant/10 hover:border-primary/20 transition-all"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                notif.type === 'error' ? 'bg-error/10 text-error' : 'bg-primary/10 text-primary'
              }`}>
                <span className="material-symbols-outlined text-xl">
                  {notif.type === 'error' ? 'error' : 'notifications'}
                </span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-on-background line-clamp-2">{notif.message}</p>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1 block">
                  {new Date(notif.createdAt).toLocaleTimeString()}
                </span>
              </div>
            </motion.div>
          ))
        )}
      </AnimatePresence>
      
      {notifications.length > 0 && (
        <button 
          className="w-full py-2 text-xs font-bold text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors"
          onClick={clearNotifications}
        >
          Dismiss All Alerts
        </button>
      )}
    </div>
  );
}
