import {
  INITIAL_HOSPITAL_INFO,
  INITIAL_DEPARTMENTS,
  INITIAL_DOCTORS,
  INITIAL_SERVICES,
  INITIAL_FACILITIES,
  INITIAL_APPOINTMENTS,
  INITIAL_STATS,
} from "./mockData";

// LocalStorage Keys for persistent client-side data
const STORAGE_KEYS = {
  APPOINTMENTS: "vaultcare_appointments_v1",
  ENQUIRIES: "vaultcare_enquiries_v1",
  STATS: "vaultcare_stats_v1",
};

/**
 * Defensive sanitizer to prevent XSS, script injection, and payload bloat
 */
export const sanitizeText = (val, maxLength = 300) => {
  if (val === null || val === undefined) return "";
  const str = String(val);
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") // remove script tags
    .replace(/<[^>]+>/g, "") // strip html tags
    .replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F]/g, "") // remove control chars
    .trim()
    .slice(0, maxLength);
};

const getStoredItem = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;
    const parsed = JSON.parse(item);
    return Array.isArray(fallback) && !Array.isArray(parsed) ? fallback : parsed;
  } catch {
    return fallback;
  }
};

const setStoredItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn("LocalStorage save error:", err);
  }
};

export const api = {
  async getHealth() {
    return { status: "healthy", mode: "pure-client-fast", uptime: "100%" };
  },

  async getHospitalInfo() {
    return { success: true, data: INITIAL_HOSPITAL_INFO };
  },

  async getDepartments() {
    return { success: true, data: INITIAL_DEPARTMENTS };
  },

  async getDoctors(params = {}) {
    let list = [...INITIAL_DOCTORS];
    if (params.department) {
      list = list.filter(d => d.department.toLowerCase().includes(params.department.toLowerCase()) || d.deptId === params.department);
    }
    return { success: true, data: list };
  },

  async getDoctorById(id) {
    const doc = INITIAL_DOCTORS.find(d => d.id === id);
    return { success: !!doc, data: doc };
  },

  async getServices() {
    return { success: true, data: INITIAL_SERVICES };
  },

  async getFacilities() {
    return { success: true, data: INITIAL_FACILITIES };
  },

  async getAppointments() {
    const stored = getStoredItem(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);
    return { success: true, data: stored };
  },

  async getAppointmentByToken(token) {
    const appointments = getStoredItem(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);
    const apt = appointments.find(a => a.tokenNumber === token || a.id === token);
    return { success: !!apt, data: apt };
  },

  async createAppointment(data = {}) {
    const appointments = getStoredItem(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);
    const tokenNum = `VC-${Math.floor(1000 + Math.random() * 9000)}`;
    const newAppointment = {
      id: `apt-${Date.now()}`,
      tokenNumber: tokenNum,
      patientName: sanitizeText(data.patientName || "Patient", 100),
      patientPhone: sanitizeText(data.patientPhone || "", 30),
      patientEmail: sanitizeText(data.patientEmail || "", 120),
      patientAge: sanitizeText(data.patientAge || "30", 5),
      patientGender: sanitizeText(data.patientGender || "Male", 20),
      doctorName: sanitizeText(data.doctorName || "Senior Consultant", 120),
      departmentName: sanitizeText(data.departmentName || "General Consultation", 120),
      appointmentDate: sanitizeText(data.appointmentDate || "Today", 30),
      appointmentTime: sanitizeText(data.appointmentTime || "10:00 AM", 20),
      status: "Confirmed",
      type: sanitizeText(data.type || data.consultationType || "In-Person Consultation", 80),
      timestamp: new Date().toISOString(),
      symptoms: sanitizeText(data.symptoms || "", 500),
      notes: sanitizeText(data.notes || "", 500),
    };

    const updated = [newAppointment, ...appointments];
    setStoredItem(STORAGE_KEYS.APPOINTMENTS, updated);
    return { success: true, data: newAppointment };
  },

  async updateAppointmentStatus(id, status) {
    const validStatuses = ["Confirmed", "Pending", "Completed", "Cancelled"];
    const safeStatus = validStatuses.includes(status) ? status : "Confirmed";
    const appointments = getStoredItem(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);
    const updated = appointments.map(a =>
      a.id === id || a.tokenNumber === id ? { ...a, status: safeStatus } : a
    );
    setStoredItem(STORAGE_KEYS.APPOINTMENTS, updated);
    return { success: true, data: { id, status: safeStatus } };
  },

  async getEnquiries() {
    const stored = getStoredItem(STORAGE_KEYS.ENQUIRIES, []);
    return { success: true, data: stored };
  },

  async createEnquiry(data = {}) {
    const enquiries = getStoredItem(STORAGE_KEYS.ENQUIRIES, []);
    const newEnquiry = {
      id: `enq-${Date.now()}`,
      name: sanitizeText(data.name || "Anonymous Patient", 100),
      phone: sanitizeText(data.phone || "", 30),
      email: sanitizeText(data.email || "", 120),
      department: sanitizeText(data.department || "General Consultation", 100),
      subject: sanitizeText(data.subject || "Clinical Inquiry", 150),
      message: sanitizeText(data.message || "", 1000),
      status: "Pending Triage",
      timestamp: new Date().toISOString(),
    };
    const updated = [newEnquiry, ...enquiries];
    setStoredItem(STORAGE_KEYS.ENQUIRIES, updated);
    return { success: true, data: newEnquiry };
  },

  async updateEnquiryStatus(id, status) {
    const enquiries = getStoredItem(STORAGE_KEYS.ENQUIRIES, []);
    const updated = enquiries.map(e => (e.id === id ? { ...e, status } : e));
    setStoredItem(STORAGE_KEYS.ENQUIRIES, updated);
    return { success: true, data: { id, status } };
  },

  async getAdminStats() {
    const appointments = getStoredItem(STORAGE_KEYS.APPOINTMENTS, INITIAL_APPOINTMENTS);
    return {
      success: true,
      data: {
        ...INITIAL_STATS,
        totalAppointments: INITIAL_STATS.totalAppointments + (appointments.length - INITIAL_APPOINTMENTS.length),
      },
    };
  },
};
