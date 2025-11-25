import {
  LayoutDashboard,
  Users,
  Settings,
  Calendar,
  HardHat,
  DollarSign,
  MessageSquare,
  ClipboardCheck,
  User,
} from "lucide-react";

export interface MenuItem {
  key: string;
  label: string;
  icon: any;
}

export interface DashboardMenuConfig {
  member: MenuItem[];
  admin: MenuItem[];
}

export const DASHBOARD_MENU: DashboardMenuConfig = {
  member: [
    { key: "activity", label: "My Activity", icon: LayoutDashboard },
    { key: "certificates", label: "Certificates", icon: ClipboardCheck },
    { key: "events", label: "Upcoming Events", icon: Calendar },
    { key: "profile", label: "Profile Settings", icon: User },
  ],
  admin: [
    { key: "overview", label: "Admin Overview", icon: LayoutDashboard },
    { key: "members", label: "Members & Apps", icon: Users },
    { key: "events", label: "Events & Content", icon: Calendar },
    { key: "assets", label: "Assets & Inventory", icon: HardHat },
    { key: "sponsors", label: "Sponsors & Finance", icon: DollarSign },
    { key: "messages", label: "Contact Messages", icon: MessageSquare },
    { key: "site-settings", label: "Global Settings", icon: Settings },
  ],
};
