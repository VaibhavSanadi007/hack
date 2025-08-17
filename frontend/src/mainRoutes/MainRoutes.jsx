import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "../components/Home";
import About from "../components/about/About";
const MouseLazy = lazy(() => import("../components/Mouse/Mouse"));
const KeyLazy = lazy(() => import("../components/Keyboard/Keyboard"));
const MatLazy = lazy(() => import("../components/Deskmat/Deskmat"));
const MouseDetailLazy = lazy(() =>
  import("../components/MouseDetail/MouseDetail")
);
const KeyDetailLazy = lazy(() => import("../components/Keydetail/KeyDetail"));
const MateDetailLazy = lazy(() =>
  import("../components/DeskmatDetail/DeskmatDetail")
);

import Login from "../components/auth/Login";
import Cart from "../components/cart/Cart";
import Shimmer from "../components/Shimmer";
const MainRoutes = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mouse"
          element={
            <Suspense fallback={<Shimmer />}>
              <MouseLazy />
            </Suspense>
          }
        />
        <Route path="/mousedetail/:id" element={<MouseDetailLazy />} />
        <Route
          path="/keyboard"
          element={
            <Suspense fallback={<Shimmer />}>
              <KeyLazy />
            </Suspense>
          }
        />
        <Route path="/keydetail/:id" element={<KeyDetailLazy />} />
        <Route
          path="/deskmat"
          element={
            <Suspense fallback={<Shimmer />}>
              <MatLazy />
            </Suspense>
          }
        />
        <Route path="/matdetail/:id" element={<MateDetailLazy />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
};
export default MainRoutes;
