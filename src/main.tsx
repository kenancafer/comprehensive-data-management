import Root from "./root";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  UsersPage,
  UserDetailPage,
  UserPostPage,
  UserAlbumPage,
  HomePage,
  FavoritesPage,
} from "./router/route";
import {
  userAlbumLoader,
  userDetailsLoader,
  userPostLoader,
  usersLoader,
} from "./pages/loader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/users",
        children: [
          {
            index: true,
            loader: usersLoader,
            element: <UsersPage />,
          },
          {
            path: ":userId",
            loader: userDetailsLoader,
            element: <UserDetailPage />,
          },
          {
            path: ":userId/posts/:postId",
            loader: userPostLoader,
            element: <UserPostPage />,
          },
          {
            path: ":userId/albums/:albumId",
            loader: userAlbumLoader,
            element: <UserAlbumPage />,
          },
        ],
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
