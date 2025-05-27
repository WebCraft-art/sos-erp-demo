import React from 'react';
import CalendarWidget from '../components/dashboard/CalendarWidget';
import NotificationsWidget from '../components/dashboard/NotificationsWidget';
import StatsWidget from '../components/dashboard/StatsWidget';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <CalendarWidget />
        </div>
        <div>
          <NotificationsWidget />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsWidget title="Nadchodzące szkolenia" value="0" />
        <StatsWidget title="Do zatwierdzenia" value="0" />
        <StatsWidget title="Rentowność" value="0%" />
      </div>
    </div>
  );
};

export default Dashboard;
