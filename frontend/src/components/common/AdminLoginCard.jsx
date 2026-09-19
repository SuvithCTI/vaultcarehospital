import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Mail, KeyRound, AlertCircle, Sparkles, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export const AdminLoginCard = () => {
  const { login, authError, setAuthError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const res = login(email, password);
      setIsLoading(false);
    }, 400);
  };

  const handleQuickFill = () => {
    setEmail("admin@vaultcare.org");
    setPassword("admin123");
    setAuthError("");
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-3xl border border-purple-200 shadow-2xl p-7 sm:p-8 relative overflow-hidden"
      >
        {/* Top Decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-500" />

        {/* Icon & Title */}
        <div className="text-center space-y-3 mb-6">
          <div className="w-16 h-16 rounded-3xl bg-purple-100 text-purple-700 mx-auto flex items-center justify-center border border-purple-200 shadow-inner">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold font-heading text-slate-900 mt-2">
              Admin Portal Login
            </h2>
            <p className="text-xs text-slate-800 font-medium mt-1">
              Please authenticate to access hospital appointment triage, enquiries, and operations.
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {authError && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-5 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2.5 font-medium"
          >
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>{authError}</span>
          </motion.div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-950 mb-1.5">
              Admin Email / Username
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-800 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@vaultcare.org"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 font-medium focus:outline-none focus:border-purple-500 focus:bg-white transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-950 mb-1.5">
              Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-800 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 font-medium focus:outline-none focus:border-purple-500 focus:bg-white transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-800 hover:text-slate-950 transition"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-700 via-indigo-700 to-teal-700 hover:from-purple-800 hover:to-teal-800 text-white font-extrabold text-xs shadow-lg shadow-purple-600/20 transition flex items-center justify-center gap-2 transform active:scale-98"
          >
            {isLoading ? (
              <span className="animate-pulse">Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Admin Portal</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Helper */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 text-center space-y-2">
            <div className="text-[11px] font-bold text-purple-900 flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Demo Admin Credentials</span>
            </div>
            <p className="text-[11px] text-slate-900 font-mono">
              Email: <strong className="text-purple-800">admin@vaultcare.org</strong> • Pass: <strong className="text-purple-800">admin123</strong>
            </p>
            <button
              type="button"
              onClick={handleQuickFill}
              className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-[10px] font-bold transition shadow-sm"
            >
              ⚡ Auto-Fill Credentials
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
