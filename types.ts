export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: "Pendidikan" | "Keagamaan" | "Sistem Admin" | "E-Procurement" | "Desain Web";
  tags: string[];
  features?: string[];
}

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string; // lucide class name / identifier
  features: string[];
}

export interface SocialContact {
  id: string;
  platform: "WhatsApp" | "Email" | "Facebook" | "Instagram" | "TikTok" | "YouTube";
  username: string;
  href: string;
  color: string;
  icon: string;
}

export interface OrderFormData {
  name: string;
  organization: string;
  email: string;
  whatsapp: string;
  category: string;
  requirements: string;
  budgetEst: string;
}

export interface OrderRecord extends OrderFormData {
  id: string;
  date: string;
  status: "Diproses" | "Terjadwal" | "Selesai";
}

export interface CustomAboutData {
  name: string;
  title: string;
  bio: string;
  photoUrl: string | null;
}

export interface ProjectSimulationPlan {
  success: boolean;
  mode: "ai" | "simulated" | "fallback";
  planText: string;
  warning?: string;
}
