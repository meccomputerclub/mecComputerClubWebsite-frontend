// =================================================================================================
// --- TYPES ---
// =================================================================================================

export interface User {
  id: number;
  fullName: string;
  email: string;
  role: "admin" | "member";
  status: "Active" | "Pending" | "Inactive";
  eventsAttended?: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  attendees: number;
  status: "Upcoming" | "Completed";
}

export interface Metrics {
  totalMembers: number;
  pendingApplications: number;
  upcomingEvents: number;
  totalCertificatesIssued: number;
}

export interface Asset {
  id: number;
  name: string;
  status: "Available" | "In Use";
  borrower: string | null;
}

export interface Message {
  id: number;
  subject: string;
  sender: string;
  date: string;
  priority: "High" | "Medium" | "Low";
}

// =================================================================================================
// --- MOCK DATA ---
// =================================================================================================

export const MOCK_USERS: User[] = [
  {
    id: 1,
    fullName: "Alice Johnson (Admin)",
    email: "alice@mec.club",
    role: "admin",
    status: "Active",
    eventsAttended: 12,
  },
  {
    id: 2,
    fullName: "Bob Smith (Member)",
    email: "bob@mec.club",
    role: "member",
    status: "Active",
    eventsAttended: 5,
  },
  {
    id: 3,
    fullName: "Charlie Brown",
    email: "charlie@mec.club",
    role: "member",
    status: "Pending",
  },
];

export const MOCK_EVENTS: Event[] = [
  {
    id: "e1",
    title: "Web Dev Workshop 2025",
    date: "2025-12-10",
    attendees: 85,
    status: "Upcoming",
  },
  {
    id: "e2",
    title: "Annual Robotics Competition",
    date: "2025-11-01",
    attendees: 150,
    status: "Completed",
  },
  {
    id: "e3",
    title: "Python Fundamentals Crash Course",
    date: "2025-09-15",
    attendees: 210,
    status: "Completed",
  },
];

export const MOCK_METRICS: Metrics = {
  totalMembers: 1240,
  pendingApplications: 15,
  upcomingEvents: 5,
  totalCertificatesIssued: 780,
};

export const MOCK_ASSETS: Asset[] = [
  { id: 1, name: "3D Printer (Prusa)", status: "In Use", borrower: "Alice Johnson" },
  { id: 2, name: "VR Headset (Meta Quest)", status: "Available", borrower: null },
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: 1,
    subject: "Sponsor Inquiry",
    sender: "TechCorp Inc.",
    date: "2025-11-20",
    priority: "High",
  },
  {
    id: 2,
    subject: "Website Bug Report",
    sender: "A Member",
    date: "2025-11-19",
    priority: "Medium",
  },
];
