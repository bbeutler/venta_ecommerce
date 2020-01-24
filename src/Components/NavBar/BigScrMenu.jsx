import React from 'react'
import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/ProductsSlice';
import { useNavigate } from 'react-router-dom';

const BigScrMenu = () => {
const dispatch = useDispatch()
const Navigate = useNavigate()
    
  async function showProducts(cat, url) {
    await dispatch(getCategories(cat));
    await Navigate(url);
    return;
  }

  return (
    <ul className="flex justify-between text-sm text-orange-900 w-full ">
          <li className="group relative ">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Gadgets
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-24 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("smartphones", "/products/smartphones?page=1")
                }
              >
                Smartphones
              </p>
              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("laptops", "/products/laptops?page=1")}
              >
                Laptops
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Shoes
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-24 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("mens-shoes", "/products/mens-shoes?page=1")
                }
              >
                Men's Shoes
              </p>
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("womens-shoes", "/products/womens-shoes?page=1")
                }
              >
                Women's Shoes
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Clothing
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-28 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("mens-shirts", "/products/mens-shirts?page=1")
                }
              >
                Men's Shirts
              </p>
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("womens-dresses", "/products/womens-dresses?page=1")
                }
              >
                Women's Dresses
              </p>
              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("tops", "/products/tops?page=1")}
              >
                Tops
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Accessories
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-28 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("sunglasses", "/products/sunglasses?page=1")
                }
              >
                Sunglasses
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("womens-jewellery", "/products/womens-jewellery?page=1")
                }
              >
                Women's Jewellery
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("womens-bags", "/products/womens-bags?page=1")
                }
              >
                Women's Bags
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("womens-watches", "/products/womens-watches?page=1")
                }
              >
                Women's Watches
              </p>
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("mens-watches", "/products/mens-watches?page=1")
                }
              >
                Men's Watches
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Cosmetics
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-28 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("skincare", "/products/skincare?page=1")}
              >
                Skincare
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("fragrances", "/products/fragrances?page=1")
                }
              >
                Fragrances
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Home Decor
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-28 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("furniture", "/products/furniture?page=1")}
              >
                Furnitures
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("home-decoration", "/products/home-decoration?page=1")
                }
              >
                Appliances
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("lighting", "/products/lighting?page=1")}
              >
                Lighting
              </p>
            </div>
          </li>

          <li className="group relative">
            <p className="cursor-pointer after:content-[''] after:block after:absolute relative after:w-0 after:h-[2px] after:top-6 after:bg-orange-900 hover:after:w-full after:duration-500">
              Others
            </p>
            <div className="absolute bg-orange-200 p-1 duration-1000 text-xs top-8 delay-200 w-24 opacity-0 group-hover:opacity-100">
              <p
                className=" my-1 cursor-pointer"
                onClick={() =>
                  showProducts("automotive", "/products/automotive?page=1")
                }
              >
                Automotive
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("motocycle", "/products/motorcycle?page=1")}
              >
                Motorcycle
              </p>

              <p
                className=" my-1 cursor-pointer"
                onClick={() => showProducts("groceries", "/products/groceries?page=1")}
              >
                Groceries
              </p>
            </div>
          </li>
        </ul>

  )
}

export default BigScrMenu