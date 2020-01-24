import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCartArrowDown,
  FaBars,
  FaSearch,
  FaUserAlt,
  FaGoogle,
} from "react-icons/fa";
import Menu from "./Menu";
import { useSelector } from "react-redux/es/exports";
import { selectCart, getSearchResult } from "../../redux/ProductsSlice";
import { useDispatch } from "react-redux";
import BigScrMenu from "./BigScrMenu";

const AdVariant = {
  init: { y: 100 },
  current: { y: 0, transition: { duration: 0.5, when: "beforeChildren" } },
};
const MobileNav = ({ signUp , logout}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const cart = useSelector((state) => selectCart(state));
  const dispatch = useDispatch();
  const user = useSelector(state=>state.products.user)
  const Navigate = useNavigate();
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const inputRef = useCallback((node) => {
    if (node !== null) {
      node.focus();
    }
  });


  function search() {
    setSearchFocus(!searchFocus);
  }

  function searchBtn(val) {
    if (searchValue) {
      Navigate("search/" + val + "?page=1");
      getSearchResult(val);
      setSearchFocus(false);
      setSearchValue("");
    }
  }

  return (
    <>
      <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} signUp={signUp} logout={logout}/>
      <motion.div
        className={`h-12 min-h-{50px} min-w-{200px} fixed w-full top-0 left-0 z-[9000] text-center bg-orange-900 text-orange-100 pt-2 lg:flex justify-center items-center`}
        variants={AdVariant}
        initial="init"
        animate="current"
      >
        <motion.p
          className="text-[0.6em] lg:pr-2"
          initial={{
            x: "0vw",
          }}
          animate={{
            x: [
              "80vw",
              "0vw",
              "0vw",
              "0vw",
              "0vw",
              "-80vw",
              "0vw",
              "0vw",
              "0vw",
              "80vw",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 3,
            duration: 20,
          }}
        >
          BUY ONLINE + PICK UP IN STORE
        </motion.p>
        <motion.p
          className="text-[0.65em]"
          initial={{
            x: "0vw",
          }}
          animate={{
            x: [
              "-80vw",
              "0vw",
              "0vw",
              "0vw",
              "0vw",
              "80vw",
              "0vw",
              "0vw",
              "0vw",
              "-80vw",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1,
            duration: 20,
          }}
        >
          select "store pick up" at checkout + pick up same day!
        </motion.p>
      </motion.div>

      <motion.nav
        className={`bg-orange-100 shadow-md shadow-orange-200 fixed  top-12
        } w-full flex justify-between items-center p-6 h-8 z-[10000] lg:hidden`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-orange-900 text-lg cursor-pointer">
          <FaBars onClick={() => setOpenMenu(true)} />
          {/* <p onClick={()=>setOpenMenu(true)}>menu</p> */}
        </div>

        <div className="w-full sm:w-1/2 grid place-items-center">
          {searchFocus ? (
            <div>
              <input
                type={"text"}
                placeholder="search product"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                ref={inputRef}
                className="outline-none text-orange-900 placeholder:text-orange-200 placeholder:italic p-1 px-3 text-sm w-2/3 bg-orange-100 border border-orange-900 rounded-lg"
              />
              <button
                type="submit"
                className=" bg-orange-900 rounded-lg w-1/3 text-xs p-1"
                onClick={() => searchBtn(searchValue)}
              >
                search
              </button>
            </div>
          ) : (
            <Link to="/">
              <svg width="100" height="30" className="">
                <text x="40" y="25" fontSize={"20"} fill="rgb(124 45 18)">
                  ENTA
                </text>
                <path
                  d="M0 0 L5 0 L15 20 L20 0 L25 0 L45 0 L15 30 Z"
                  fill="rgb(124 45 18)"
                />
              </svg>
            </Link>
          )}
        </div>

        <div className="flex text-orange-900  p-1 text-lg justify-between w-14 relative cursor-pointer">
          <FaSearch onClick={search} />

          <Link to="/cart">
            <FaCartArrowDown />
            {cart.length > 0 && (
              <p className="absolute left-[80%] bottom-4 bg-green-500 z-10 text-white w-4 h-5 px-1 text-sm rounded-lg">
                {cart.length}
              </p>
            )}
          </Link>
        </div>
      </motion.nav>

      <motion.nav
        className={`bg-orange-100 shadow-md shadow-orange-200 fixed  top-12
        } right-0 w-full justify-between items-center h-12 min-h-{50px} p-3 z-[10000] hidden lg:flex`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <svg width="100" height="30" className="">
            <text x="40" y="25" fontSize={"20"} fill="rgb(124 45 18)">
              ENTA
            </text>
            <path
              d="M0 0 L5 0 L15 20 L20 0 L25 0 L45 0 L15 30 Z"
              fill="rgb(124 45 18)"
            />
          </svg>
        </Link>

        <div className="w-2/4 text-center">
          {searchFocus ? (
            <div>
              <input
                type={"text"}
                placeholder="search product"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                ref={inputRef}
                className="outline-none w-3/4  text-orange-900 placeholder:text-orange-200 placeholder:italic p-1 px-3 text-sm bg-orange-100 border border-orange-900 rounded-lg"
              />
              <button
                type="submit"
                className=" bg-orange-900 rounded-lg w-20 p-1"
                onClick={() => searchBtn(searchValue)}
              >
                search
              </button>
            </div>
          ) : (
            <BigScrMenu />
          )}
        </div>
        <div className="flex text-orange-900 text-lg justify-between w-32 h-full cursor-pointer relative">
          <div className="flex text-orange-900  p-1 text-lg justify-between  w-32 h-full">
            <FaSearch onClick={search} />
          </div>
          <Link to={"/cart"}>
            <FaCartArrowDown className="block w-20 h-full " />
            {cart.length > 0 && (
              <p className="absolute left-[58%] bottom-3 bg-green-500 z-10 text-white w-5 h-5 grid place-items-center  text-xs rounded-lg">
                {cart.length}
              </p>
            )}
          </Link>
          {user.email ? (
            <div className="relative">
              <FaUserAlt className="block  h-full" onClick={()=>setShowProfile(!showProfile)} />
              <p className={`${showProfile ? "flex" : "hidden"}  flex-col items-center absolute -left-56 text-center top-10 bg-orange-900 text-orange-100 p-2 w-60 text-xs`}>
                {user.email}
              <button className="bg-orange-100 text-orange-900 mt-6 p-2 w-1/2 "  onClick={logout}>Logout</button>
              </p>
            </div>
          ) : (
           
            <div>  <FaGoogle className="block  h-full" onClick={signUp}/></div>
       
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default MobileNav;
