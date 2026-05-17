import { Machine, Alert, User, WorkOrder, SystemGeneratedPlan, ProductionRecord } from '../types';

export const MOCK_USERS: User[] = [
  { id: 'U001', fullName: 'Production Manager', email: 'prod.manager@pmdss.com', role: 'Production Manager', status: 'Active' },
  { id: 'U002', fullName: 'Maintenance Tech', email: 'maint.tech@pmdss.com', role: 'Maintenance Technician', status: 'Active' },
  { id: 'U003', fullName: 'Maintenance Manager', email: 'maint.manager@pmdss.com', role: 'Maintenance Manager', status: 'Active' },
  { id: 'U004', fullName: 'Senior Management', email: 'senior.mgmt@pmdss.com', role: 'Senior Management', status: 'Active' },
  { id: 'U005', fullName: 'Admin User', email: 'admin@pmdss.com', role: 'Admin', status: 'Active' },
];

export const MOCK_MACHINES: Machine[] = [
  { id: 'MCH-001', name: 'Filling Line 1', type: 'Filling', location: 'Line A', nominalCapacity: 500, criticality: 'Critical', installationDate: '2022-01-15', status: 'Active', riskScore: 91 },
  { id: 'MCH-002', name: 'Filling Line 2', type: 'Filling', location: 'Line A', nominalCapacity: 500, criticality: 'High', installationDate: '2022-02-20', status: 'Active', riskScore: 58 },
  { id: 'MCH-003', name: 'Labeling Unit A', type: 'Labeling', location: 'Line B', nominalCapacity: 800, criticality: 'High', installationDate: '2021-11-10', status: 'Active', riskScore: 76 },
  { id: 'MCH-004', name: 'Labeling Unit B', type: 'Labeling', location: 'Line B', nominalCapacity: 800, criticality: 'Medium', installationDate: '2021-12-05', status: 'Under Maintenance', riskScore: 44 },
  { id: 'MCH-005', name: 'Conveyor Belt 1', type: 'Conveyor', location: 'Line A', nominalCapacity: 1000, criticality: 'Medium', installationDate: '2022-03-01', status: 'Active', riskScore: 45 },
  { id: 'MCH-006', name: 'Conveyor Belt 2', type: 'Conveyor', location: 'Line B', nominalCapacity: 1000, criticality: 'Low', installationDate: '2022-03-01', status: 'Active', riskScore: 38 },
  { id: 'MCH-007', name: 'Packaging Robot 1', type: 'Packaging', location: 'Line C', nominalCapacity: 300, criticality: 'Critical', installationDate: '2023-01-10', status: 'Active', riskScore: 87 },
  { id: 'MCH-008', name: 'Packaging Robot 2', type: 'Packaging', location: 'Line C', nominalCapacity: 300, criticality: 'High', installationDate: '2023-01-15', status: 'Active', riskScore: 51 },
  { id: 'MCH-009', name: 'Sealing Machine A', type: 'Sealing', location: 'Line A', nominalCapacity: 600, criticality: 'High', installationDate: '2022-05-12', status: 'Active', riskScore: 72 },
  { id: 'MCH-010', name: 'Sealing Machine B', type: 'Sealing', location: 'Line C', nominalCapacity: 600, criticality: 'Medium', installationDate: '2022-06-20', status: 'Idle', riskScore: 33 },
];

export const MOCK_ALERTS: Alert[] = [
  { id: 'ALERT-001', machineId: 'MCH-001', timestamp: '2024-05-16T08:30:00Z', severity: 'Critical', type: 'Risk Threshold Exceeded', message: "Risk Score 91 — immediate maintenance required" },
  { id: 'ALERT-002', machineId: 'MCH-007', timestamp: '2024-05-16T09:15:00Z', severity: 'Critical', type: 'Runtime Limit', message: "Runtime 420 hrs — threshold exceeded" },
  { id: 'ALERT-003', machineId: 'MCH-004', timestamp: '2024-05-15T14:20:00Z', severity: 'Warning', type: 'Overdue Maintenance', message: "Scheduled maintenance overdue by 3 days" },
  { id: 'ALERT-004', machineId: 'MCH-003', timestamp: '2024-05-16T10:00:00Z', severity: 'Warning', type: 'Risk Threshold Exceeded', message: "High utilization 89% for 5 consecutive shifts" },
  { id: 'ALERT-005', machineId: 'MCH-009', timestamp: '2024-05-16T11:45:00Z', severity: 'Info', type: 'Risk Threshold Exceeded', message: "Risk Score approaching threshold (72/85)" },
];

export const MOCK_WORK_ORDERS: WorkOrder[] = [
  { id: 'WO-1001', machineId: 'MCH-001', createdTimestamp: '2024-05-16T08:35:00Z', scheduledDate: '2024-05-17', priority: 'Critical', status: 'Pending Approval', assignedTechnicianId: 'U002' },
  { id: 'WO-1002', machineId: 'MCH-004', createdTimestamp: '2024-05-12T10:00:00Z', scheduledDate: '2024-05-13', priority: 'High', status: 'In Progress', assignedTechnicianId: 'U002' },
  { id: 'WO-1003', machineId: 'MCH-007', createdTimestamp: '2024-05-16T09:20:00Z', scheduledDate: '2024-05-16', priority: 'Critical', status: 'Approved', assignedTechnicianId: 'U002' },
  { id: 'WO-1004', machineId: 'MCH-003', createdTimestamp: '2024-05-14T11:00:00Z', scheduledDate: '2024-05-18', priority: 'Medium', status: 'Pending Approval', assignedTechnicianId: 'U002' },
];

export const MOCK_PLANS: SystemGeneratedPlan[] = [
  { id: 'PLAN-001', machineId: 'MCH-001', generatedTimestamp: '2024-05-16T08:30:00Z', riskScore: 91, recommendedDate: '2024-05-17', recommendedType: 'Preventive', triggerReason: 'Risk score exceeded 85', status: 'Pending Approval' },
  { id: 'PLAN-002', machineId: 'MCH-007', generatedTimestamp: '2024-05-16T09:15:00Z', riskScore: 87, recommendedDate: '2024-05-16', recommendedType: 'Predictive', triggerReason: 'Runtime hours threshold reached', status: 'Pending Approval' },
  { id: 'PLAN-003', machineId: 'MCH-003', generatedTimestamp: '2024-05-16T10:00:00Z', riskScore: 76, recommendedDate: '2024-05-20', recommendedType: 'Preventive', triggerReason: 'High intensity usage detected', status: 'Pending Approval' },
];

export const MOCK_PRODUCTION: ProductionRecord[] = Array.from({ length: 30 }, (_, i) => ({
  id: `PR-${i}`,
  machineId: 'MCH-001',
  shiftDate: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  shiftType: i % 3 === 0 ? 'Morning' : i % 3 === 1 ? 'Afternoon' : 'Night',
  productionVolume: 400 + Math.random() * 100,
  runtimeHours: 7 + Math.random(),
  capacityUtilizationRate: 80 + Math.random() * 15,
  recordedBy: 'U001',
}));

export const KPI_DATA = {
  fleetOee: 73,
  avgCapUtilization: 78,
  activeCriticalAlerts: 2,
  pendingWoApprovals: 3,
  fleetMtbf: 412,
  fleetMttr: 3.2,
  totalWosMtd: 14,
  overdueWos: 2,
  unplannedDowntime: 11,
};
