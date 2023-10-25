import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Comments } from "../pages/Comments/Comments";
import { commentsLoader } from "../pages/Comments/commentsLoader";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { Photos } from "../pages/Photos/Photos";
import { photosLoader } from "../pages/Photos/photosLoader";
import { Posts } from "../pages/Posts/Posts";
import { postsLoader } from "../pages/Posts/postsLoader";
import { destroyUserAction } from "../pages/UserDetails/destroyUserAction";
import { UserDetails } from "../pages/UserDetails/UserDetails";
import { userDetailsLoader } from "../pages/UserDetails/userDetailsLoader";

import { Users } from "../pages/Users/Users.jsx";
import { usersLoader } from "../pages/Users/usersLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Photos />,
        loader: photosLoader,
      },
      {
        path: "posts",
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: "comments",
        element: <Comments />,
        loader: commentsLoader,
      },
      {
        path: "users",
        element: <Users />,
        loader: usersLoader,
      },
      {
        path: "users/:userId",
        element: <UserDetails />,
        loader: userDetailsLoader,
      },
      {
        path: "users/:userId/destroy",
        action: destroyUserAction,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export { Router };
