import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiUsers, 
  FiShoppingBag, 
  FiCheckCircle, 
  FiDollarSign, 
  FiTrendingUp, 
  FiSearch, 
  FiPlus, 
  FiTrash2, 
  FiX, 
  FiPhone, 
  FiMail, 
  FiMapPin 
} from 'react-icons/fi';
import Button from '../common/Button';
import BackButton from '../common/BackButton';
import { CustomInput, CustomSelect } from '../common/CustomControls';
import { EmptyState, WarningModal } from '../common/StateViews';
import { storageService } from '../../services/storageService';
import { artCourses } from '../../data/courses';

export default function AdminDashboard({ onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'registrations' | 'orders' | 'sales'
  const [metrics, setMetrics] = useState({
    totalRegistrations: 0,
    activeStudents: 0,
    artworkOrders: 0,
    productsSold: 0,
    totalRevenue: 0
  });

  const [registrations, setRegistrations] = useState([]);
  const [orders, setOrders] = useState([]);
  const [sales, setSales] = useState([]);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [courseFilter, setCourseFilter] = useState('all');
  const [regStatusFilter, setRegStatusFilter] = useState('all');
  const [orderStatusFilter, setOrderStatusFilter] = useState('all');

  // Selected applicant detail modal
  const [selectedReg, setSelectedReg] = useState(null);

  // Destructive Action Warning Modal state
  const [warningModal, setWarningModal] = useState({
    isOpen: false,
    title: '',
    description: '',
    onConfirm: null
  });

  // New Sale modal
  const [showAddSaleModal, setShowAddSaleModal] = useState(false);
  const [newSaleData, setNewSaleData] = useState({
    productName: '',
    category: 'Canvas Painting',
    sellingPrice: '',
    quantity: 1,
    customer: '',
    saleStatus: 'Paid'
  });

  const loadData = async () => {
    const [m, r, o, s] = await Promise.all([
      storageService.getMetrics(),
      storageService.getRegistrations(),
      storageService.getOrders(),
      storageService.getSales()
    ]);
    setMetrics(m);
    setRegistrations(r);
    setOrders(o);
    setSales(s);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Status Handlers
  const handleRegStatusChange = async (id, status) => {
    await storageService.updateRegistrationStatus(id, status);
    loadData();
  };

  const handleOrderStatusChange = async (id, status) => {
    await storageService.updateOrderStatus(id, status);
    loadData();
  };

  const handleSaleStatusChange = async (id, status) => {
    await storageService.updateSaleStatus(id, status);
    loadData();
  };

  const confirmDeleteReg = (id) => {
    setWarningModal({
      isOpen: true,
      title: 'Delete Registration Record',
      description: 'Are you sure you want to delete this applicant registration? This will permanently remove their records from the local system.',
      onConfirm: async () => {
        await storageService.deleteRegistration(id);
        setWarningModal({ isOpen: false });
        loadData();
      }
    });
  };

  const confirmDeleteOrder = (id) => {
    setWarningModal({
      isOpen: true,
      title: 'Delete Artwork Commission Order',
      description: 'Are you sure you want to delete this artwork order record? This cannot be undone.',
      onConfirm: async () => {
        await storageService.deleteOrder(id);
        setWarningModal({ isOpen: false });
        loadData();
      }
    });
  };

  const confirmDeleteSale = (id) => {
    setWarningModal({
      isOpen: true,
      title: 'Delete Sale Entry',
      description: 'Are you sure you want to delete this ledger sale transaction?',
      onConfirm: async () => {
        await storageService.deleteSale(id);
        setWarningModal({ isOpen: false });
        loadData();
      }
    });
  };

  const handleCreateSale = async (e) => {
    e.preventDefault();
    if (!newSaleData.productName || !newSaleData.sellingPrice) return;
    await storageService.addSale({
      ...newSaleData,
      sellingPrice: Number(newSaleData.sellingPrice)
    });
    setShowAddSaleModal(false);
    setNewSaleData({
      productName: '',
      category: 'Canvas Painting',
      sellingPrice: '',
      quantity: 1,
      customer: '',
      saleStatus: 'Paid'
    });
    loadData();
  };

  // Filtered lists
  const filteredRegistrations = registrations.filter(r => {
    const matchesSearch = 
      (r.applicantName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.id || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.phone || '').includes(searchQuery);
    const matchesCourse = courseFilter === 'all' || r.courseId === courseFilter;
    const matchesStatus = regStatusFilter === 'all' || r.status === regStatusFilter;
    return matchesSearch && matchesCourse && matchesStatus;
  });

  const filteredOrders = orders.filter(o => {
    const matchesSearch = 
      (o.customerName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (o.id || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (o.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (o.phone || '').includes(searchQuery);
    const matchesStatus = orderStatusFilter === 'all' || o.status === orderStatusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredSales = sales.filter(s => {
    return (
      (s.productName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.customer || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.id || '').toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#F7F6F2] text-[#111111] overflow-y-auto text-left">
      
      {/* TOP PORTAL BAR: BackButton ALWAYS ON THE LEFT */}
      <header className="sticky top-0 z-30 bg-[#F7F6F2] border-b border-[#D8D6D0] px-6 sm:px-10 py-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-6">
          <BackButton
            onClick={onClose}
            label="Back to Studio"
          />
          <span className="text-[#D8D6D0] hidden sm:inline">|</span>
          <div className="hidden sm:block">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#777777] block">
              Administrative Desk
            </span>
            <span className="font-cinzel text-sm font-semibold text-[#111111]">
              MS Tattoo & Art Studio Management
            </span>
          </div>
        </div>

        {/* Action / Timing */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="hidden md:inline text-[#777777]">Studio Timings: 10:30 AM – 5:00 PM</span>
          <Button variant="outline" size="sm" onClick={onClose} icon={FiX}>
            Close Portal
          </Button>
        </div>
      </header>

      {/* PORTAL MAIN CONTENT */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 py-8 w-full space-y-8">
        
        {/* TAB NAVIGATION STRIP */}
        <div className="flex border-b border-[#D8D6D0] gap-2 overflow-x-auto">
          {[
            { id: 'overview', label: 'Studio Overview' },
            { id: 'registrations', label: `Academy Registrations (${registrations.length})` },
            { id: 'orders', label: `Artwork Inquiries (${orders.length})` },
            { id: 'sales', label: `Sales Tracker (${sales.length})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-5 text-xs uppercase tracking-[0.2em] font-medium transition-colors whitespace-nowrap border-b-2 -mb-[1px] cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#111111] text-[#111111] font-bold'
                  : 'border-transparent text-[#777777] hover:text-[#111111]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* 5 KPI Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="p-6 bg-[#EFEDE7] border border-[#D8D6D0]">
                <div className="flex items-center justify-between text-[#777777] mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest">Total Applications</span>
                  <FiUsers className="text-base text-[#111111]" />
                </div>
                <span className="font-cinzel text-3xl text-[#111111] font-bold block">
                  {metrics.totalRegistrations}
                </span>
                <span className="text-[11px] text-[#777777] font-mono mt-1 block">
                  All Academy Inquiries
                </span>
              </div>

              <div className="p-6 bg-[#EFEDE7] border border-[#D8D6D0]">
                <div className="flex items-center justify-between text-[#777777] mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest">Active Students</span>
                  <FiCheckCircle className="text-base text-[#111111]" />
                </div>
                <span className="font-cinzel text-3xl text-[#111111] font-bold block">
                  {metrics.activeStudents}
                </span>
                <span className="text-[11px] text-[#777777] font-mono mt-1 block">
                  Enrolled / Confirmed
                </span>
              </div>

              <div className="p-6 bg-[#EFEDE7] border border-[#D8D6D0]">
                <div className="flex items-center justify-between text-[#777777] mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest">Artwork Orders</span>
                  <FiShoppingBag className="text-base text-[#111111]" />
                </div>
                <span className="font-cinzel text-3xl text-[#111111] font-bold block">
                  {metrics.artworkOrders}
                </span>
                <span className="text-[11px] text-[#777777] font-mono mt-1 block">
                  Portraits & Tattoos
                </span>
              </div>

              <div className="p-6 bg-[#EFEDE7] border border-[#D8D6D0]">
                <div className="flex items-center justify-between text-[#777777] mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest">Artworks Sold</span>
                  <FiTrendingUp className="text-base text-[#111111]" />
                </div>
                <span className="font-cinzel text-3xl text-[#111111] font-bold block">
                  {metrics.productsSold}
                </span>
                <span className="text-[11px] text-[#777777] font-mono mt-1 block">
                  Direct Studio Sales
                </span>
              </div>

              <div className="p-6 bg-[#EFEDE7] border border-[#111111]">
                <div className="flex items-center justify-between text-[#777777] mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#111111] font-bold">Total Revenue</span>
                  <FiDollarSign className="text-base text-[#111111]" />
                </div>
                <span className="font-cinzel text-3xl text-[#111111] font-bold block">
                  ₹{metrics.totalRevenue.toLocaleString()}
                </span>
                <span className="text-[11px] text-[#777777] font-mono mt-1 block">
                  Confirmed Collections
                </span>
              </div>
            </div>

            {/* Quick Actions & Recent Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Registrations Card */}
              <div className="bg-white border border-[#e4e4e7] p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#e4e4e7]">
                  <h4 className="font-cinzel text-base font-semibold text-[#0a0a0a] uppercase tracking-wider">
                    Recent Academy Applications
                  </h4>
                  <button
                    onClick={() => setActiveTab('registrations')}
                    className="text-xs uppercase font-mono text-[#111111] hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="space-y-3">
                  {registrations.slice(0, 4).map((r) => (
                    <div key={r.id} className="p-3 bg-[#F7F6F2] border border-[#D8D6D0] flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-[#111111] block">{r.applicantName}</strong>
                        <span className="text-[#777777] text-[11px]">{r.courseName}</span>
                      </div>
                      <span className="px-2 py-0.5 border border-[#D8D6D0] font-mono text-[10px] uppercase">
                        {r.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Commissions Card */}
              <div className="bg-[#EFEDE7] border border-[#D8D6D0] p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#D8D6D0]">
                  <h4 className="font-cinzel text-base font-semibold text-[#111111] uppercase tracking-wider">
                    Recent Commission Inquiries
                  </h4>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className="text-xs uppercase font-mono text-[#111111] hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="space-y-3">
                  {orders.slice(0, 4).map((o) => (
                    <div key={o.id} className="p-3 bg-[#F7F6F2] border border-[#D8D6D0] flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-[#111111] block">{o.customerName}</strong>
                        <span className="text-[#777777] text-[11px]">{o.artworkType}</span>
                      </div>
                      <span className="font-mono text-[#111111] font-bold">
                        {o.formattedPrice || `₹${o.price?.toLocaleString()}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REGISTRATIONS TAB */}
        {activeTab === 'registrations' && (
          <div className="space-y-6">
            {/* Search & Filter Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#EFEDE7] p-4 border border-[#D8D6D0]">
              <div className="relative">
                <FiSearch className="absolute left-3.5 top-3 text-[#777777]" />
                <input
                  type="text"
                  placeholder="Search applicant name, email, ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs border border-[#D8D6D0] bg-[#F7F6F2] focus:border-[#111111] outline-none"
                />
              </div>

              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-[#D8D6D0] bg-[#F7F6F2] outline-none"
              >
                <option value="all">All Courses</option>
                {artCourses.map((c) => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>

              <select
                value={regStatusFilter}
                onChange={(e) => setRegStatusFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-[#D8D6D0] bg-[#F7F6F2] outline-none"
              >
                <option value="all">All Statuses</option>
                <option value="New">New</option>
                <option value="Under Review">Under Review</option>
                <option value="Interview Scheduled">Interview Scheduled</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Enrolled">Enrolled</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Table or Empty State */}
            {filteredRegistrations.length > 0 ? (
              <div className="bg-white border border-[#e4e4e7] overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#fafafa] border-b border-[#e4e4e7] uppercase font-mono text-[10px] text-[#71717a]">
                    <tr>
                      <th className="py-3 px-4">Applicant</th>
                      <th className="py-3 px-4">Program</th>
                      <th className="py-3 px-4">Tuition</th>
                      <th className="py-3 px-4">Preferred Date</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e4e4e7]">
                    {filteredRegistrations.map((r) => (
                      <tr key={r.id} className="hover:bg-[#fafafa] transition-colors">
                        <td className="py-3.5 px-4">
                          <strong className="text-[#0a0a0a] block">{r.applicantName}</strong>
                          <span className="text-[#71717a] text-[11px] font-mono">{r.phone} • {r.city}</span>
                        </td>
                        <td className="py-3.5 px-4 font-medium">{r.courseName}</td>
                        <td className="py-3.5 px-4 font-mono font-semibold">{r.formattedFee || `₹${r.fee?.toLocaleString()}`}</td>
                        <td className="py-3.5 px-4 font-mono">{r.preferredStartDate}</td>
                        <td className="py-3.5 px-4">
                          <select
                            value={r.status}
                            onChange={(e) => handleRegStatusChange(r.id, e.target.value)}
                            className="px-2 py-1 text-[11px] border border-[#e4e4e7] bg-white font-mono"
                          >
                            <option value="New">New</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Enrolled">Enrolled</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right space-x-2">
                          <button
                            onClick={() => setSelectedReg(r)}
                            className="px-2 py-1 text-[10px] border border-[#e4e4e7] hover:border-[#0a0a0a] font-mono"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => confirmDeleteReg(r.id)}
                            className="p-1 text-[#dc2626] hover:text-[#991b1b]"
                            title="Delete"
                          >
                            <FiTrash2 className="text-xs" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <EmptyState
                title="No Registrations Found"
                subtitle="No applicant records match your active search and filter criteria."
                actionLabel="Clear Filters"
                onAction={() => {
                  setSearchQuery('');
                  setCourseFilter('all');
                  setRegStatusFilter('all');
                }}
              />
            )}
          </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 border border-[#e4e4e7]">
              <div className="relative">
                <FiSearch className="absolute left-3.5 top-3 text-[#71717a]" />
                <input
                  type="text"
                  placeholder="Search customer name, ID, email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs border border-[#e4e4e7] focus:border-[#0a0a0a] outline-none"
                />
              </div>

              <select
                value={orderStatusFilter}
                onChange={(e) => setOrderStatusFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-[#e4e4e7] bg-white outline-none"
              >
                <option value="all">All Order Statuses</option>
                <option value="New Request">New Request</option>
                <option value="Confirmed">Confirmed</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {filteredOrders.length > 0 ? (
              <div className="bg-white border border-[#e4e4e7] overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#fafafa] border-b border-[#e4e4e7] uppercase font-mono text-[10px] text-[#71717a]">
                    <tr>
                      <th className="py-3 px-4">Client</th>
                      <th className="py-3 px-4">Discipline / Size</th>
                      <th className="py-3 px-4">Quotation</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e4e4e7]">
                    {filteredOrders.map((o) => (
                      <tr key={o.id} className="hover:bg-[#fafafa] transition-colors">
                        <td className="py-3.5 px-4">
                          <strong className="text-[#0a0a0a] block">{o.customerName}</strong>
                          <span className="text-[#71717a] text-[11px] font-mono">{o.phone} • {o.email}</span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="block font-medium">{o.artworkType}</span>
                          <span className="text-[#71717a] text-[11px]">{o.typeCategory} • {o.size}</span>
                        </td>
                        <td className="py-3.5 px-4 font-mono font-semibold">
                          {o.formattedPrice || `₹${o.price?.toLocaleString()}`}
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={o.status}
                            onChange={(e) => handleOrderStatusChange(o.id, e.target.value)}
                            className="px-2 py-1 text-[11px] border border-[#e4e4e7] bg-white font-mono"
                          >
                            <option value="New Request">New Request</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => confirmDeleteOrder(o.id)}
                            className="p-1 text-[#dc2626] hover:text-[#991b1b]"
                            title="Delete"
                          >
                            <FiTrash2 className="text-xs" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <EmptyState
                title="No Commission Orders Found"
                subtitle="No commission requests currently match the filter criteria."
                actionLabel="Clear Filters"
                onAction={() => {
                  setSearchQuery('');
                  setOrderStatusFilter('all');
                }}
              />
            )}
          </div>
        )}

        {/* SALES TAB */}
        {activeTab === 'sales' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 border border-[#e4e4e7]">
              <div className="relative w-full sm:w-80">
                <FiSearch className="absolute left-3.5 top-3 text-[#71717a]" />
                <input
                  type="text"
                  placeholder="Search sales transactions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs border border-[#e4e4e7] focus:border-[#0a0a0a] outline-none"
                />
              </div>

              <Button
                variant="primary"
                size="sm"
                icon={FiPlus}
                onClick={() => setShowAddSaleModal(true)}
              >
                Add Sale Entry
              </Button>
            </div>

            {filteredSales.length > 0 ? (
              <div className="bg-white border border-[#e4e4e7] overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#fafafa] border-b border-[#e4e4e7] uppercase font-mono text-[10px] text-[#71717a]">
                    <tr>
                      <th className="py-3 px-4">Item / Artwork</th>
                      <th className="py-3 px-4">Customer</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Price</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e4e4e7]">
                    {filteredSales.map((s) => (
                      <tr key={s.id} className="hover:bg-[#fafafa] transition-colors">
                        <td className="py-3.5 px-4 font-medium">{s.productName}</td>
                        <td className="py-3.5 px-4 text-[#71717a]">{s.customer}</td>
                        <td className="py-3.5 px-4 font-mono">{s.date}</td>
                        <td className="py-3.5 px-4 font-mono font-semibold">₹{(Number(s.sellingPrice) * (Number(s.quantity) || 1)).toLocaleString()}</td>
                        <td className="py-3.5 px-4">
                          <select
                            value={s.saleStatus}
                            onChange={(e) => handleSaleStatusChange(s.id, e.target.value)}
                            className="px-2 py-1 text-[11px] border border-[#e4e4e7] bg-white font-mono"
                          >
                            <option value="Paid">Paid</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Pending">Pending</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => confirmDeleteSale(s.id)}
                            className="p-1 text-[#dc2626] hover:text-[#991b1b]"
                            title="Delete"
                          >
                            <FiTrash2 className="text-xs" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <EmptyState
                title="No Sales Transactions"
                subtitle="No recorded artwork sales found in the studio ledger."
                actionLabel="Record New Sale"
                onAction={() => setShowAddSaleModal(true)}
              />
            )}
          </div>
        )}
      </div>

      {/* APPLICANT DETAIL MODAL (With Back button on LEFT) */}
      {selectedReg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white border border-[#e4e4e7] p-8 max-w-xl w-full space-y-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-[#e4e4e7]">
              <BackButton
                onClick={() => setSelectedReg(null)}
                label="Back"
              />
              <span className="font-mono text-xs text-[#71717a]">{selectedReg.id}</span>
            </div>

            <div className="space-y-4 text-xs">
              <h4 className="font-cinzel text-xl text-[#0a0a0a]">{selectedReg.applicantName}</h4>
              <div className="grid grid-cols-2 gap-3 p-4 bg-[#fafafa] border border-[#e4e4e7] font-mono">
                <div><span className="text-[#71717a] block">Phone:</span> {selectedReg.phone}</div>
                <div><span className="text-[#71717a] block">Email:</span> {selectedReg.email}</div>
                <div><span className="text-[#71717a] block">City:</span> {selectedReg.city}</div>
                <div><span className="text-[#71717a] block">Program:</span> {selectedReg.courseName}</div>
              </div>
              {selectedReg.notes && (
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#71717a] font-mono block mb-1">Notes</span>
                  <p className="p-3 bg-[#fafafa] border border-[#e4e4e7] text-[#52525b] leading-relaxed">{selectedReg.notes}</p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#e4e4e7] flex justify-end">
              <Button variant="primary" size="sm" onClick={() => setSelectedReg(null)}>
                Close Details
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* NEW SALE ENTRY MODAL */}
      {showAddSaleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <form onSubmit={handleCreateSale} className="bg-white border border-[#e4e4e7] p-8 max-w-md w-full space-y-4 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-[#e4e4e7]">
              <BackButton onClick={() => setShowAddSaleModal(false)} label="Back" />
              <span className="font-cinzel text-xs uppercase tracking-wider font-semibold">New Sale</span>
            </div>

            <CustomInput
              label="Artwork / Item Title"
              value={newSaleData.productName}
              onChange={(e) => setNewSaleData({ ...newSaleData, productName: e.target.value })}
              placeholder="e.g. A3 Charcoal Portrait"
              required
            />

            <CustomInput
              label="Selling Price (₹)"
              type="number"
              value={newSaleData.sellingPrice}
              onChange={(e) => setNewSaleData({ ...newSaleData, sellingPrice: e.target.value })}
              placeholder="3500"
              required
            />

            <CustomInput
              label="Client Name"
              value={newSaleData.customer}
              onChange={(e) => setNewSaleData({ ...newSaleData, customer: e.target.value })}
              placeholder="Customer Name"
              required
            />

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#e4e4e7]">
              <Button variant="ghost" size="sm" onClick={() => setShowAddSaleModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Record Transaction
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* CUSTOM DESTRUCTIVE WARNING MODAL */}
      <WarningModal
        isOpen={warningModal.isOpen}
        title={warningModal.title}
        description={warningModal.description}
        onConfirm={warningModal.onConfirm}
        onClose={() => setWarningModal({ isOpen: false })}
      />
    </div>
  );
}
