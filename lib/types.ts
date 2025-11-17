export interface HostingPlan {
  name: string;
  url: string;
  prices: {
    bdt: { monthly: number; yearly: number };
    usd: { monthly: number; yearly: number };
  };
  features: string[];
  popular?: boolean;
}

export interface ServerPlan {
  name: string;
  url: string;
  prices: {
    bdt: {  originalMonthly: number; 
    originalYearly: number;
    salesmonthly: number;
    salesyearly: number; }; 
    usd: {  originalMonthly: number; 
    originalYearly: number;
    salesmonthly: number;
    salesyearly: number; }; // salesmonthly: number; salesyearly: number;   
  };
  specs: {
    cpu: string;
    memory: string;
    hardDrive: string;
    bandwidth: string;
  };
  popular?: boolean;
}
