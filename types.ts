export type UserRole = 'Production Manager' | 'Maintenance Technician' | 'Maintenance Manager' | 'Senior Management' | 'Admin';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  status: 'Active' | 'Inactive';
  lastLogin?: string;
}

export interface Machine {
  id: string;
  name: string;
  type: string;
  location: string;
  nominalCapacity: number;
  criticality: 'Critical' | 'High' | 'Medium' | 'Low';
  installationDate: string;
  status: 'Active' | 'Under Maintenance' | 'Idle';
  assignedTechnicianId?: string;
  riskScore: number;
}

export interface ProductionRecord {
  id: string;
  machineId: string;
  shiftDate: string;
  shiftType: 'Morning' | 'Afternoon' | 'Night';
  productionVolume: number;
  runtimeHours: number;
  capacityUtilizationRate: number;
  recordedBy: string;
}

export interface MaintenanceLog {
  id: string;
  woId: string;
  machineId: string;
  technicianId: string;
  interventionDate: string;
  type: 'Preventive' | 'Corrective' | 'Predictive';
  durationHours: number;
  actionsPerformed: string;
  outcome: 'Resolved' | 'Partial' | 'Escalated';
  nextRecommendedDate: string;
}

export interface WorkOrder {
  id: string;
  machineId: string;
  planId?: string;
  createdTimestamp: string;
  scheduledDate: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Pending Approval' | 'Approved' | 'In Progress' | 'Completed' | 'Overdue';
  assignedTechnicianId?: string;
  approvedBy?: string;
}

export interface Alert {
  id: string;
  machineId: string;
  timestamp: string;
  severity: 'Critical' | 'Warning' | 'Info';
  type: 'Risk Threshold Exceeded' | 'Overdue Maintenance' | 'Runtime Limit';
  message: string;
  acknowledgedBy?: string;
  acknowledgedTimestamp?: string;
}

export interface SystemGeneratedPlan {
  id: string;
  machineId: string;
  generatedTimestamp: string;
  riskScore: number;
  recommendedDate: string;
  recommendedType: string;
  triggerReason: string;
  status: 'Pending Approval' | 'Approved' | 'Rejected' | 'Deferred';
  reviewedBy?: string;
}
