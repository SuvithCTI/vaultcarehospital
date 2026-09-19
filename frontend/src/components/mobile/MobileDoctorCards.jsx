import React, { useState } from "react";
import { useHospital } from "../../context/HospitalContext";
import { DoctorModal } from "../common/DoctorModal";
import { Star, Calendar, Search } from "lucide-react";

export const MobileDoctorCards = () => {
  const { doctors, openBookingForDoctor } = useHospital();
  const [search, setSearch] = useState("");
  const [selectedDoc, setSelectedDoc] = useState(null);

  const filtered = doctors.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.specialization.toLowerCase().includes(search.toLowerCase()) ||
    d.departmentName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 py-3 space-y-4">
      <div className="relative">
        <Search className="w-4 h-4 text-slate-800 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search doctor or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((doc) => (
          <div
            key={doc.id}
            className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md flex items-center justify-between gap-3"
          >
            <div 
              onClick={() => setSelectedDoc(doc)}
              className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
            >
              <img
                src={doc.avatar}
                alt={doc.name}
                className="w-13 h-13 rounded-xl object-cover border border-slate-700 flex-shrink-0"
                style={{ width: "52px", height: "52px" }}
              />
              <div className="min-w-0">
                <h4 className="font-bold text-xs text-white truncate">{doc.name}</h4>
                <p className="text-[10px] text-teal-400 truncate">{doc.specialization}</p>
                <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-800">
                  <span className="flex items-center gap-0.5 text-amber-400 font-bold">
                    <Star className="w-3 h-3 fill-amber-400" /> {doc.rating}
                  </span>
                  <span>•</span>
                  <span>${doc.fee} Fee</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => openBookingForDoctor(doc)}
              className="px-3 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md transition flex-shrink-0"
            >
              Book
            </button>
          </div>
        ))}
      </div>

      {selectedDoc && (
        <DoctorModal doctor={selectedDoc} onClose={() => setSelectedDoc(null)} />
      )}
    </div>
  );
};
