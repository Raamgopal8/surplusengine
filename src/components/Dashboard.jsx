import Matches from "./Matches";
import NotificationList from "./NotificationList";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Surplus Engine matching logic?",
      answer: "Our engine uses a real-time event-driven architecture. When a surplus is listed, Gemini 3 Flash analyzes its attributes against active demand entries in Firestore to find the highest-probability matches based on category, urgency, and quantity.",
      icon: "psychology"
    },
    {
      question: "How does the real-time synchronization work?",
      answer: "We leverage Firestore's real-time listeners. Any change in surplus availability or demand signals triggers an instant update across all connected dashboards, ensuring that no resource goes to waste due to stale data.",
      icon: "sync_alt"
    },
    {
      question: "Is the resource quality verified?",
      answer: "While we provide the matching platform, our system includes a '100% Certified' quality flag for verified partners. Users can view certification details and provider ratings before confirming a match.",
      icon: "verified_user"
    },
    {
      question: "Can I use Gemini AI for custom insights?",
      answer: "Yes! Use the AI Matching Engine hub to request specific reallocation strategies. Gemini analyzes historical trends to suggest optimal redistribution paths for your specific inventory.",
      icon: "auto_awesome"
    }
  ];

  return (
    <div className="px-8 lg:px-16 py-12">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        <div className="text-left flex justify-between items-end">
          <div>
            <span className="font-label text-xs uppercase tracking-widest text-[#154212] font-black mb-4 block">Operations Hub</span>
            <h2 className="text-5xl font-bold tracking-tight text-on-background">Activity Dashboard</h2>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-on-background/50 text-sm font-label uppercase tracking-tighter">System Status: Active</p>
            <p className="text-primary font-bold">Matching Engine Online</p>
          </div>
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

          {/* FAQ Teaser / Resource Link */}
          <div className="md:col-span-1 premium-card flex flex-col justify-center items-center text-center bg-primary/5 border-primary/10">
            <span className="material-symbols-outlined text-primary text-3xl mb-2">help</span>
            <h4 className="font-bold text-lg">Need Help?</h4>
            <p className="text-sm text-on-surface/60">Check our FAQ below or contact support.</p>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <section className="mt-24">
          <div className="mb-12">
            <span className="font-label text-xs uppercase tracking-widest text-[#154212] font-black mb-2 block">Knowledge Base</span>
            <h3 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`premium-card cursor-pointer border-transparent transition-all duration-300 ${
                  activeIndex === index ? "bg-primary/5 border-primary/20" : "hover:border-primary/10"
                }`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${activeIndex === index ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                    <span className="material-symbols-outlined">{faq.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-bold">{faq.question}</h4>
                      <span className={`material-symbols-outlined transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                        expand_more
                      </span>
                    </div>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-on-surface/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
