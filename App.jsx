import React, { useState } from 'react';
import { useAuth, AuthProvider } from './contexts/AuthContext';
import { Sidebar } from './components/Sidebar';
import { Login } from './pages/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { cn } from './lib/utils';

// Dashboards
import { ProductionDashboard } from './pages/ProductionDashboard';
import { MaintenanceManagerDashboard } from './pages/MaintenanceManagerDashboard';
import { SeniorMgmtDashboard } from './pages/SeniorMgmtDashboard';
import { TechnicianDashboard } from './pages/TechnicianDashboard';
import { ProductionEntry } from './pages/ProductionEntry';
import { MaintenancePlans } from './pages/MaintenancePlans';
import { WorkOrdersPage } from './pages/WorkOrdersPage';
import { FleetOverviewPage } from './pages/FleetOverviewPage';
import { AlertsFeed } from './pages/AlertsFeed';
import { ReportsPage } from './pages/ReportsPage';
import { UserManagement } from './pages/UserManagement';
import { SettingsPage } from './pages/SettingsPage';

function ProtectedRoute({ children, allowedRoles }) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div className="h-screen w-screen bg-slate-900 flex items-center justify-center text-accent-blue font-black italic tracking-[0.3em]">INITIALIZING...</div>;
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

  return <>{children}</>;
}

function RoleRoutes() {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" />;

  const roleRoutes = {
    'Production Manager': '/dashboard',
    'Maintenance Technician': '/workorders',
    'Maintenance Manager': '/mm-dashboard',
    'Senior Management': '/executive',
    'Admin': '/users'
  };

  return <Navigate to={roleRoutes[user.role] || '/login'} replace />;
}

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar - fixed left */}
      <div style={{ 
        width: '280px', 
        minWidth: '280px',
        height: '100vh', 
        position: 'fixed',
        left: 0, top: 0,
        zIndex: 50,
        overflowY: 'auto',
        backgroundColor: '#0F172A',
        pointerEvents: 'auto'
      }}>
        <Sidebar />
      </div>
      
      {/* Main content - offset by sidebar width */}
      <div style={{ 
        marginLeft: '280px', 
        flex: 1, 
        height: '100vh',
        overflowY: 'auto',
        backgroundColor: '#F8FAFC'
      }}>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <RoleRoutes />
            </ProtectedRoute>
          } />

          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={['Production Manager', 'Admin']}>
              <ProductionDashboard />
            </ProtectedRoute>
          } />

          <Route path="/workorders" element={
            <ProtectedRoute allowedRoles={['Maintenance Technician', 'Admin']}>
              <TechnicianDashboard />
            </ProtectedRoute>
          } />

          <Route path="/mm-dashboard" element={
            <ProtectedRoute allowedRoles={['Maintenance Manager', 'Admin']}>
              <MaintenanceManagerDashboard />
            </ProtectedRoute>
          } />

          <Route path="/executive" element={
            <ProtectedRoute allowedRoles={['Senior Management', 'Admin']}>
              <SeniorMgmtDashboard />
            </ProtectedRoute>
          } />

          <Route path="/production-entry" element={
            <ProtectedRoute allowedRoles={['Production Manager', 'Admin']}>
              <ProductionEntry />
            </ProtectedRoute>
          } />

          <Route path="/plans" element={
            <ProtectedRoute allowedRoles={['Production Manager', 'Admin']}>
              <MaintenancePlans />
            </ProtectedRoute>
          } />

          <Route path="/my-work-orders" element={
            <ProtectedRoute allowedRoles={['Maintenance Technician', 'Admin']}>
              <TechnicianDashboard />
            </ProtectedRoute>
          } />

          <Route path="/alerts" element={
            <ProtectedRoute>
              <AlertsFeed />
            </ProtectedRoute>
          } />

          <Route path="/work-orders" element={
            <ProtectedRoute allowedRoles={['Maintenance Manager', 'Admin']}>
              <WorkOrdersPage />
            </ProtectedRoute>
          } />

          <Route path="/fleet" element={
            <ProtectedRoute allowedRoles={['Maintenance Manager', 'Admin', 'Senior Management']}>
              <FleetOverviewPage />
            </ProtectedRoute>
          } />

          <Route path="/users" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <UserManagement />
            </ProtectedRoute>
          } />

          <Route path="/settings" element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <SettingsPage />
            </ProtectedRoute>
          } />

          <Route path="/reports" element={
            <ProtectedRoute>
              <ReportsPage />
            </ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
