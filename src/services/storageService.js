import { initialRegistrations, initialOrders, initialSales } from '../data/initialAdminData';

const KEYS = {
  REGISTRATIONS: 'ms_studio_registrations',
  ORDERS: 'ms_studio_orders',
  SALES: 'ms_studio_sales'
};

// Helper to initialize or read from storage
function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`Storage error reading ${key}:`, err);
    return fallback;
  }
}

function writeStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`Storage error saving ${key}:`, err);
  }
}

export const storageService = {
  // REGISTRATIONS
  getRegistrations: async () => {
    return readStorage(KEYS.REGISTRATIONS, initialRegistrations);
  },

  addRegistration: async (regData) => {
    const list = readStorage(KEYS.REGISTRATIONS, initialRegistrations);
    const newRecord = {
      id: `REG-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
      submittedAt: new Date().toISOString(),
      status: 'New',
      ...regData
    };
    const updated = [newRecord, ...list];
    writeStorage(KEYS.REGISTRATIONS, updated);
    return newRecord;
  },

  updateRegistrationStatus: async (id, status) => {
    const list = readStorage(KEYS.REGISTRATIONS, initialRegistrations);
    const updated = list.map(item => item.id === id ? { ...item, status } : item);
    writeStorage(KEYS.REGISTRATIONS, updated);
    return updated;
  },

  deleteRegistration: async (id) => {
    const list = readStorage(KEYS.REGISTRATIONS, initialRegistrations);
    const updated = list.filter(item => item.id !== id);
    writeStorage(KEYS.REGISTRATIONS, updated);
    return updated;
  },

  // ORDERS / COMMISSIONS
  getOrders: async () => {
    return readStorage(KEYS.ORDERS, initialOrders);
  },

  addOrder: async (orderData) => {
    const list = readStorage(KEYS.ORDERS, initialOrders);
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      submittedAt: new Date().toISOString(),
      status: 'New Request',
      ...orderData
    };
    const updated = [newOrder, ...list];
    writeStorage(KEYS.ORDERS, updated);
    return newOrder;
  },

  updateOrderStatus: async (id, status) => {
    const list = readStorage(KEYS.ORDERS, initialOrders);
    const updated = list.map(item => item.id === id ? { ...item, status } : item);
    writeStorage(KEYS.ORDERS, updated);
    return updated;
  },

  deleteOrder: async (id) => {
    const list = readStorage(KEYS.ORDERS, initialOrders);
    const updated = list.filter(item => item.id !== id);
    writeStorage(KEYS.ORDERS, updated);
    return updated;
  },

  // SALES TRACKING
  getSales: async () => {
    return readStorage(KEYS.SALES, initialSales);
  },

  addSale: async (saleData) => {
    const list = readStorage(KEYS.SALES, initialSales);
    const newSale = {
      id: `SALE-${Math.floor(100 + Math.random() * 900)}`,
      date: new Date().toISOString().split('T')[0],
      saleStatus: saleData.saleStatus || 'Paid',
      ...saleData
    };
    const updated = [newSale, ...list];
    writeStorage(KEYS.SALES, updated);
    return newSale;
  },

  updateSaleStatus: async (id, status) => {
    const list = readStorage(KEYS.SALES, initialSales);
    const updated = list.map(item => item.id === id ? { ...item, saleStatus: status } : item);
    writeStorage(KEYS.SALES, updated);
    return updated;
  },

  deleteSale: async (id) => {
    const list = readStorage(KEYS.SALES, initialSales);
    const updated = list.filter(item => item.id !== id);
    writeStorage(KEYS.SALES, updated);
    return updated;
  },

  // OVERVIEW METRICS CALCULATION
  getMetrics: async () => {
    const [regs, orders, sales] = await Promise.all([
      storageService.getRegistrations(),
      storageService.getOrders(),
      storageService.getSales()
    ]);

    const activeStudents = regs.filter(r => r.status === 'Enrolled' || r.status === 'Confirmed').length;
    
    // Calculate total revenue from confirmed/enrolled courses + completed/confirmed orders + paid/delivered sales
    const courseRevenue = regs
      .filter(r => r.status === 'Enrolled' || r.status === 'Confirmed')
      .reduce((sum, r) => sum + (Number(r.fee) || 0), 0);

    const orderRevenue = orders
      .filter(o => o.status === 'Confirmed' || o.status === 'In Progress' || o.status === 'Completed')
      .reduce((sum, o) => sum + (Number(o.price) || 0), 0);

    const productRevenue = sales
      .filter(s => s.saleStatus === 'Paid' || s.saleStatus === 'Delivered')
      .reduce((sum, s) => sum + ((Number(s.sellingPrice) || 0) * (Number(s.quantity) || 1)), 0);

    const totalRevenue = courseRevenue + orderRevenue + productRevenue;

    return {
      totalRegistrations: regs.length,
      activeStudents,
      artworkOrders: orders.length,
      productsSold: sales.reduce((acc, s) => acc + (Number(s.quantity) || 1), 0),
      totalRevenue
    };
  }
};
