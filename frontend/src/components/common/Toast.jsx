import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const Toast = () => {
  const { toastMessage, showToast } = useHospital();
  if (!toastMessage) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400" />,
    info: <Info className="w-5 h-5 text-cyan-400" />
  };

  const borders = {
    success: "border-emerald-500/40 bg-emerald-950/80 text-emerald-200",
    error: "border-rose-500/40 bg-rose-950/80 text-rose-200",
    info: "border-cyan-500/40 bg-cyan-950/80 text-cyan-200"
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className={`fixed bottom-6 right-6 z-50 flex items-start gap-3 p-4 rounded-2xl border backdrop-blur-xl shadow-2xl max-w-md ${borders[toastMessage.type] || borders.info}`}
      >
        <div className="mt-0.5">{icons[toastMessage.type] || icons.info}</div>
        <div className="flex-1">
          <h4 className="font-semibold text-sm text-white">{toastMessage.title}</h4>
          <p className="text-xs mt-0.5 opacity-90">{toastMessage.message}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
