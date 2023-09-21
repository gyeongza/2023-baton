import React from 'react';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
const RunnerPostPage = React.lazy(() => import('./pages/RunnerPostDetailPage'));
const RunnerPostCreatePage = React.lazy(() => import('./pages/RunnerPostCreatePage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const MyPage = React.lazy(() => import('./pages/MyPage'));
const GithubCallbackPage = React.lazy(() => import('./pages/GithubCallbackPage'));
const ProfileEditPage = React.lazy(() => import('./pages/ProfileEditPage'));
const SupporterSelectPage = React.lazy(() => import('./pages/SupporterSelectPage'));
const SupporterFeedbackPage = React.lazy(() => import('./pages/SupporterFeedbackPage'));
const SupporterProfilePage = React.lazy(() => import('./pages/SupporterProfilePage'));
const RunnerProfilePage = React.lazy(() => import('./pages/RunnerProfilePage'));
const NoticePage = React.lazy(() => import('./pages/NoticePage'));

export const ROUTER_PATH = {
  MAIN: '/',
  RUNNER_POST: '/runner-post/:runnerPostId',
  RUNNER_POST_CREATE: '/runner-post-create/',
  SUPPORTER_SELECT: '/supporter-select/:runnerPostId',
  MY_PAGE: '/my-page',
  LOGIN: '/login',
  NOT_FOUND: '/*',
  RUNNER_PROFILE: '/runner-profile/:runnerId',
  SUPPORTER_PROFILE: '/supporter-profile/:supporterId',
  PROFILE_EDIT: '/profile-edit',
  SUPPORTER_FEEDBACK: '/supporter-feedback/:runnerPostId/:supporterId',
  GITHUB_CALLBACK: '/oauth/github/callback',
  NOTICE: '/notice',
};

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: ROUTER_PATH.RUNNER_POST,
          element: <RunnerPostPage />,
        },
        {
          path: ROUTER_PATH.RUNNER_POST_CREATE,
          element: <RunnerPostCreatePage />,
        },
        {
          path: ROUTER_PATH.LOGIN,
          element: <LoginPage />,
        },
        {
          path: ROUTER_PATH.MY_PAGE,
          element: <MyPage />,
        },
        {
          path: ROUTER_PATH.PROFILE_EDIT,
          element: <ProfileEditPage />,
        },
        { path: ROUTER_PATH.GITHUB_CALLBACK, element: <GithubCallbackPage /> },
        {
          path: ROUTER_PATH.SUPPORTER_SELECT,
          element: <SupporterSelectPage />,
        },
        {
          path: ROUTER_PATH.SUPPORTER_FEEDBACK,
          element: <SupporterFeedbackPage />,
        },
        {
          path: ROUTER_PATH.RUNNER_PROFILE,
          element: <RunnerProfilePage />,
        },
        {
          path: ROUTER_PATH.SUPPORTER_PROFILE,
          element: <SupporterProfilePage />,
        },
        {
          path: ROUTER_PATH.NOTICE,
          element: <NoticePage />,
        },
      ],
    },
  ],
  {
    basename: '/',
  },
);
