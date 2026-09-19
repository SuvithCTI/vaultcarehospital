import React, { useState } from "react";
import { useHospital } from "../../context/HospitalContext";
import { DoctorModal } from "../common/DoctorModal";
import { Star, Calendar, Search } from "lucide-react";

export const MobileDoctorCards = () => {
  const { doctors, openBookingForDoctor } = useHospital();
  const [search, setSearch] = useState("");
  const [selectedDoc, setSelectedDoc] = useState(null);

  const filtered = (doctors || []).filter((d) => {
    const s = search.toLowerCase();
    const name = (d.name || "").toLowerCase();
    const spec = (d.specialty || d.specialization || "").toLowerCase();
    const dept = (d.department || d.departmentName || "").toLowerCase();
    return name.includes(s) || spec.includes(s) || dept.includes(s);
  });

  return (
    <div className="px-4 py-3 space-y-3">
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search doctor or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 shadow-xs"
        />
      </div>

      <div className="space-y-2.5">
        {filtered.map((doc) => {
          const docImage = doc.image || doc.avatar || "/departments/cardiology.jpg";
          const docSpecialty = doc.specialty || doc.specialization || "Senior Specialist";
          const docDept = doc.department || doc.departmentName || "Medical Wing";
          const docFee = doc.fee || "₹1,000";

          return (
            <div
              key={doc.id}
              className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between gap-3 hover:border-teal-300 transition"
            >
              <div 
                onClick={() => setSelectedDoc(doc)}
                className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
              >
                <img
                  src={docImage}
                  alt={doc.name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "/departments/cardiology.jpg";
                  }}
                  className="w-12 h-12 rounded-xl object-cover border border-slate-100 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-xs text-slate-900 truncate">{doc.name}</h4>
                  <p className="text-[10px] text-teal-700 font-semibold truncate">{docSpecialty}</p>
                  <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-600">
                    <span className="flex items-center gap-0.5 text-amber-500 font-bold">
                      <Star className="w-3 h-3 fill-amber-400" /> {doc.rating || "4.9"}
                    </span>
                    <span>•</span>
                    <span className="font-semibold text-slate-700">{docFee}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => openBookingForDoctor(doc)}
                className="px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-xs transition flex-shrink-0"
              >
                Book
              </button>
            </div>
          );
        })}
      </div>

      {selectedDoc && (
        <DoctorModal doctor={selectedDoc} onClose={() => setSelectedDoc(null)} />
      )}
    </div>
  );
};

