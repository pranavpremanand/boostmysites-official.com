import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "react-modern-drawer/dist/index.css";
import "keen-slider/keen-slider.min.css";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
// import LandingFooter from "./components/landingPage/Footer";
import { lazy, Suspense, useContext, useEffect } from "react";
import ContactFormStep1 from "./pages/ContactUs/ContactFormStep1";
import ContactFormStep2 from "./pages/ContactUs/ContactFormStep2";
import SpinnerContextProvider, {
  SpinnerContext,
} from "./components/SpinnerContext";
import { LoadingSpinner } from "./components/LoadingSpinner";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import GoogleTagManager from "./components/GoogleTagManager";
import NormalizeSlash from "./components/NormalizeSlash";
import { ServiceWebPages } from "./routes/ServiceWebPages";

const FeeRevisionAnnouncement = lazy(() =>
  import("./pages/FeeRevisionAnnouncement")
);
const LandingPage = lazy(() => import("./pages/LandingPage"));
const LandingPage1 = lazy(() => import("./pages/LandingPage1"));
const Home = lazy(() => import("./pages/Home/Home"));
const Services = lazy(() => import("./pages/Services/Services"));
const Services1 = lazy(() => import("./pages/Services/Services1"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails/BlogDetails"));
const SalesTeamServices = lazy(() => import("./pages/SalesTeamServices"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const ProjectRequirementForm = lazy(() =>
  import("./pages/ProjectRequirementForm")
);
const Reviews = lazy(() => import("./pages/Reviews"));
const BaaS = lazy(() => import("./pages/BaaS/BaaS"));
const SubscriptionFormStep1 = lazy(() =>
  import("./pages/BaasSubscriptionForms/SubscriptionFormStep1")
);
const SubscriptionFormStep2 = lazy(() =>
  import("./pages/BaasSubscriptionForms/SubscriptionFormStep2")
);
const SubscriptionPage = lazy(() =>
  import("./pages/SubscriptionPage/SubscriptionPage")
);
const ClientStories = lazy(() => import("./pages/ClientStories/ClientStories"));
const SubscriptionOffer = lazy(() => import("./pages/SubscriptionOffer"));
const ConnectWithUsThankYou = lazy(() =>
  import("./pages/ConnectWithUsThankYou")
);
const ThankYou = lazy(() => import("./pages/ThankYou"));
const SignUpForm = lazy(() => import("./pages/SignUpPage"));
const AIVideoAndVoiceCall = lazy(() =>
  import("./components/AIVideoAndVoiceCall")
);
const Section1 = lazy(() => import("./pages/ConnectWithUs/Section1"));
const Section2 = lazy(() => import("./pages/ConnectWithUs/Section2"));
const SubscriptionOfferFinal = lazy(() =>
  import("./pages/SubscriptionOfferFinal")
);

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  const aiExpertPaths = [
    { path: "/ai-expert", emailIdToSendMail: "athul_rajeev@iCloud.com" },
    { path: "/ai-expert2", emailIdToSendMail: "merlinjoy1808@gmail.com" },
    { path: "/ai-expert3", emailIdToSendMail: "kavyakallega@gmail.com" },
    { path: "/ai-expert4", emailIdToSendMail: "darshan@boostmysites.com" },
    { path: "/ai-expert5", emailIdToSendMail: "saividhu94@gmail.com" },
    { path: "/ai-expert6", emailIdToSendMail: "supreeth.girish@gmail.com" },
  ];
  return (
    <SpinnerContextProvider>
      <GoogleTagManager />
      <BrowserRouter>
        <NormalizeSlash>
          <AIVideoAndVoiceCall />
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: "#000000",
                color: "#ffffff",
              },
            }}
          />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {aiExpertPaths.map(({ path }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <>
                      {/* <LandingPageHeader path={path} /> */}
                      <Header />
                      <LandingPage path={path} />
                      <Footer />
                    </>
                  }
                />
              ))}

              {["/ai-expert1", "/ai-expert12", "/ai-expert13"].map((path) => (
                <Route
                  path={path}
                  element={
                    <>
                      {/* <LandingPageHeader path={path} /> */}
                      <Header />
                      <LandingPage1 path={path} />
                      <Footer />
                    </>
                  }
                />
              ))}

              {/* Contact routes for ai-expert1 */}
              {["/ai-expert1", "/ai-expert12", "/ai-expert13"].map((path) => (
                <Route
                  path={`${path}/contact/*`}
                  element={
                    <>
                      {/* <LandingPageHeader path={path} /> */}
                      <Header />
                      <Routes>
                        <Route
                          index
                          element={<Navigate to="step1" replace />}
                        />
                        <Route
                          path="step1"
                          element={<ContactFormStep1 pathToRedirect={path} />}
                        />
                        <Route
                          path="step2"
                          element={
                            <ContactFormStep2
                              emailIdToSendMail="ceo@boostmysites.com"
                              pathToRedirect={path}
                            />
                          }
                        />
                      </Routes>
                      <Footer />
                    </>
                  }
                />
              ))}
              {/* End of contact routes for ai-expert1 */}

              {/* Contact Routes */}
              {aiExpertPaths.map(({ emailIdToSendMail, path }) => (
                <Route
                  key={path}
                  path={`${path}/contact/*`}
                  element={
                    <>
                      {/* <LandingPageHeader path={path} /> */}
                      <Routes>
                        <Route
                          index
                          element={<Navigate to="step1" replace />}
                        />
                        <Route
                          path="step1"
                          element={<ContactFormStep1 pathToRedirect={path} />}
                        />
                        <Route
                          path="step2"
                          element={
                            <ContactFormStep2
                              emailIdToSendMail={emailIdToSendMail}
                              pathToRedirect={path}
                            />
                          }
                        />
                      </Routes>
                      <Footer />
                    </>
                  }
                />
              ))}

              <Route
                path="/thank-you"
                element={<ThankYou pathToRedirect="/" />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />

              {/* Website routes */}
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Home />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <>
                    <Header />
                    <PrivacyPolicy />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/terms-and-conditions"
                element={
                  <>
                    <Header />
                    <TermsAndConditions />
                    <Footer />
                  </>
                }
              />

              {/* Services page */}
              {/* Services page with subscription plans in Indian Rupees */}
              <Route
                path="/services"
                element={
                  <>
                    <Header />
                    <Services />
                    <Footer />
                  </>
                }
              />
              {/* Services page with subscription plans in Dollars $ */}
              <Route
                path="/services-list"
                element={
                  <>
                    <Header />
                    <Services1 />
                    <Footer />
                  </>
                }
              />
              {/* End of Services page */}

              <Route
                path="/sales-team-services"
                element={
                  <>
                    <Header />
                    <SalesTeamServices />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/reviews"
                element={
                  <>
                    <Header />
                    <Reviews />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/blogs"
                element={
                  <>
                    <Header />
                    <Blogs />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/blogs/:link/boostmysites-review"
                element={
                  <>
                    <Header />
                    <BlogDetails />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/project-requirement-form"
                element={
                  <>
                    <Header />
                    <ProjectRequirementForm subject="Project Requirement Form Submission" />
                    <Footer />
                  </>
                }
              />
              {/* <Route
                path="/sales-requirement-form"
                element={
                  <>
                    <Header />
                    <ProjectRequirementForm subject="Sales Requirement Form Submission" />
                    <Footer />
                  </>
                }
              /> */}
              <Route
                path="/signup"
                element={
                  <>
                    <Header />
                    <SignUpForm />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/price-revision-announcement"
                element={
                  <>
                    <Header />
                    <FeeRevisionAnnouncement />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/connect-with-us/*"
                element={
                  <>
                    <Header />
                    <Routes>
                      <Route index element={<Navigate to="1" replace />} />
                      <Route path="1" element={<Section1 />} />
                      <Route path="2" element={<Section2 />} />
                      <Route
                        path="thank-you"
                        element={<ConnectWithUsThankYou pathToRedirect={"/"} />}
                      />
                    </Routes>
                    <Footer />
                  </>
                }
              />

              {/* Pages of BaaS */}
              <Route
                path="/baas"
                element={
                  <>
                    <Header />
                    <BaaS />
                    <Footer />
                  </>
                }
              />
              <Route path="/subscription-form">
                <Route
                  index
                  element={<Navigate to="/subscription-form/step1" replace />}
                />
                <Route
                  path="step1"
                  element={
                    <>
                      <Header />
                      <SubscriptionFormStep1 />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="step2"
                  element={
                    <>
                      <Header />
                      <SubscriptionFormStep2 />
                      <Footer />
                    </>
                  }
                />
              </Route>
              <Route
                path="/subscription"
                element={
                  <>
                    <Header />
                    <SubscriptionPage />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/boostmysites-client-reviews"
                element={
                  <>
                    <Header />
                    <ClientStories />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/subscription-offer"
                element={
                  <>
                    <Header />
                    <SubscriptionOffer />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/final-subscription-call"
                element={
                  <>
                    <Header />
                    <SubscriptionOfferFinal />
                    <Footer />
                  </>
                }
              />
              {/* <Route
                path="/ecommerce-business"
                element={
                  <>
                    <Header />
                    <EcommerceBusiness />
                    <Footer />
                  </>
                }
              /> */}

              {/* Service web pages */}
              {ServiceWebPages()}
            </Routes>
            <ScrollToTopButton />
            <ScrollToTopOnPageChange />
          </Suspense>
        </NormalizeSlash>
      </BrowserRouter>
      {/* Access context here after the provider wraps the application */}
      <LoadingSpinnerContext />
    </SpinnerContextProvider>
  );
}

export default App;

// component to manage loading spinner based on context
const LoadingSpinnerContext = () => {
  const { spinner } = useContext(SpinnerContext);
  return spinner && <LoadingSpinner />;
};

// scroll to top on route change
const ScrollToTopOnPageChange = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};
