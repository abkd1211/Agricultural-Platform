"use client"
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TrendingUp, Cloud, Leaf } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, /*CardContent*/ } from '@/components/ui/card';



// Register Chart components for TypeScript compatibility
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

// Sample data for crop prices over time
const cropPriceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  datasets: [
    {
      label: 'Corn',
      data: [150, 160, 155, 180, 175, 200, 210, 220, 225, 230],
      borderColor: 'rgba(34, 197, 94, 1)',
      backgroundColor: 'rgba(34, 197, 94, 0.3)',
      fill: true,
    },
    {
      label: 'Wheat',
      data: [180, 175, 170, 190, 200, 210, 215, 220, 210, 215],
      borderColor: 'rgba(59, 130, 246, 1)',
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      fill: true,
    },
  ],
};

const productionData = {
  labels: ['Corn', 'Wheat', 'Soy', 'Rice'],
  datasets: [
    {
      label: 'Production (tons)',
      data: [400, 300, 200, 100],
      backgroundColor: ['#34D399', '#60A5FA', '#FBBF24', '#F87171'],
    },
  ],
};

const DashboardHome = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to FarmTech Dashboard</h1>

      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader icon={<TrendingUp />}>
          <CardTitle>Current Market Trends</CardTitle>
          <CardDescription>Stay updated with market prices</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader icon={<Cloud />}>
          <CardTitle>Weather Forecast</CardTitle>
          <CardDescription>Get insights on the weather conditions</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader icon={<Leaf />}>
          <CardTitle>Crop Management</CardTitle>
          <CardDescription>Monitor crop growth and productivity</CardDescription>
        </CardHeader>
      </Card>
      </div>

      {/* Graph Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Crop Prices Over Time</h2>
          <Line data={cropPriceData} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Monthly Production</h2>
          <Bar data={productionData} />
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Farm Insights</h2>
        <p className="text-gray-600">
          Use FarmTech’s dashboard to keep track of market trends, production forecasts, and weather predictions. This
          section provides a snapshot of your farming activities, helping you make informed decisions to maximize yield
          and profitability.
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
