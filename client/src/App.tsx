import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { productDetailLoader } from "@/lib/loader";

import LayoutPage from "@/components/layout";
import Homepage from "@/routes/home-page/page";
import NotFoundPage from "@/routes/404-page";
import ProductsPage from "@/routes/products/page";
import CheckoutPage from "@/routes/check-out/page";
import ProductDetailPage from "@/routes/product-detail/page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        {
          path: "/",
          element:  <Homepage />
        },
        {
          path: "/products",
          element: <ProductsPage />
        },
        {
          path: "/products/:id",
          element: <ProductDetailPage />,
          loader: productDetailLoader,
        },
        {
          path: "/checkout",
          element: <CheckoutPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
