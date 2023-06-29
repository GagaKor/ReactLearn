import { lazy } from 'react';

/****Layouts*****/
const FullLayout = lazy(() => import('../layouts/FullLayout'));

/***** Pages ****/

const Home = lazy(() => import('../views/Home'));
const Game = lazy(() => import('../views/Game'));
const PlayLotto = lazy(() => import('../views/PlayLotto'));
const ResultLotto = lazy(() => import('../views/ResultLotto'));
const Board = lazy(() => import('../views/Board'));
const LottoHisotry = lazy(() => import('../views/LottoHistory'));
const LottoSelectList = lazy(() => import('../views/LottoSelectList'));
const PurceaseLotto = lazy(() => import('../views/PurchaseLotto'));
const NotFound = lazy(() => import('../views/NotFound'));
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
      { path: '/', element: <Game /> },
      { path: '/about', exact: true, element: <Home /> },
      { path: '/playlotto', exact: true, element: <PlayLotto /> },
      { path: '/resultlotto', exact: true, element: <ResultLotto /> },
      { path: '/board', exact: true, element: <Board /> },
      { path: '/lottohistory', exact: true, element: <LottoHisotry /> },
      { path: '/lotto-select-history', exact: true, element: <LottoSelectList /> },
      { path: '/purchase-lotto', exact: true, element: <PurceaseLotto /> },
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
  {
    path: '/*',
    element: <NotFound />,
  },
];

export default ThemeRoutes;
