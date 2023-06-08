import { MantineProvider } from "@mantine/core";
import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
const AfterCheckout = React.lazy(() => import("./pages/AfterCheckout"));
const BecomeSeller = React.lazy(() => import("./pages/BecomeSeller"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const EditProfile = React.lazy(() => import("./pages/EditProfile"));
const Help = React.lazy(() => import("./pages/Help"));
const HelpDetail = React.lazy(() => import("./components/HelpDetail"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginSignUp = React.lazy(() => import("./pages/LoginSignUp"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const Message = React.lazy(() => import("./pages/Message"));
const MessageDetail = React.lazy(() => import("./pages/MessageDetail"));
const Order = React.lazy(() => import("./pages/Order"));
const OrderDetail = React.lazy(() => import("./pages/OrderDetail"));
const Payment = React.lazy(() => import("./pages/Payment"));
const SellerRegistration = React.lazy(
  () => import("./pages/SellerRegistration")
);
const Selller = React.lazy(() => import("./pages/Selller"));
const Setting = React.lazy(() => import("./pages/Setting"));
const User = React.lazy(() => import("./pages/User"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail"));
const SelllerSetting = React.lazy(() => import("./components/SelllerSetting"));
const SelllerEditProfile = React.lazy(
  () => import("./components/SelllerEditProfile")
);
const SelllerProducts = React.lazy(
  () => import("./components/SelllerProducts")
);
const SelllerAddProduct = React.lazy(
  () => import("./components/SelllerAddProduct")
);
const SellerEditProduct = React.lazy(
  () => import("./components/SellerEditProduct")
);
const SelllerOrders = React.lazy(() => import("./components/SelllerOrders"));
const SelllerOrderDetail = React.lazy(
  () => import("./components/SelllerOrderDetail")
);
const SelllerPaymentConfig = React.lazy(
  () => import("./components/SelllerPaymentConfig")
);
const SelllerAnds = React.lazy(() => import("./components/SelllerAnds"));
const SelllerMesssage = React.lazy(
  () => import("./components/SelllerMesssage")
);
const SellerMessageDetail = React.lazy(
  () => import("./components/SellerMessageDetail")
);
const SelllerHelp = React.lazy(() => import("./components/SelllerHelp"));
const SelllerHelpDetail = React.lazy(
  () => import("./components/SelllerHelpDetail")
);
const SelllerLogout = React.lazy(() => import("./components/SelllerLogout"));

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
        <Suspense fallback="Loading...">
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
        </Suspense>
      </Router>
    </MantineProvider>
  );
}
