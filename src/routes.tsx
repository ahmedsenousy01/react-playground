import { createBrowserRouter, RouterProvider } from "react-router";

import CustomIdPage from "./components/custom-id-page";
import HelpLayout from "./layouts/help-layout";
import RootLayout from "./layouts/root-layout";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/help/contact-page";
import FAQPage from "./pages/help/faq-page";
import HomePage from "./pages/home-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          {
            path: "contact",
            element: <ContactPage />
          },
          {
            path: "faq",
            element: <FAQPage />
          }
        ]
      },
      {
        path: "custom/:id",
        element: <CustomIdPage />
      }
    ]
  }
]);

export function RoutesOutlet() {
  return <RouterProvider router={router} />;
}
