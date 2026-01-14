export interface AuthUser {
  // --- Core Identity ---
  _id: string | number; // Represents the MongoDB _id, but typed for frontend use
  email: string;
  fullName: string;
  imageUrl?: string;

  // --- Role & Status for Permissions ---
  role: "guest" | "member" | "moderator" | "admin" | "alumni";
  applicationStatus: "pending" | "email_verified" | "admin_review" | "approved" | "rejected";
  profileStatus: "incomplete" | "active" | "deleted" | "banned";
  isApproved: boolean;
  isVerified: boolean; // From backend's isVerified

  // --- Profile Details ---
  studentId?: string;
  session?: string;
  batch?: string;
  department?: string;
  isGraduated: boolean;
  passingYear?: number;
  clubId?: string | null;

  // --- Contact & Social ---
  contactNumber?: string;
  address?: string;
  bio?: string;

  socialLinks?: {
    facebook?: string;
    github?: string;
    linkedin?: string;
  };

  // --- Activity Metrics (Simple Counts or IDs for display) ---
  eventsAttended?: number | string[];
  certificates?: number | string[];
  projectsContributed?: number | string[];
}
export interface DashboardStats {
  membership: {
    totalMembers: number;
    totalActiveMembers: number;
    totalAlumni: number;
    pendingApplications: number;
  };

  activities: {
    totalEvents: number;
    upcomingEvents: number;
    totalCertificates: number;
    totalProjects: number;
  };

  resources: {
    totalSponsors: number;
    activeSponsors: number;
    totalAssets: number;
  };
}

export interface MembersData {
  _id: string;
  fullName: string;
  imageUrl: string;
  email: string;
  role: string;
  applicationStatus: string;
  profileStatus: string;
  activityCounts: number;
}
