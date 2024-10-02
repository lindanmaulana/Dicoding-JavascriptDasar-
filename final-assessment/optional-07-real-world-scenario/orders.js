// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const randomId = Math.floor(Math.random() * 9999);
  orders = [
    ...orders,
    {
      id: randomId,
      customerName,
      items,
      status: "Menunggu",
    },
  ];
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  orders.find((order) => {
    if (order.id === orderId) {
      return (order.status = status);
    }
  });
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const or = orders.find((order) => order.status === "Selesai");
  return or.items.reduce((acc, call) => acc + call.price, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  return orders = orders.filter((order) => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
