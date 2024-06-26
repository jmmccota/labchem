import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import PageComponent from './page.component';
import Layout from '../layout';
import MainPage from '../main.page';
import BlogPage from '../blog.page';
import { AppContext } from './app.context';
import { ErrorComponent } from './error.component';

export default function AppRoutes() {
  const routerData = React.useContext(AppContext);
  const { main, pages, blog } = routerData!;
  const mappedRoutes = Object.entries(pages ?? {}).map(([k, v]) => ({
    path: k,
    element: <PageComponent data={v} />,
  }));

  const router = [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorComponent />,
      children: [
        ...mappedRoutes,
        {
          path: '/blog',
          element: <BlogPage content={blog} />,
        },
        {
          path: '/',
          element: <MainPage content={main} />,
        },
      ],
    },
  ];

  return <RouterProvider router={createHashRouter(router)} />;
}
