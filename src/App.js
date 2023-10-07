import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { Suspense, useState } from "react";
import { Lang } from "./components/contexts/lang";
import { Theme } from "./components/contexts/theme";
import Loader from "./components/loader/loader";

const Notfound = React.lazy(() => import("./components/notfound/notfound"));
const Navbar = React.lazy(() => import("./components/navbar/navbar"));
const Productlist = React.lazy(() =>
  import("./components/productlist/productlist")
);
const Productdetails = React.lazy(() =>
  import("./components/productdetails/productdetails")
);
const Cart = React.lazy(() => import("./components/cart/cart"));
const Register = React.lazy(() => import("./components/register/register"));

function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light");
  const thetheme = theme === "dark" ? "Appdark" : "App";
  return (
    <div className={thetheme}>
      <BrowserRouter>
        <Lang.Provider value={{ lang, setLang }}>
          <Theme.Provider value={{ theme, setTheme }}>
            <Navbar />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Productlist />} />
                <Route path="/productlist" element={<Productlist />} />
                <Route
                  path="/productdetails/:id"
                  element={<Productdetails />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<Notfound />} />
              </Routes>
            </Suspense>
          </Theme.Provider>
        </Lang.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
