import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Trainings from './pages/trainings/Trainings';
import CRM from './pages/crm/CRM';
import Trainers from './pages/trainers/Trainers';
import Workflow from './pages/workflow/Workflow';
import Documents from './pages/documents/Documents';
import Reports from './pages/reports/Reports';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-y-auto p-4">
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/trainings" component={Trainings} />
                <PrivateRoute path="/crm" component={CRM} />
                <PrivateRoute path="/trainers" component={Trainers} />
                <PrivateRoute path="/workflow" component={Workflow} />
                <PrivateRoute path="/documents" component={Documents} />
                <PrivateRoute path="/reports" component={Reports} />
                <Route path="/login" component={Login} />
              </Switch>
            </main>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
