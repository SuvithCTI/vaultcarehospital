import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Star, Calendar, Clock, Award, Stethoscope, Search, 
  Filter, CheckCircle, ArrowUpRight, DollarSign 
} from "lucide-react";
import { useHospital } from "../../context/HospitalContext";
import { DoctorModal } from "../common/DoctorModal";

export const DesktopDoctors = () => {
  const { doctors, departments, openBookingForDoctor } = useHospital();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDeptFilter, setSelectedDeptFilter] = useState("all");
  const [selectedGenderFilter, setSelectedGenderFilter] = useState("all");
  const [viewDoctorModal, setViewDoctorModal] = useState(null);

  const filteredDoctors = (doctors || []).filter((doc) => {
    const s = searchQuery.toLowerCase();
    const name = (doc.name || "").toLowerCase();
    const spec = (doc.specialty || doc.specialization || "").toLowerCase();
    const dept = (doc.department || doc.departmentName || "").toLowerCase();
    const matchesSearch = name.includes(s) || spec.includes(s) || dept.includes(s);
    
    const matchesDept = selectedDeptFilter === "all" || doc.deptId === selectedDeptFilter || doc.departmentId === selectedDeptFilter;
    const matchesGender = selectedGenderFilter === "all" || doc.gender?.toLowerCase() === selectedGenderFilter.toLowerCase();

    return matchesSearch && matchesDept && matchesGender;
  });

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs uppercase tracking-widest text-teal-400 font-bold">World-Renowned Specialists</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white mt-1">
          Our Senior Medical Faculty
        </h2>
        <p className="text-slate-300 text-sm mt-3">
          Consult with board-certified physicians, professors of medicine, and fellowship-trained surgeons with an average of 18+ years clinical experience.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl mb-10 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
        <div className="md:col-span-5 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search doctor by name, specialty, or condition..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-teal-500"
          />
        </div>

        <div className="md:col-span-4">
          <select
            value={selectedDeptFilter}
            onChange={(e) => setSelectedDeptFilter(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-teal-500"
          >
            <option value="all">All Medical Departments ({departments.length})</option>
            {departments.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-3 flex gap-2">
          <select
            value={selectedGenderFilter}
            onChange={(e) => setSelectedGenderFilter(e.target.value)}
            className="flex-1 px-3.5 py-2.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-teal-500"
          >
            <option value="all">Gender: All</option>
            <option value="Male">Male Specialists</option>
            <option value="Female">Female Specialists</option>
          </select>
        </div>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDoctors.map((doc) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 flex flex-col justify-between group"
          >
            <div>
              {/* Doctor Avatar & Badges */}
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src={doc.image || doc.avatar || "/departments/cardiology.jpg"}
                  alt={doc.name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "/departments/cardiology.jpg";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-amber-300 text-xs font-bold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {doc.rating || "4.9"}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-500/30 text-teal-300 text-[11px] font-semibold backdrop-blur-md border border-teal-500/30">
                    {doc.department || doc.departmentName}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-teal-400 transition">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-cyan-300 font-medium">{doc.specialty || doc.specialization}</p>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {doc.about}
                </p>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>{doc.experience || doc.experienceYears || "20+"} Exp</span>
                  <span className="text-teal-400 font-bold text-sm">{doc.fee || "₹1,000"} Fee</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="p-5 pt-0 grid grid-cols-2 gap-2">
              <button
                onClick={() => setViewDoctorModal(doc)}
                className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition"
              >
                View Bio
              </button>
              <button
                onClick={() => openBookingForDoctor(doc)}
                className="py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-500/20 transition flex items-center justify-center gap-1"
              >
                <Calendar className="w-3.5 h-3.5" /> Book Slot
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {viewDoctorModal && (
        <DoctorModal doctor={viewDoctorModal} onClose={() => setViewDoctorModal(null)} />
      )}
    </section>
  );
};
