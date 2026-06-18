import React, { useState } from 'react';
import { MdDeleteOutline, MdOutlineRemoveRedEye } from 'react-icons/md';

const MyOrders = () => {
  // Mock order data
  const [orders] = useState([
    {
      id: 1,
      orderNumber: '#ORD-001256',
      date: '2024-01-15',
      status: 'Delivered',
      total: '$250.50',
      items: 5,
      products: [
        { name: 'Wireless Earbuds', price: '$45.99', qty: 1 },
        { name: 'USB-C Cable', price: '$12.99', qty: 2 },
        { name: 'Phone Case', price: '$15.99', qty: 1 },
        { name: 'Screen Protector', price: '$8.99', qty: 1 },
      ]
    },
    {
      id: 2,
      orderNumber: '#ORD-001257',
      date: '2024-01-18',
      status: 'In Transit',
      total: '$180.75',
      items: 3,
      products: [
        { name: 'Keyboard', price: '$65.99', qty: 1 },
        { name: 'Mouse Pad', price: '$12.99', qty: 1 },
        { name: 'USB Hub', price: '$32.99', qty: 1 },
      ]
    },
    {
      id: 3,
      orderNumber: '#ORD-001258',
      date: '2024-01-20',
      status: 'Processing',
      total: '$420.25',
      items: 4,
      products: [
        { name: 'Wireless Mouse', price: '$35.99', qty: 1 },
        { name: 'Laptop Stand', price: '$45.99', qty: 1 },
        { name: 'Webcam', price: '$85.99', qty: 1 },
        { name: 'External SSD', price: '$89.99', qty: 1 },
      ]
    },
    {
      id: 4,
      orderNumber: '#ORD-001259',
      date: '2024-01-22',
      status: 'Delivered',
      total: '$95.50',
      items: 2,
      products: [
        { name: 'Charging Cable', price: '$12.99', qty: 2 },
        { name: 'Power Bank', price: '$45.99', qty: 1 },
      ]
    },
    {
      id: 5,
      orderNumber: '#ORD-001260',
      date: '2024-01-25',
      status: 'Delivered',
      total: '$299.99',
      items: 3,
      products: [
        { name: 'Smart Watch', price: '$180.99', qty: 1 },
        { name: 'Watch Band', price: '$25.99', qty: 2 },
        { name: 'Screen Protector', price: '$8.99', qty: 1 },
      ]
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="custom-container mx-auto w-full min-h-screen py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
        <p className="text-gray-600">You have placed <span className="font-semibold text-[var(--color-accentbkp)]">{orders.length} orders</span> in total</p>
      </div>

      {/* Orders Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <p className="text-gray-600 text-sm mb-2">Total Orders</p>
          <h3 className="text-3xl font-bold text-blue-600">{orders.length}</h3>
        </div>
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <p className="text-gray-600 text-sm mb-2">Delivered</p>
          <h3 className="text-3xl font-bold text-green-600">
            {orders.filter(o => o.status === 'Delivered').length}
          </h3>
        </div>
        <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
          <p className="text-gray-600 text-sm mb-2">Processing</p>
          <h3 className="text-3xl font-bold text-yellow-600">
            {orders.filter(o => o.status === 'Processing').length}
          </h3>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <p className="text-gray-600 text-sm mb-2">In Transit</p>
          <h3 className="text-3xl font-bold text-blue-600">
            {orders.filter(o => o.status === 'In Transit').length}
          </h3>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            {/* Order Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{order.orderNumber}</h3>
                <p className="text-sm text-gray-500">Ordered on {new Date(order.date).toLocaleDateString()}</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium w-fit ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
                <p className="text-lg font-bold text-gray-900">{order.total}</p>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-6">
              <div className="space-y-3">
                {order.products.map((product, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="text-gray-800 font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">Qty: {product.qty}</p>
                    </div>
                    <p className="font-semibold text-gray-900">{product.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600"><span className="font-semibold">{order.items} items</span> in this order</p>
              </div>
            </div>

            {/* Order Actions */}
            <div className="flex flex-col md:flex-row gap-3 p-6 border-t border-gray-100 bg-gray-50">
              <button className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-[var(--color-accentbkp)] text-white rounded hover:bg-opacity-90 transition-all">
                <MdOutlineRemoveRedEye size={18} />
                View Details
              </button>
              <button className="flex items-center justify-center gap-2 flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-all">
                <MdDeleteOutline size={18} />
                Download Invoice
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;