import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./pages/Body";
import HomeContainer from "./pages/HomeContainer";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import { lazy, Suspense } from "react";

// Lazy-loaded components
const Login = lazy(() => import("./components/Login"));
const Cart = lazy(() => import("./pages/Cart"));

// Define the router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <HomeContainer />,
      },
      {
        path: "/products/:category",
        element: <ProductListPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
]);

// App component
function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
