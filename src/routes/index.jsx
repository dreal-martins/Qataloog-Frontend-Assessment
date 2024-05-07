import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Loader from "../components/Loader";

// Layouts Imports
const AuthenticatedLayout = lazy(() => import("../layouts/authenticated"));
const UnAuthenticatedLayout = lazy(() => import("../layouts/unAuthenticated"));

// Error Components Imports
const FourZeroFour = lazy(() => import("../components/404"));
const FourZeroZero = lazy(() => import("../components/400"));

// UnAuthentication Pages Imports
const Signin = lazy(() => import("../modules/Signin"));
const Signup = lazy(() => import("../modules/Signup"));
const ResetPassword = lazy(() => import("../modules/ResetPassword"));
const ResetPasswordEmail = lazy(() => import("../modules/ResetPassword/Email"));

// Authentication Pages Imports
const Dashboard = lazy(() => import("../modules/Dashboard"));
const Users = lazy(() => import("../modules/Users"));
const Admins = lazy(() => import("../modules/Admins"));
const CouponCode = lazy(() => import("../modules/CouponCode"));
const AcademicLevels = lazy(() => import("../modules/AcademicLevels"));
const Platforms = lazy(() => import("../modules/Platforms"));
const ContentType = lazy(() => import("../modules/ContentType"));
const Withdrawals = lazy(() => import("../modules/Withdrawals"));
const Settings = lazy(() => import("../modules/Settings"));

const MainBody = ({ children }) => {
  return (
    <div className={`h-[100vh] max-w-[100%] !font-outfit tracking-[-0.5px]`}>
      {children ? children : <Outlet />}
    </div>
  );
};

const MainRoute = () => {
  const router = createBrowserRouter([
    {
      element: <MainBody />,
      errorElement: <FourZeroZero />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loader />}>
              <AuthenticatedLayout />
            </Suspense>
          ),
          errorElement: <FourZeroZero />,
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Loader />}>
                  <Dashboard />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
            {
              path: "/users",
              errorElement: <FourZeroZero />,
              element: (
                <Suspense fallback={<Loader />}>
                  <Users />
                </Suspense>
              ),
            },
            {
              path: "admins",
              errorElement: <FourZeroZero />,
              element: (
                <Suspense fallback={<Loader />}>
                  <Admins />
                </Suspense>
              ),
            },
            {
              path: "coupon-code",
              element: (
                <Suspense fallback={<Loader />}>
                  <CouponCode />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
            {
              path: "academic-levels",
              element: (
                <Suspense fallback={<Loader />}>
                  <AcademicLevels />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
            {
              path: "platform",
              errorElement: <FourZeroZero />,
              element: (
                <Suspense fallback={<Loader />}>
                  <Platforms />
                </Suspense>
              ),
            },
            {
              path: "content-type",
              errorElement: <FourZeroZero />,
              element: (
                <Suspense fallback={<Loader />}>
                  <ContentType />
                </Suspense>
              ),
            },
            {
              path: "withdrawals",
              errorElement: <FourZeroZero />,
              element: (
                <Suspense fallback={<Loader />}>
                  <Withdrawals />
                </Suspense>
              ),
            },
            {
              path: "setting",
              errorElement: <FourZeroZero />,
              element: (
                <Suspense fallback={<Loader />}>
                  <Settings />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "auth",
          element: (
            <Suspense fallback={<Loader />}>
              <UnAuthenticatedLayout />
            </Suspense>
          ),
          errorElement: <FourZeroZero />,
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<Loader />}>
                  <Signin />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
            {
              path: "signup",
              element: (
                <Suspense fallback={<Loader />}>
                  <Signup />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
            {
              path: "reset-password",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback={<Loader />}>
                      <ResetPassword />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
                {
                  path: ":email/:data",
                  element: (
                    <Suspense fallback={<Loader />}>
                      <ResetPasswordEmail />
                    </Suspense>
                  ),
                  errorElement: <FourZeroZero />,
                },
              ],
            },
            {
              path: "*",
              element: (
                <Suspense fallback={<Loader />}>
                  <FourZeroFour />
                </Suspense>
              ),
              errorElement: <FourZeroZero />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoute;
