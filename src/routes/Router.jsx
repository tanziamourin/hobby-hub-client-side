import { createBrowserRouter } from 'react-router';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AllGroups from '../pages/AllGroups';
import CreateGroup from '../pages/CreateGroup';
import MyGroups from '../pages/MyGroups';
import GroupDetails from '../pages/GroupDetails';

import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute'; 
import MyProfile from '../pages/MyProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
      { path: '/groups', element: <AllGroups></AllGroups> },
      {
        path: '/createGroup',
        element: (
          <PrivateRoute>
            <CreateGroup></CreateGroup>
          </PrivateRoute>
        ),
      },
      {
        path: '/myGroups',
        element: (
          <PrivateRoute>
            <MyGroups ></MyGroups>
          </PrivateRoute>
        ),
      },
      {
        path: '/group/:id',
        element: (
          <PrivateRoute>
            <GroupDetails></GroupDetails>
          </PrivateRoute>
        ),
      },
      {
        path : '/my-profile',
        element : (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        )
      }

    ],
  },
]);

export default router;
