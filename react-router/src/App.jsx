import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
const LazyLoading = React.lazy(() => import("./components/About"));
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./styles/styles.css";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import Featured from "./components/Featured";
import New from "./components/New";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import AdminDetails from "./components/AdminDetails";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/Auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
                <Users />
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <LazyLoading />
              </React.Suspense>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<AdminDetails />} />
          </Route>

          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
