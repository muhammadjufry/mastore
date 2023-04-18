import { MantineProvider } from "@mantine/core";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AfterCheckout from "./pages/AfterCheckout";
import BecomeSeller from "./pages/BecomeSeller";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import EditProfile from "./pages/EditProfile";
import Help from "./pages/Help";
import HelpDetail from "./components/HelpDetail";
import HomePage from "./pages/HomePage";
import LoginSignUp from "./pages/LoginSignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Message from "./pages/Message";
import MessageDetail from "./pages/MessageDetail";
import Order from "./pages/Order";
import OrderDetail from "./pages/OrderDetail";
import Payment from "./pages/Payment";
import SellerRegistration from "./pages/SellerRegistration";
import Selller from "./pages/Selller";
import Setting from "./pages/Setting";
import User from "./pages/User";
import ProductDetail from "./components/ProductDetail";
import SelllerSetting from "./components/SelllerSetting";
import SelllerEditProfile from "./components/SelllerEditProfile";
import SelllerProducts from "./components/SelllerProducts";
import SelllerAddProduct from "./components/SelllerAddProduct";
import SellerEditProduct from "./components/SellerEditProduct";
import SelllerOrders from "./components/SelllerOrders";
import SelllerOrderDetail from "./components/SelllerOrderDetail";
import SelllerPaymentConfig from "./components/SelllerPaymentConfig";
import SelllerAnds from "./components/SelllerAnds";
import SelllerMesssage from "./components/SelllerMesssage";
import SellerMessageDetail from "./components/SellerMessageDetail";
import SelllerHelp from "./components/SelllerHelp";
import SelllerHelpDetail from "./components/SelllerHelpDetail";
import SelllerLogout from "./components/SelllerLogout";
import axios from "axios";

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userDetail, setUserDetail]: any = useState();
  useEffect(() => {
    if (localStorage.getItem("user-token-login") !== null) {
      console.log(localStorage.getItem("user-token-login"));
      checkUserWithToken(localStorage.getItem("user-token-login")!);
      setIsUserLoggedIn(true);
      if (userDetail !== undefined) {
        localStorage.setItem("userInfo", userDetail);
      }
    }
  });

  const checkUserWithToken = async (tokenCode: string) => {
    try {
      const url = `http://localhost:8080/api/v1/user/${tokenCode}`;
      const getRequest = await axios.get(url);
      setUserDetail(JSON.stringify(getRequest.data.user));
      console.log("userDetail", userDetail);
      console.log(getRequest, isUserLoggedIn);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/login_or_signup"
            element={<LoginSignUp isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/forgot-password"
            element={<ForgotPassword isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/productDetail/:productDetailId"
            element={<ProductDetail isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/"
            element={<User isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/checkout"
            element={<Checkout isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/successfully-after-checkout"
            element={<AfterCheckout isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/cart"
            element={<Cart isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/edit-profile"
            element={<EditProfile isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/help"
            element={<Help isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/help/question-detail/:questionDetailId"
            element={<HelpDetail isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/payment"
            element={<Payment isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/setting"
            element={<Setting isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/order/"
            element={<Order isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/order/order-detail/:orderDetailId"
            element={<OrderDetail isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/message/"
            element={<Message isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/message/message-detail/:messageDetailId"
            element={<MessageDetail isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/become-seller/"
            element={<BecomeSeller isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/user/become-seller/registration"
            element={<SellerRegistration isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller"
            element={<Selller isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/setting"
            element={<SelllerSetting isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/edit-profile"
            element={<SelllerEditProfile isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/products"
            element={<SelllerProducts isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/add-product"
            element={<SelllerAddProduct isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/edit-product/:productId"
            element={<SellerEditProduct isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/orders"
            element={<SelllerOrders isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/order-detail/:orderDetailId"
            element={<SelllerOrderDetail isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/payment"
            element={<SelllerPaymentConfig isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/ands"
            element={<SelllerAnds isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/message"
            element={<SelllerMesssage isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/message-detail/:messageDetailId"
            element={<SellerMessageDetail isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/help"
            element={<SelllerHelp isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/help/question-detail/:questionDetailId"
            element={<SelllerHelpDetail isUserLoggedIn={isUserLoggedIn} />}
          />
          <Route
            path="/seller/logout"
            element={<SelllerLogout isUserLoggedIn={isUserLoggedIn} />}
          />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
