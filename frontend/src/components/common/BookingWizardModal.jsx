import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Phone, Mail, Building2, Check } from "lucide-react";
import { useHospital } from "../../context/HospitalContext";

export const BookingWizardModal = () => {
  const { 
    isBookModalOpen, 
    setIsBookModalOpen, 
    departments, 
    bookAppointment 
  } = useHospital();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    departmentId: departments[0]?.id || "dept-1",
    appointmentDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    appointmentTime: "10:00 AM",
    patientName: "",
    patientPhone: "",
    patientEmail: "",
    patientAge: "30",
    patientGender: "Male",
    consultationType: "In-Person Hospital Consultation",
    symptoms: "",
    paymentStatus: "Pay at Hospital"
  });

  const [submitting, setSubmitting] = useState(false);

  if (!isBookModalOpen) return null;

  const activeDept = departments.find((d) => d.id === formData.departmentId) || departments[0];

  const slots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:30 PM", "04:30 PM", "05:30 PM"
  ];

  const handleNext = (e) => {
    e.preventDefault();
    setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const payload = {
      ...formData,
      departmentName: activeDept?.name || "General Medicine",
      fee: 140
    };

    const res = await bookAppointment(payload);
    setSubmitting(false);
    if (res.success) {
      setIsBookModalOpen(false);
      setStep(1);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 overflow-hidden max-h-[90vh] flex flex-col"
        >
          <div className="flex justify-between items-start pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
                  Step {step} of 3
                </span>
                <span className="text-slate-800 font-medium text-xs">• Instant Digital Pass</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mt-1">
                {step === 1 && "Select Medical Department"}
                {step === 2 && "Choose Date & Time Slot"}
                {step === 3 && "Patient Information & Details"}
              </h2>
            </div>
            <button
              onClick={() => setIsBookModalOpen(false)}
              className="p-2 text-slate-800 hover:text-slate-950 rounded-full hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto py-6 flex-1 pr-1">
            {step === 1 && (
              <div className="space-y-4">
                <label className="block text-xs font-bold text-slate-800 font-medium uppercase tracking-wider">
                  Choose Hospital Department
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {departments.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, departmentId: d.id })}
                      className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between ${
                        formData.departmentId === d.id
                          ? "bg-teal-50 border-teal-500 text-teal-900 ring-2 ring-teal-500/20 shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-950 hover:bg-white"
                      }`}
                    >
                      <Building2 className="w-5 h-5 mb-2 text-teal-600" />
                      <span className="text-xs font-bold line-clamp-2">{d.name}</span>
                    </button>
                  ))}
                </div>

                {activeDept && (
                  <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 text-xs text-slate-900 mt-3">
                    <span className="font-bold text-teal-900">{activeDept.name}: </span>
                    {activeDept.description}
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 font-medium uppercase tracking-wider mb-1">
                    Select Appointment Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.appointmentDate}
                    onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 font-medium uppercase tracking-wider mb-2">
                    Consultation Mode
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["In-Person Hospital Consultation", "Telehealth Video Consultation"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, consultationType: type })}
                        className={`p-3 rounded-xl border text-xs font-bold text-center transition ${
                          formData.consultationType === type
                            ? "bg-teal-50 border-teal-500 text-teal-900 ring-2 ring-teal-500/20"
                            : "bg-slate-50 border-slate-200 text-slate-900 hover:bg-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 font-medium uppercase tracking-wider mb-2">
                    Available Consultation Slots
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {slots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, appointmentTime: slot })}
                        className={`p-3 rounded-xl border text-center transition font-bold text-xs ${
                          formData.appointmentTime === slot
                            ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                            : "bg-slate-50 border-slate-200 text-slate-950 hover:bg-white"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-950 mb-1">Patient Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johnathan Doe"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-950 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.patientPhone}
                      onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-950 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="patient@example.com"
                      value={formData.patientEmail}
                      onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-950 mb-1">Age</label>
                    <input
                      type="number"
                      value={formData.patientAge}
                      onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-950 mb-1">Gender</label>
                    <select
                      value={formData.patientGender}
                      onChange={(e) => setFormData({ ...formData, patientGender: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-teal-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-950 mb-1">Symptoms / Reason for Visit</label>
                  <textarea
                    rows={2}
                    placeholder="Describe symptoms briefly..."
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-950 font-bold text-sm transition"
              >
                Back
              </button>
            ) : <div />}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting || !formData.patientName || !formData.patientPhone}
                className="px-7 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-extrabold text-sm shadow-lg transition disabled:opacity-50"
              >
                {submitting ? "Booking..." : "Confirm & Get Pass ✨"}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
