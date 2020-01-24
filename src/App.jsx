import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import MobileNav from "./Components/NavBar/MobileNav";
import Products from "./Components/Products/Products";
import ViewProduct from "./Components/Products/ViewProduct";
import Cart from "./Components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  productActions,
  getSearchResult,
  selectSearchResult,
  getCategories,
  selectCategories,
} from "./redux/ProductsSlice";
import NoticePage from "./Components/Others/NoticePage";
import PaystackInt from "./Components/Cart/PaystackInt";
import { app } from "./firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import Alert from "./Components/Others/Alert";

function App() {
  const dispatch = useDispatch();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const user = useSelector((state) => state.products.user);
  const [showAlert, setShowAlert] = useState(false)
  
  // localStorage.removeItem("user")


  function signUp() {
    signInWithPopup(auth, googleProvider).then((res) => {
      const user = {
        displayName: res.user.displayName,
        email: res.user.email
      };

      dispatch(productActions.authUser(user))
      window.localStorage.user = JSON.stringify(user)
      setShowAlert("signin")

      setTimeout(()=>setShowAlert(false), 3000)


    });

  }

  function logout(){
    signOut(auth).then(() => {
      dispatch(productActions.authUser({displayName: undefined, email: undefined}))
      window.localStorage.removeItem("user")
     setShowAlert("logout")
     setTimeout(()=>setShowAlert(false), 3000)
    })

  }

  useEffect(() => {
if(user.displayName === undefined && typeof window.localStorage.user === "string")    dispatch(productActions.authUser(JSON.parse(window.localStorage.user)));
    
    if (window.localStorage.cart === undefined)
      window.localStorage.cart = JSON.stringify([]);
    else if (window.localStorage.cart.length > 0)
      JSON.parse(window.localStorage.cart).forEach((element) => {
        dispatch(productActions.addToCart(element));
      });
  }, []);

  return (
    <div className="font-roboto bg-orange-100 m-0 relative text-orange-100 min-w-[250px]">

      {
    showAlert === "signin" && <Alert>Logged in Successfully</Alert>

      }

      {
        showAlert === "logout" &&  <Alert error={true}>Logged Out Successfully</Alert>
      }
      <MobileNav signUp={signUp} logout={logout}/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/products"
          element={
            <Products selecter={selectCategories} getter={getCategories} />
          }
        />
        <Route
          path="/products/:id"
          element={
            <Products selecter={selectCategories} getter={getCategories} />
          }
        />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaystackInt />} />

        <Route
          path="/search/:id"
          element={
            <Products selecter={selectSearchResult} getter={getSearchResult} />
          }
        />
        <Route path="*" element={<NoticePage> Page Not Found...</NoticePage>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
