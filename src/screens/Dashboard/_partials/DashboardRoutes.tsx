import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SuspenseLoader } from '../../../components';

const Home = React.lazy(() => import('../Home'));
const ContentPassage = React.lazy(() => import('../ContentPassage'));
const LeaderBoard = React.lazy(() => import('../LeaderBoard'));
const Learning = React.lazy(() => import('../Learning'));
const Quiz = React.lazy(() => import('../Quiz'));
const PerformanceReport = React.lazy(() => import('../PerformanceReport'));
const NotFound = React.lazy(() => import('../../../components/NotFound'));

const DashboardRoutes = () => {
  return (
    <React.Suspense fallback={<SuspenseLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content-passage" element={<ContentPassage />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/performance-report" element={<PerformanceReport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};
export default DashboardRoutes;
