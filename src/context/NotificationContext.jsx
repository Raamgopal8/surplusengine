import { createContext, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = (message, type = "success") => {
    const newNotification = { 
      id: Date.now(), 
      message, 
      type,
      createdAt: new Date()
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    
    if (type === "success") toast.success(message);
    else if (type === "error") toast.error(message);
    else toast(message);
  };

  const clearNotifications = () => setNotifications([]);

  return (
    <NotificationContext.Provider value={{ notifications, notify, clearNotifications }}>
      <Toaster position="top-right" />
      {children}
    </NotificationContext.Provider>
  );
};
