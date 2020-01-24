import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Prod = ({ title, price, image, id }) =>{
  const Navigate = useNavigate();

 return (
  
      <motion.div
        className=" w-[40vw] md:w-60 xl:w-72 h-[15em] lg:h-[25em] mt-4 lg:mt-12 text-center cursor-pointer"
        initial={{
          y: 70,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}

        onClick={()=> Navigate("/product/" + title + "==" + id)}
      >
        <img src={image} alt="Products" className="block w-full h-3/5" />
        <div className="h-2/5 w-full grid items-center justify-center shadow-orange-200 shadow-md">
          <div className="text-xs lg:text-lg">
            <h5>{title}</h5>
            <p>₦{price}</p>
          </div>
        </div>
      </motion.div>
    )  
}
  export default Prod