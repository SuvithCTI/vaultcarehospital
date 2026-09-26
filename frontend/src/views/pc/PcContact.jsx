import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  Mail,
  MapPin,
  Ambulance,
  Send,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Clock,
  CreditCard,
  Building2,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const PcContact = () => {
  const { hospitalInfo, submitEnquiry } = useHospital();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "General Consultation",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0); // first question open by default

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  const importantQuestions = [
    {
      q: "How do I access 24/7 emergency care & ambulance dispatch?",
      category: "Emergency & Trauma",
      color: "border-rose-200 bg-rose-50 text-rose-700",
      answer:
        "Call our 24/7 Emergency Dispatch directly at +1 (800) 789-9999. Our GPS-tracked 5G mobile ICU ambulances deploy immediately with an average arrival under 10 minutes. Advanced resuscitation and emergency trauma surgery bays are operational 24/7."
    },
    {
      q: "Which cashless health insurance plans & TPAs are accepted?",
      category: "Insurance & Billing",
      color: "border-indigo-200 bg-indigo-50 text-indigo-700",
      answer:
        "Vault Care is empaneled with 40+ insurers (Star Health, HDFC ERGO, ICICI Lombard, Max Bupa, BlueCross, Cigna, UnitedHealthcare). Our 24/7 Cashless TPA Helpdesk resolves pre-authorizations within 30 minutes."
    },
    {
      q: "What are the visiting hours and inpatient attendant guidelines?",
      category: "Visitor Protocol",
      color: "border-emerald-200 bg-emerald-50 text-emerald-700",
      answer:
        "General Inpatient visiting is daily from 04:00 PM to 07:00 PM. In ICUs, visits are limited to 1 primary attendant during physician consultation windows (11:00 AM – 12:00 PM & 05:00 PM – 06:00 PM) for bio-safety."
    },
    {
      q: "How can I book an outpatient consultation or request medical records?",
      category: "OPD & Records",
      color: "border-sky-200 bg-sky-50 text-sky-700",
      answer:
        "Book via the Appointments tab, call +1 (800) 789-1100, or walk in to the Ground Floor Central Registration Lounge for priority same-day tokens. Lab & PACS radiology reports are accessible online within 6 hours."
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    await submitEnquiry(formData);
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      department: "General Consultation",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-6 sm:py-10 px-4 sm:px-10 lg:px-16 max-w-[1700px] w-full mx-auto space-y-6 sm:space-y-8">
      
      {/* 1. Header Hero Banner with Emergency Command Center Background */}
      <div className="relative overflow-hidden rounded-3xl border border-teal-200/80 shadow-lg p-6 sm:p-8 isolate">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/banners/contact.jpg"
            alt="Vault Care Emergency Command Hub"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onError={(e) => {
              e.currentTarget.src = "/departments/cardiology.jpg";
            }}
            className="w-full h-full object-cover object-center scale-100 filter brightness-[1.02] opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-teal-50/40" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1.5 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-teal-100 text-teal-900 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-teal-700" />
              <span>Vault Care 24/7 Patient Helpdesk</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-slate-900 leading-tight">
              Contact & Patient Services
            </h1>
            <p className="text-slate-700 text-xs sm:text-sm font-normal">
              Emergency trauma dispatch, central registration, cashless insurance approvals, and physician inquiries.
            </p>
          </div>

          {/* Emergency SOS Quick Call Pill */}
          <div className="flex items-center gap-3 p-2.5 px-4 rounded-2xl bg-white/90 backdrop-blur-md border border-rose-200 text-slate-900 self-start lg:self-auto shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center font-bold shadow-md shadow-rose-500/20 flex-shrink-0">
              <Ambulance className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block">24/7 Trauma Hotline</span>
              <a href="tel:+18007899999" className="text-sm font-bold text-slate-900 font-mono hover:text-rose-600 transition">
                +1 (800) 789-9999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Sleek 4 Contact Hubs Quick Bar - 2 columns on mobile, 4 columns on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        
        {/* Hub 1: Emergency SOS */}
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-50/60 border border-rose-200/90 shadow-xs hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <Ambulance className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-rose-700 block truncate">24/7 ER</span>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">Ambulance SOS</h3>
            </div>
          </div>
          <a
            href="tel:+18007899999"
            className="w-full sm:w-auto text-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-bold text-[10px] sm:text-[11px] shadow-xs shrink-0 transition"
          >
            Call ER
          </a>
        </div>

        {/* Hub 2: General OPD Desk */}
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-teal-50/60 border border-teal-200/90 shadow-xs hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-teal-700 block truncate">OPD Desk</span>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">Registration</h3>
            </div>
          </div>
          <a
            href="tel:+18007891100"
            className="w-full sm:w-auto text-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-[10px] sm:text-[11px] shadow-xs shrink-0 transition"
          >
            Call Desk
          </a>
        </div>

        {/* Hub 3: Cashless Insurance */}
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-indigo-50/60 border border-indigo-200/90 shadow-xs hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-indigo-700 block truncate">Insurance</span>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">Cashless TPA</h3>
            </div>
          </div>
          <a
            href="mailto:tpa@vaultcarehospital.org"
            className="w-full sm:w-auto text-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-[10px] sm:text-[11px] shadow-xs shrink-0 transition"
          >
            Email TPA
          </a>
        </div>

        {/* Hub 4: Campus Location */}
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-sky-50/60 border border-sky-200/90 shadow-xs hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-sky-700 block truncate">Main Campus</span>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">Directions</h3>
            </div>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-[10px] sm:text-[11px] shadow-xs shrink-0 transition flex items-center justify-center gap-1"
          >
            <span>Map</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>

      {/* 3. Streamlined Core Split: Left Form & Hours | Right 4 Important Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column (6 cols): Patient Enquiry Form & Schedule Banner */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="space-y-0.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-700 block">
                Direct Communication
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                Send a Clinical Inquiry
              </h2>
              <p className="text-xs text-slate-600 font-normal">
                Our triage coordinator will review your request and call back within 30 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900">Enquiry Received!</h3>
                <p className="text-xs text-slate-600 font-normal">
                  Your request has been routed to our clinical coordination desk.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-slate-700">
                      Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white font-normal transition"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-slate-700">
                      Phone Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white font-normal transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white font-normal transition"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-semibold text-slate-700">
                      Specialty Department
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white font-normal transition"
                    >
                      <option value="General Consultation">General Consultation / OPD</option>
                      <option value="Cardiology">Cardiology & Heart Care</option>
                      <option value="Neurology">Neurology & Stroke Screen</option>
                      <option value="Orthopedics">Orthopedics & Joint Care</option>
                      <option value="Oncology">Comprehensive Oncology</option>
                      <option value="Emergency">Emergency & Level-1 Trauma</option>
                      <option value="Maternity">Maternity & Child Care</option>
                      <option value="Radiology">Radiology & Scans</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-semibold text-slate-700">
                    Clinical Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe symptoms, insurance query, or preferred doctor..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white font-normal transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs shadow-md shadow-teal-500/20 transition active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Clinical Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Compact Hospital Hours Strip */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-800">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-700 flex-shrink-0" />
              <span>OPD: 08:00 AM – 08:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-700 flex-shrink-0" />
              <span>Visiting: 04:00 PM – 07:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-rose-700 font-bold">
              <Ambulance className="w-4 h-4 flex-shrink-0" />
              <span>ER & Trauma ICU: 24/7 Active</span>
            </div>
          </div>
        </div>

        {/* Right Column (6 cols): 4 Important Questions FAQ Accordion */}
        <div className="lg:col-span-6 space-y-3">
          <div className="space-y-0.5 pb-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-teal-700">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Patient Quick Answers</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              4 Important Questions
            </h2>
          </div>

          <div className="space-y-2.5">
            {importantQuestions.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 bg-white overflow-hidden shadow-xs ${
                    isOpen ? "border-teal-400 ring-1 ring-teal-200" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3"
                  >
                    <div className="space-y-1 min-w-0 pr-1">
                      <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider border ${item.color}`}>
                        {item.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        {item.q}
                      </h3>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-teal-100 text-teal-800" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        <div className="px-3.5 sm:px-4 pb-3.5 pt-1 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-100">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Compact Campus Address Banner */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs font-normal text-slate-700">
            <div className="flex items-center gap-2 min-w-0">
              <MapPin className="w-4 h-4 text-teal-700 flex-shrink-0" />
              <span className="truncate">742 Healthcare Blvd, Medical District, NY 10001</span>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 hover:text-teal-800 font-bold text-[11px] whitespace-nowrap flex items-center gap-1"
            >
              <span>View Map</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* 4. Minimalist Quality & Assurance Bar */}
      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-normal text-slate-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
          <span>All patient records & inquiries adhere strictly to HIPAA & NABH bio-safety standards.</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px] font-semibold">
          <span>Official Hospital Code: VC-HOSP-NY-982</span>
        </div>
      </div>

    </div>
  );
};
export default PcContact;


