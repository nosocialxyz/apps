import { Navigate, useRoutes } from 'react-router-dom';

// Pages
import LoginPage from './pages/login';
import PselectPage from './pages/pselect';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import Page404 from './pages/404';
import ProfileAppPage from './pages/profile';
import AppsPage from './pages/apps';
import BenefitsPage from './pages/benefits';

export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Navigate to="/login" replace/>
        },   
        {
             path: '/login',
             element: <LoginPage />,
        },
        {
            path: '/login/select',
            element: <PselectPage />,
        },
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/dashboard/profile" replace/> },
                { path: 'profile', element: <ProfileAppPage /> },
                { path: 'apps', element: <AppsPage /> },
                { path: 'benifits', element: <BenefitsPage /> },
            ],
        },
        {
            path: '/404',
            element: <Page404 />
        },
        {
            path: '/*',
            element: <Navigate to="/404" replace/>
        }
    ]);

    return routes;
}
