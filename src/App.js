import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Navigate replace to="/home" />} exact />
        <Route path="home" element={<Home />} />

        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />

        {/* Dynamic route for product detail page */}
        <Route path="product/:id" element={<ProductDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
