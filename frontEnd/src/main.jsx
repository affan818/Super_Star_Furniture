import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import {
  Home,
  About,
  Contact,
  Shop,
  Register,
  NoPage,
  Login,
  Layout,
  Products_Details,
} from "./components/index.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="product_details" element={<Products_Details />} />
      <Route path="contact" element={<Contact />} />
      <Route path="shop" element={<Shop />} />
      <Route path="register" element={<Register />} />
      <Route path="nopage" element={<NoPage />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
