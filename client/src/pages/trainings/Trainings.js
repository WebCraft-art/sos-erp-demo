import React, { useState } from 'react';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import OpenTrainings from './OpenTrainings';
import ClosedTrainings from './ClosedTrainings';
import Projects from './Projects';

const Trainings = () => {
  const { path, url } = useRouteMatch();
  const [activeTab, setActiveTab] = useState('open');

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Szkolenia</h1>
      
      <div className="flex border-b border-gray-200 mb-6">
        <NavLink
          to={`${url}/open`}
          className={`py-2 px-4 font-medium ${activeTab === 'open' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('open')}
        >
          Szkolenia otwarte
        </NavLink>
        <NavLink
          to={`${url}/closed`}
          className={`py-2 px-4 font-medium ${activeTab === 'closed' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('closed')}
        >
          Szkolenia zamknięte
        </NavLink>
        <NavLink
          to={`${url}/projects`}
          className={`py-2 px-4 font-medium ${activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('projects')}
        >
          Projekty
        </NavLink>
      </div>
      
      <Switch>
        <Route exact path={`${path}/open`} component={OpenTrainings} />
        <Route path={`${path}/closed`} component={ClosedTrainings} />
        <Route path={`${path}/projects`} component={Projects} />
      </Switch>
    </div>
  );
};

export default Trainings;
