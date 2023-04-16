import { MantineProvider } from "@mantine/core";
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

export default function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/productDetail/:productDetailId"
            element={<ProductDetail />}
          />
          <Route path="/user/" element={<User />} />
          <Route path="/user/checkout" element={<Checkout />} />
          <Route
            path="/user/successfully-after-checkout"
            element={<AfterCheckout />}
          />
          <Route path="/user/cart" element={<Cart />} />
          <Route path="/user/edit-profile" element={<EditProfile />} />
          <Route path="/user/help" element={<Help />} />
          <Route
            path="/user/help/question-detail/:questionDetailId"
            element={<HelpDetail />}
          />
          <Route path="/user/payment" element={<Payment />} />
          <Route path="/user/setting" element={<Setting />} />
          <Route path="/user/order/" element={<Order />} />
          <Route
            path="/user/order/order-detail/:orderDetailId"
            element={<OrderDetail />}
          />
          <Route path="/user/message/" element={<Message />} />
          <Route
            path="/user/message/message-detail/:messageDetailId"
            element={<MessageDetail />}
          />
          <Route path="/user/become-seller/" element={<BecomeSeller />} />
          <Route
            path="/user/become-seller/registration"
            element={<SellerRegistration />}
          />
          <Route path="/seller" element={<Selller />} />
          <Route path="/seller/setting" element={<SelllerSetting />} />
          <Route path="/seller/edit-profile" element={<SelllerEditProfile />} />
          <Route path="/seller/products" element={<SelllerProducts />} />
          <Route path="/seller/add-product" element={<SelllerAddProduct />} />
          <Route
            path="/seller/edit-product/:productId"
            element={<SellerEditProduct />}
          />
          <Route path="/seller/orders" element={<SelllerOrders />} />
          <Route
            path="/seller/order-detail/:orderDetailId"
            element={<SelllerOrderDetail />}
          />
          <Route path="/seller/payment" element={<SelllerPaymentConfig />} />
          <Route path="/seller/ands" element={<SelllerAnds />} />
          <Route path="/seller/message" element={<SelllerMesssage />} />
          <Route
            path="/seller/message-detail/:messageDetailId"
            element={<SellerMessageDetail />}
          />
          <Route path="/seller/help" element={<SelllerHelp />} />
          <Route
            path="/seller/help/question-detail/:questionDetailId"
            element={<SelllerHelpDetail />}
          />
          <Route path="/seller/logout" element={<SelllerLogout />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
