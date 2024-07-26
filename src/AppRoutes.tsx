import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRentPage from "./pages/ManageRentPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import RentPage from "./pages/RentPage"
import DetailPage from "./pages/DetailPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import BookPage  from "./pages/BookPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/search/:town"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
      <Route
        path="/detail/:rentId"
        element={
          <Layout showHero={false}>
            {" "}
            <DetailPage />{" "}
          </Layout>
        }
      />
      <Route
        path="/services"
        element={
          <Layout >
            <ServicesPage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout >
            <AboutPage />
          </Layout>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/order-status"
          element={
            <Layout>
              <OrderStatusPage />
            </Layout>
          }
        />
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/manage-rent"
          element={
            <Layout>
              <ManageRentPage />
            </Layout>
          }
        />
         <Route
          path="/rent"
          element={
            <Layout>
              <RentPage />
            </Layout>

          }
        />
         <Route
          path="/book"
          element={
            <Layout>
              <BookPage />
            </Layout>
            
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default AppRoutes;
