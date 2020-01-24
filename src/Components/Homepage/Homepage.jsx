import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import {
  selectProducts,
  selectCategories,
  getProducts,
} from "../../redux/ProductsSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
//swiper css
import "swiper/css";
import "swiper/css/navigation";

import { useNavigate } from "react-router-dom";
import Loading from "../Others/Loading";
import { Navigation, Pagination, Autoplay } from "swiper";

const Homepage = () => {
  const Navigate = useNavigate();
  const products = useSelector((state) => selectProducts(state));
  const dispatch = useDispatch();
  const cat = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // console.log(products)
  async function showProducts(cat, url) {
    // await dispatch(getCategories(cat))
    await Navigate(url);
    return;
  }

  // async function checkProduct(id, url){
  //   await dispatch(getProductById(id))
  //   await Navigate(url);
  //   return
  // }

  return (
    <>
      {products ? (
        <div className="p-2 mt-24 overflow-hidden">
          <div
            className="h-[80vh]  relative lg:h-[95vh] min-h-[200px] lg:min-h-[500px] mt-1 cursor-pointer lg:flex"
            onClick={() => showProducts(undefined, "/products/latest?page=1")}
          >
            {products && (
              <>
                <LandingImg src={products[42].images[0]} />
                <LandingImg
                  src={products[42].images[4]}
                  display="hidden lg:block"
                />
              </>
            )}

            <h4 className="font-redRose italic font-thin text-4xl lg:text-[5vw] absolute top-[50%] right-0  p-2">
              New Arrivals
            </h4>
          </div>

          <div
            id="elem"
            className="h-12 text-center bg-orange-200 text-orange-900 pt-2 lg:flex justify-center items-center"
          >
            <p className="text-[0.8em] lg:pr-2">
              BUY ONLINE + PICK UP IN STORE
            </p>
            <p className="text-[0.7em]">
              select "store pick up" at checkout + pick up same day!
            </p>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-lg lg:text-xl text-orange-900">Trending </h3>

            <div className="grid grid-cols-sm lg:grid-cols-4 mt-12 items-end lg:h-[33em]">
              <ProductCategories
                src={products[1].images[1]}
                delay={0.2}
                onClick={() =>
                  showProducts("laptops", "/products/smartphones?page=1")
                }
              >
                SMARTPHONES
              </ProductCategories>

              <ProductCategories
                src={products[31].images[2]}
                delay={0.4}
                onClick={() => Navigate("/products/furniture?page=1")}
              >
                FURNITURES
              </ProductCategories>

              <ProductCategories
                src={products[91].images[1]}
                delay={0.2}
                onClick={() =>
                  showProducts("laptops", "/products/motorcycle?page=1")
                }
              >
                MOTOCYCLES
              </ProductCategories>

              <ProductCategories
                src={products[11].images[1]}
                delay={0.4}
                onClick={() =>
                  showProducts("laptops", "/products/fragrances?page=1")
                }
              >
                FRAGRANCES
              </ProductCategories>
            </div>

            <div className="mt-8 lg:flex p-1 w-full">
              <motion.div
                className="h-72 relative lg:h-[35em] lg:mr-[2px] w-full lg:w-1/2"
                initial={{
                  x: "30vw",
                }}
                whileInView={{
                  x: "0vw",
                }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
              >
                <img
                  src={products[36].images[3]}
                  alt="Show new"
                  className="block h-full w-full filter brightness-90"
                />
                <div
                  className="absolute w-full h-full top-0 left-0 flex justify-center items-start flex-col  p-3 cursor-pointer"
                  onClick={() =>
                    showProducts("laptops", "/products/womens-dresses?page=1")
                  }
                >
                  <h3 className="text-xl">FOR THE LADIES</h3>
                  <button className="text-lg border border-orange-100 p-2">
                    SHOP NOW
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="h-72 relative mt-[1px]  lg:h-[35em] lg:ml-[2px] w-full lg:w-1/2"
                initial={{
                  x: "-20vw",
                }}
                whileInView={{
                  x: "0vw",
                }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
              >
                <img
                  src={products[50].images[1]}
                  alt="Show new"
                  className="block h-full w-full filter brightness-90"
                />
                <div
                  className="absolute w-full h-full top-0 left-0 flex justify-center items-end flex-col  p-3 cursor-pointer"
                  onClick={() =>
                    showProducts("mens-shirts", "/products/mens-shirts?page=1")
                  }
                >
                  <h3 className="text-xl">FOR THE GENTS</h3>
                  <button className="text-lg border border-orange-100 p-2">
                    SHOP NOW
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <div className="text-center  text-orange-900 pt-2 p-5 lg:flex justify-center items-center">
              <p className="text-sm lg:pr-1">
                shop new collections 2-3x weekly
              </p>
              <p
                className="text-sm lg:pl-1 mt-2 lg:mt-0 border-orange-300 border p-2 w-1/2 mx-auto lg:w-auto lg:mx-0 cursor-pointer"
                onClick={() => Navigate("/products/latest?page=1")}
              >
                SHOP OUR LATEST RELEASE
              </p>
            </div>

            <motion.div
              className="h-72 relative mt-2 lg:h-[90vh]"
              onClick={() =>
                showProducts("men-shoes", "/products/mens-shoes?page=1")
              }
              initial={{ scaleX: 2, y: -70 }}
              whileInView={{
                scaleX: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                once: false,
                amount: 0.1,
              }}
            >
              <img
                src={products[57].images[2]}
                alt="Show new"
                className="block h-full w-full filter brightness-90"
              />
              <div className="absolute w-full h-full top-0 left-0 flex justify-center items-end flex-col p-3 cursor-pointer">
                <button className="text-lg border border-orange-100 p-2">
                  SHOP NOW
                </button>
              </div>
            </motion.div>

            <div className="text-center  text-orange-900 pt-2 p-5 lg:flex justify-center items-center">
              <p className="text-sm lg:pr-1">BUY SUNGLASSES</p>
              <p
                className="text-sm lg:pl-1 mt-2 lg:mt-0 border-orange-300 border p-2 w-1/2 mx-auto lg:w-auto lg:mx-0 cursor-pointer"
                onClick={() =>
                  showProducts("sunglasses", "/products/sunglasses?page=1")
                }
              >
                SHOP FOR SUNGLASSES
              </p>
            </div>

            <div className="lg:flex w-full ">
              <motion.div
                className="h-72 relative w-full lg:h-[30em] lg:mr-[2px] cursor-pointer"
                initial={{
                  x: "30vw",
                }}
                whileInView={{
                  x: "0vw",
                }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                onClick={() =>
                  showProducts("mens-shirts", "/products/mens-shirts?page=1")
                }
              >
                <img
                  src={products[54].images[4]}
                  alt="Show new"
                  className="block h-full w-full filter brightness-90"
                />

                <div className="absolute w-full h-full top-0 left-0 flex justify-end items-start flex-col p-3 ">
                  <p className="text-xl">TREND TO TRY:</p>
                  <h3 className="text-xl">PRINTED SHIRTS</h3>
                  <button className="text-lg border border-orange-100 p-2">
                    SHOP T-SHIRTS
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  x: "-20vw",
                }}
                whileInView={{
                  x: "0vw",
                }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                className="h-72 relative mt-[1px] w-full lg:h-[30em] lg:ml-[2px] cursor-pointer"
                onClick={() =>
                  showProducts("womens-bags", "/products/womens-bags?page=1")
                }
              >
                <img
                  src={products[71].images[0]}
                  alt="Show new"
                  className="block h-full w-full filter brightness-90"
                />

                <div className="absolute text-xl w-full h-full top-0 left-0 flex justify-end items-end flex-col p-3">
                  <p>NEW FOR 2023:</p>
                  <h3>VENTA EXCLUSIVES</h3>
                  <button className="text-lg border border-orange-100 p-2">
                    SHOP NOW
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="lg:px-8">
              <h3 className="text-lg m-12 text-orange-900 text-center">
                NEW IN STORE
              </h3>
              <motion.div
                initial={{
                  x: "95vw",
                }}
                whileInView={{
                  x: "0vw",
                }}
                viewport={{
                  once: false,
                }}
              >
                <Swiper
                  breakpoints={{
                    0: {
                      slidesPerView: 2.2,
                      spaceBetween: 1,
                    },

                    678: {
                      slidesPerView: 3.2,
                      spaceBetween: 1,
                    },

                    1025: {
                      slidesPerView: 4.3,
                      spaceBetween: 3,
                    },
                  }}
                  modules={[Navigation,Pagination, Autoplay]}
                  navigation
                  autoplay={{
                    delay:2500,
                    disableOnInteraction:false
                  }}
                  pagination={{
                    clickable: true
                  }}
                >
                  {products.map((prod, i) => {
                    if (prod.id < 90 && prod.id > 75) {
                      return (
                        <SwiperSlide key={prod.id}>
                          <NewArrival
                            src={prod.thumbnail}
                            onClick={() => {
                              Navigate(
                                "/product/" + prod.title + "==" + prod.id
                              );
                            }}
                          >
                            <h6>{prod.title}</h6>
                            <p>${prod.price}</p>
                          </NewArrival>
                        </SwiperSlide>
                      );
                    }
                  })}
                </Swiper>
              </motion.div>{" "}
            </div>

            <div className="mt-8 text-center text-orange-900">
              <h4 className="text-lg">
                Trendy Clothing & Accessories at Venta - An Online Fashion Store
              </h4>

              <p className="text-sm mt-2 lg:mt-2">
                Venta is a Fashion store with new trendy and affordable arrivals
                dropping 2-3 times weekly.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </>
  );
};

const ProductCategories = ({ src, children, onClick, delay }) => {
  return (
    <motion.div
      className="relative min-h-[250px] px-3 lg:w-full lg:h-full mt-4"
      onClick={onClick}
      initial={{
        y: 50,
      }}
      whileInView={{
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
      }}
    >
      <img
        src={src}
        alt="Products categories"
        className="block h-full min-h-[250px] w-full filter brightness-90"
      />
      <div className="absolute top-0 left-0 w-full h-full grid items-center justify-center">
        <button
          className=" text-2
        xl"
        >
          {children}
        </button>
      </div>
    </motion.div>
  );
};

const NewArrival = ({ src, children, onClick, key }) => {
  return (
    <div
      className=" m-1 w-[90%] h-[17em] lg:h-[30em] text-center cursor-pointer"
      onClick={onClick}
      key={key}
    >
      <img
        src={src}
        alt="Products categories"
        className="block w-full h-[70%]"
      />
      <div className="w-full h-[30%] grid items-center justify-center shadow-orange-200 shadow-md">
        <div className="mt-4 text-xs lg:text-sm text-orange-900 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

const LandingImg = ({ src, display = "block" }) => {
  return (
    <motion.img
      src={src}
      alt="New Arrivals"
      className={`h-full ${display} w-full lg:w-1/2 filter brightness-90`}
      initial={{
        height: 0,
      }}
      animate={{
        height: "100%",
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      }}
    />
  );
};
