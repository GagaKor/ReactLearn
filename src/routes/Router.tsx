import { lazy } from 'react';

/****Layouts*****/
const FullLayout = lazy(() => import('../layouts/FullLayout'));

/***** Pages ****/

const Home = lazy(() => import('../views/Home'));
const Game = lazy(() => import('../views/Game'));
const PlayLotto = lazy(() => import('../views/PlayLotto'));
const ResultLotto = lazy(() => import('../views/ResultLotto'));
// const Alerts = lazy(() => import('../views/ui/Alerts'));
// const Badges = lazy(() => import('../views/ui/Badges'));
// const Buttons = lazy(() => import('../views/ui/Buttons'));
// const Cards = lazy(() => import('../views/ui/Cards'));
// const Grid = lazy(() => import('../views/ui/Grid'));
// const Tables = lazy(() => import('../views/ui/Tables'));
// const Forms = lazy(() => import('../views/ui/Forms'));
// const Breadcrumbs = lazy(() => import('../views/ui/Breadcrumbs'));

/*****Routes******/

const ThemeRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/game', exact: true, element: <Game /> },
      { path: '/PlayLotto', exact: true, element: <PlayLotto /> },
      { path: '/ResultLotto', exact: true, element: <ResultLotto /> },
      // { path: '/alerts', exact: true, element: <Alerts /> },
      // { path: '/badges', exact: true, element: <Badges /> },
      // { path: '/buttons', exact: true, element: <Buttons /> },
      // { path: '/cards', exact: true, element: <Cards /> },
      // { path: '/grid', exact: true, element: <Grid /> },
      // { path: '/table', exact: true, element: <Tables /> },
      // { path: '/forms', exact: true, element: <Forms /> },
      // { path: '/breadcrumbs', exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
