import React, { useState } from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  Ambulance,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  CreditCard,
  Building2
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const MobileContactView = () => {
  const { hospitalInfo, submitEnquiry } = useHospital();
  const [formData, setFormData] = useState({ name: "", phone: "", department: "General Consultation", message: "" });
  const [done, setDone] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const importantQuestions = [
    {
      q: "How do I access 24/7 emergency & ambulance dispatch?",
      answer: "Call +1 (800) 789-9999 for instant GPS ambulance dispatch. Direct rooftop helipad is operational 24/7."
    },
    {
      q: "Which cashless health insurance plans are accepted?",
      answer: "We support Star Health, HDFC ERGO, ICICI Lombard, BlueCross, Cigna and 40+ TPAs with 30-min approval."
    },
    {
      q: "What are the inpatient visiting hours?",
      answer: "General visiting hours are daily 04:00 PM – 07:00 PM. ICU rounds are 11:00 AM – 12:00 PM & 05:00 PM – 06:00 PM."
    },
    {
      q: "How do I book an OPD consultation or get reports?",
      answer: "Book via the Appointments tab, call +1 (800) 789-1100, or walk in to the Ground Floor registration lounge."
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    await submitEnquiry(formData);
    setDone(true);
    setFormData({ name: "", phone: "", department: "General Consultation", message: "" });
  };

  return (
    <div className="p-4 pb-24 space-y-4">
      {/* Emergency Hotline */}
      <div className="p-4 rounded-3xl bg-rose-50 border border-rose-200 shadow-xs space-y-2">
        <h3 className="text-sm font-black font-heading text-slate-950 flex items-center gap-2">
          <Ambulance className="w-5 h-5 text-rose-600 animate-pulse" />
          <span>24/7 Emergency SOS & Ambulance</span>
        </h3>
        <p className="text-xs text-slate-950 font-medium">Level 1 Trauma center and mobile ICU ambulance fleet.</p>
        <a
          href="tel:+18007899999"
          className="block w-full py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-extrabold text-xs text-center shadow-md shadow-rose-500/20"
        >
          Call Emergency: +1 (800) 789-9999
        </a>
      </div>

      {/* Quick Contact Hubs */}
      <div className="grid grid-cols-2 gap-3">
        <a
          href="tel:+18007891100"
          className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 block space-y-1 text-center"
        >
          <PhoneCall className="w-4 h-4 text-teal-700 mx-auto" />
          <span className="text-[10px] font-black uppercase tracking-wider text-teal-800 block">General OPD</span>
          <span className="text-xs font-bold text-slate-950 font-mono">789-1100</span>
        </a>

        <a
          href="mailto:tpa@vaultcarehospital.org"
          className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 block space-y-1 text-center"
        >
          <CreditCard className="w-4 h-4 text-indigo-700 mx-auto" />
          <span className="text-[10px] font-black uppercase tracking-wider text-indigo-800 block">Cashless TPA</span>
          <span className="text-xs font-bold text-slate-950">Email Desk</span>
        </a>
      </div>

      {/* Enquiry Form */}
      <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
        <div>
          <h3 className="text-base font-black font-heading text-slate-950">Send Patient Enquiry</h3>
          <p className="text-xs text-slate-950 font-medium">Our clinical desk will call you within 30 minutes.</p>
        </div>

        {done ? (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1.5">
            <CheckCircle2 className="w-7 h-7 text-emerald-600 mx-auto" />
            <div className="text-xs font-black text-slate-950">Enquiry Submitted!</div>
            <p className="text-[11px] text-slate-950 font-medium">Our medical team will contact you shortly.</p>
            <button
              onClick={() => setDone(false)}
              className="mt-2 text-[10px] font-extrabold text-teal-700 underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              required
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-950 focus:outline-none focus:border-teal-600 font-semibold"
            />
            <input
              type="tel"
              required
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-950 focus:outline-none focus:border-teal-600 font-semibold"
            />
            <textarea
              rows={3}
              required
              placeholder="How can our clinical team assist you? *"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-950 focus:outline-none focus:border-teal-600 font-semibold"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-extrabold text-xs shadow-md shadow-teal-500/20 flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Clinical Enquiry</span>
            </button>
          </form>
        )}
      </div>

      {/* 4 Important Questions (Mobile FAQ) */}
      <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-teal-700">
          <HelpCircle className="w-4 h-4" />
          <span>4 Important Questions</span>
        </div>

        <div className="space-y-2">
          {importantQuestions.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="rounded-2xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full text-left p-3.5 flex items-center justify-between gap-2"
                >
                  <span className="text-xs font-black text-slate-950 leading-tight">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-teal-700" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-3.5 pb-3.5 pt-1 text-xs text-slate-950 font-medium leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

