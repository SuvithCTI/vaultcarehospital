import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import {
  INITIAL_HOSPITAL_INFO,
  INITIAL_DEPARTMENTS,
  INITIAL_DOCTORS,
  INITIAL_SERVICES,
  INITIAL_FACILITIES,
  INITIAL_APPOINTMENTS,
  INITIAL_STATS,
} from "../services/mockData";

const HospitalContext = createContext(null);

export const HospitalProvider = ({ children }) => {
  // Pre-load full rich dataset immediately for 0ms initial lag
  const [hospitalInfo, setHospitalInfo] = useState(INITIAL_HOSPITAL_INFO);
  const [departments, setDepartments] = useState(INITIAL_DEPARTMENTS);
  const [doctors, setDoctors] = useState(INITIAL_DOCTORS);
  const [services, setServices] = useState(INITIAL_SERVICES);
  const [facilities, setFacilities] = useState(INITIAL_FACILITIES);
  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS);
  const [enquiries, setEnquiries] = useState([]);
  const [stats, setStats] = useState(INITIAL_STATS);
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [lastBookedPass, setLastBookedPass] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (title, message, type = "success") => {
    setToastMessage({ title, message, type, id: Date.now() });
    setTimeout(() => setToastMessage(null), 4000);
  };

  const refreshData = async () => {
    try {
      const [aptRes, enqRes, statsRes] = await Promise.all([
        api.getAppointments(),
        api.getEnquiries(),
        api.getAdminStats(),
      ]);

      if (aptRes?.data) setAppointments(aptRes.data);
      if (enqRes?.data) setEnquiries(enqRes.data);
      if (statsRes?.data) setStats(statsRes.data);
    } catch (err) {
      console.warn("Data sync warning:", err);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const bookAppointment = async (bookingData) => {
    try {
      const res = await api.createAppointment(bookingData);
      if (res.success) {
        setLastBookedPass(res.data);
        setAppointments((prev) => [res.data, ...prev]);
        showToast("Appointment Confirmed! ✨", `Digital Token: ${res.data.tokenNumber} for ${res.data.patientName}`, "success");
        return { success: true, data: res.data };
      }
    } catch (err) {
      showToast("Booking Failed", err.message, "error");
      return { success: false, message: err.message };
    }
  };

  const updateAppointmentStatus = async (id, status) => {
    try {
      const res = await api.updateAppointmentStatus(id, status);
      if (res.success) {
        setAppointments((prev) =>
          prev.map((a) => (a.id === id || a.tokenNumber === id ? { ...a, status } : a))
        );
        showToast("Status Updated", `Appointment marked as ${status}`, "info");
        return true;
      }
    } catch (err) {
      showToast("Update Failed", err.message, "error");
    }
    return false;
  };

  const submitEnquiry = async (formData) => {
    try {
      const res = await api.createEnquiry(formData);
      if (res.success) {
        setEnquiries((prev) => [res.data, ...prev]);
        showToast("Enquiry Received", "Our clinical triage team will call you shortly.", "success");
        return true;
      }
    } catch (err) {
      showToast("Submission Failed", err.message, "error");
    }
    return false;
  };

  const openBookingForDoctor = (doc) => {
    setSelectedDoctor(doc);
    setIsBookModalOpen(true);
  };

  return (
    <HospitalContext.Provider
      value={{
        hospitalInfo,
        departments,
        doctors,
        services,
        facilities,
        appointments,
        enquiries,
        stats,
        loading,
        selectedDoctor,
        setSelectedDoctor,
        selectedDepartment,
        setSelectedDepartment,
        isBookModalOpen,
        setIsBookModalOpen,
        lastBookedPass,
        setLastBookedPass,
        toastMessage,
        showToast,
        bookAppointment,
        updateAppointmentStatus,
        submitEnquiry,
        openBookingForDoctor,
        refreshData,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospital = () => useContext(HospitalContext);
