
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {  selectProductById, getProductById, productActions} from "../../redux/ProductsSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import Alert from "../Others/Alert";
import Loading from "../Others/Loading";


const ViewProduct = () => {
  const [size, setSize] = useState(null);
  const product = useSelector(state => selectProductById(state));
  const [prodImage, setProdImage] = useState(0);
  const {id} = useParams()
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(()=>{
    setTimeout(()=>setShowAlert(false), 1000)
  })

  useEffect(()=>{
      dispatch(getProductById(id.slice(id.indexOf("==") + 2)))

      return ()=>{
        dispatch(productActions.clearCartegories())
      }
      }, [])

  return (
    <>

    {
      showAlert && <Alert>Item Added to Cart Successfully!</Alert>
    }

      {typeof product.title === "string" ? (
        <div className="my-4 mt-24 p-4 lg:px-12  flex flex-col lg:flex-row justify-center items-center text-orange-900 lg:h-[90vh] lg:min-h-[500px]">
          <motion.div
            initial={{
              scaleX: 0.5,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className=" lg:w-1/2 h-full w-full"
          >
            <img
              src={product.images[prodImage]}
              alt="item"
              className="block w-full lg:w-4/5 h-[20em] lg:h-full"
            />
          </motion.div>
          <div className="lg:w-1/2  h-full text-center lg:text-left w-full">
            <motion.h1
              initial={{
                letterSpacing: "2em",
              }}
              animate={{
                letterSpacing: "0",
              }}
              transition={{
                duration: 0.5,
              }}
              className="text-2xl"
            >
              {product.title}
            </motion.h1>
            <p className="text-lg mt-4">
              <span className="inline-block text-red-500 line-through">
              ₦
                {((product.price + ((product.price / 100) * product.discountPercentage)) * 400 ).toFixed(
                    2
                  )}
              </span>{" "}
              <span className="inline-block ml-8 text-green-500">
              ₦{product.price  * 400}
              </span>{" "}
              <span className="inline-block ml-8">
                Save 
                ₦{(((product.price / 100) * product.discountPercentage) * 400).toFixed(
                  2
                )}
              </span>
            </p>

            <div>
              <p className="text-xl mt-4">Designs</p>

              <p className="text-lg mt-3">
                {product?.images.map((image, index) => {
                  return (
                    <img
                      key={image}
                      src={image}
                      alt="other choice"
                      className="cursor-pointer shadow-lg shadow-orange-900 mr-4 mt-2 inline-block w-10 h-10"
                      onClick={()=>setProdImage(index)}
                    />
                  );
                })}
              </p>
            </div>

            <div>
              <p className="text-xl mt-8">Sizes</p>

              {["S", "M", "L", "XL"].map((sp) => {
                return (
                  <span
                    key={sp}
                    className={`inline-block text-sm w-8 h-8 mr-4 py-2 mt-4 text-center cursor-pointer shadow-sm shadow-orange-300 ${
                      size === sp ? "bg-orange-900 text-orange-200" : ""
                    } hover:shadow-orange-900 duration-500`}
                    onClick={() => setSize(sp)}
                  >
                    {sp}
                  </span>
                );
              })}

              <p className="text-lg mt-3"></p>

              <p className="text-sm mt-6">
                <span className="inline-block mr-2 w-3 h-3 bg-green-500 rounded-full shadow-md shadow-green-500"></span>{" "}
                In Stock
              </p>
            </div>

            <div className="text-sm mt-6">
              <p className=" border border-orange-900 text-center text-lg p-4 cursor-pointer" onClick={()=>{
                const item = {image: product.images[0], id: product.id, title: product.title, category: product.category, quantity: 1, price: product.price}
                dispatch(productActions.addToCart({...item}))
               setShowAlert(true);

               window.localStorage.cart = JSON.stringify( [...JSON.parse(window.localStorage.cart), item])
              }}>
                ADD TO CART
              </p>
            </div>
          </div>
        </div>
      ) :

      <Loading>Loading...</Loading>
    
    }
    </>
  );
};

export default ViewProduct;
