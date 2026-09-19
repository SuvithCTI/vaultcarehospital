import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileText, Lock, X } from "lucide-react";

export const LegalModal = ({ isOpen, onClose, initialTab = "privacy" }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        >
          {/* Top Header Bar */}
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-600/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black font-heading text-slate-900">
                  Vault Care Hospital Legal & Governance
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  HIPAA, NABH & JCI Accredited Hospital Clinical Policies • Updated September 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-200/60 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Pill Tabs */}
          <div className="flex border-b border-slate-100 px-5 sm:px-6 pt-3 gap-2 bg-white overflow-x-auto scrollbar-none">
            {[
              { id: "privacy", label: "Privacy Policy (HIPAA/PHI)", icon: <Lock className="w-3.5 h-3.5" /> },
              { id: "terms", label: "Terms of Care & Admission", icon: <FileText className="w-3.5 h-3.5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-3 sm:px-4 text-xs font-bold transition flex items-center gap-2 border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-teal-600 text-teal-700"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Body Content Area */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
            {activeTab === "privacy" && (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-teal-950 text-xs sm:text-sm">Patient Health Information (PHI) Protection Commitment</h4>
                    <p className="text-teal-900 text-xs mt-0.5">
                      Vault Care Hospital is committed to safeguarding patient confidentiality in strict adherence with global HIPAA protocols, NABH Clinical Standards, and the Digital Personal Data Protection Act.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                    1. Information We Collect & Process
                  </h3>
                  <p>
                    When you schedule an outpatient consultation (OPD), utilize our 24/7 Level-1 emergency services, or submit clinical inquiries, we collect:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600 text-xs sm:text-sm">
                    <li><strong>Personal Demographics:</strong> Full legal name, date of birth, age, contact telephone number, and residential address.</li>
                    <li><strong>Clinical Records:</strong> Diagnostic reports, imaging scans, physician notes, prescription logs, and pathology laboratory outcomes.</li>
                    <li><strong>Insurance & TPA Data:</strong> Health insurance policy numbers, pre-authorization claim submissions, and cashless settlement records.</li>
                    <li><strong>Digital OPD Passes:</strong> Encrypted token identifiers and appointment scheduling timestamps generated on our portal.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                    2. Use and Disclosure of Medical Records
                  </h3>
                  <p>
                    Your medical records are exclusively accessible to certified clinical specialists directly involved in your diagnostics and therapeutic care. We never sell, rent, or commercialize your personal medical information. Disclosures are strictly limited to:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-xs mb-1">Direct Clinical Delivery</strong>
                      <span className="text-xs text-slate-600">Cross-departmental case evaluation across Cardiology, Oncology, Orthopedics, and ICU.</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-xs mb-1">Statutory Healthcare Compliance</strong>
                      <span className="text-xs text-slate-600">Fulfilling mandatory public health reporting and vital statistic registries under governing laws.</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                    3. Data Security & Storage Architecture
                  </h3>
                  <p>
                    Our web portal and clinical database implement multi-tiered defensive security protocols:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600 text-xs sm:text-sm">
                    <li>256-bit TLS end-to-end data encryption in transit and at rest.</li>
                    <li>Strict input sanitization preventing cross-site scripting (XSS) and injection attacks.</li>
                    <li>Client-side session tokens isolated in secure browser storage without persistent tracking cookies.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                    4. Patient Rights & Data Access
                  </h3>
                  <p>
                    Patients possess the right to request physical or certified digital copies of their diagnostic records, revoke consent for non-emergency communications, or request record amendments through our Medical Records Department (MRD).
                  </p>
                </div>
              </div>
            )}

            {activeTab === "terms" && (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3">
                  <FileText className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-indigo-950 text-xs sm:text-sm">Terms of Clinical Care & Hospital Admission</h4>
                    <p className="text-indigo-900 text-xs mt-0.5">
                      By accessing Vault Care Hospital facilities, scheduling appointments, or utilizing digital passes, you agree to the following terms governing outpatient (OPD) and inpatient (IPD) clinical services.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    1. OPD Appointments & Digital Pass Protocols
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600 text-xs sm:text-sm">
                    <li><strong>Token Validity:</strong> Digital OPD passes generated online represent priority queue tokens and must be presented at reception kiosks 15 minutes prior to slot time.</li>
                    <li><strong>Emergency Precedence:</strong> In cases of sudden Level-1 trauma resuscitations or critical cardiac events, emergency procedures supersede scheduled non-critical consultations.</li>
                    <li><strong>Rescheduling & Cancellations:</strong> Appointments may be rescheduled or cancelled via the portal or 24/7 hotline without penalty.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    2. Emergency Triage & Admissions
                  </h3>
                  <p>
                    Our Emergency Trauma Resuscitation Center operates on the internationally recognized 5-tier Emergency Severity Index (ESI). Patients are triaged according to physiological acuity rather than arrival order.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    3. Cashless Insurance (TPA) & Billing Transparency
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600 text-xs sm:text-sm">
                    <li>Vault Care Hospital is partnered with all major Tier-1 insurance networks and Third-Party Administrators (TPAs).</li>
                    <li>Cashless hospitalization is subject to initial policy verification and insurer pre-authorization sanction.</li>
                    <li>Detailed itemized bills and digital receipts are provided upon discharge with zero hidden fees.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    4. Patient Code of Conduct & Hospital Rights
                  </h3>
                  <p>
                    We maintain a zero-tolerance policy against violence, harassment, or verbal abuse directed at nursing staff, physicians, or emergency personnel. All hospital premises are smoke-free, weapon-free therapeutic zones.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Footer Actions */}
          <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[11px] text-slate-500 font-medium">
              Official Governance Document • Vault Care Hospital Multi-Speciality Medical Authority
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition"
            >
              I Understand & Agree
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
