import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from '../components/admin/AdminDashboard';

export default function AdminPage() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#09090b] pt-20">
      <AdminDashboard onClose={handleClose} />
    </div>
  );
}
