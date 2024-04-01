import {createBrowserRouter} from 'react-router-dom'
import MembersPage from '../pages/Members/MembersPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MembersPage />,
    },
    {
        path:'*',
        element: <ErrorPage />
    }
  ]);

export default router;