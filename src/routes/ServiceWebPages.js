import { lazy } from "react";
import { Route } from "react-router-dom";
import ServicePageHeader from "../components/serviceWebPages/Header";
import Footer from "../components/Footer";

const AppDevelopment = lazy(() =>
  import("../pages/ServicesWebPages/AppDevelopment/AppDevelopment")
);
const AppDevelopmentCaseStudy = lazy(() =>
  import("../pages/ServicesWebPages/AppDevelopment/AppDevelopmentCaseStudy")
);
const AppDevelopmentWorkDetail = lazy(() =>
  import("../pages/ServicesWebPages/AppDevelopment/AppDevelopmentWorkDetail")
);

export const ServiceWebPages = () => [
  // APP DEVELOPMENT ROUTES
  <Route
    path="services/app-development"
    element={
      <>
        <ServicePageHeader
          links={[
            { name: "Home", to: "/services/app-development" },
            {
              name: "Case Study",
              to: "/services/app-development/case-study",
            },
          ]}
        />
        <AppDevelopment />
        <Footer />
      </>
    }
  />,
  <Route
    path="services/app-development/case-study"
    element={
      <>
        <ServicePageHeader
          links={[
            { name: "Home", to: "/services/app-development" },
            {
              name: "Case Study",
              to: "/services/app-development/case-study",
            },
          ]}
        />
        <AppDevelopmentCaseStudy />
        <Footer />
      </>
    }
  />,
  <Route
    path="services/app-development/case-study/:id"
    element={
      <>
        <ServicePageHeader
          links={[
            { name: "Home", to: "/services/app-development" },
            {
              name: "Case Study",
              to: "/services/app-development/case-study",
            },
          ]}
        />
        <AppDevelopmentWorkDetail />
        <Footer />
      </>
    }
  />,
];
