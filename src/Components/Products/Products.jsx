import React, { useEffect, useState } from "react";
import { productActions, getProducts } from "../../redux/ProductsSlice";
import { useSelector } from "react-redux/es/exports";
import Pagination from "./Pagination";
import Prod from "./Items";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import Loading from "../Others/Loading";

const Products = ({ selecter, getter }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [searchParam, setSearchParam] = useSearchParams();

  const products = useSelector((state) => selecter(state));
  
  const [page, setPage] = useState({
    pageView: 2,
    posts: [0, 12],
  });

  useEffect(() => {
    if (id !== "latest" && id !== undefined) dispatch(getter(id));
    else dispatch(getProducts());

    return () => {
      dispatch(productActions.clearCartegories());
    };
  }, [id]);

  const [smartPhones, setSmart] = useState(null);
  const [length, setLength] = useState([]);

  useEffect(() => {
    [smartPhones];
    let arr = [];
    if (products) {
      setSmart(
        products.filter((prod) => {
          if (prod.category === "smartphones") return prod;
        })
      );

      let prods = new Array(Math.ceil(products.length / 12));
      for (let i = 0; i < prods.length; i++) {
        arr.push(i + 1);
      }
    }
    setLength(arr);
  }, [products]);

  useEffect(() => {
    let top = 12 * (+searchParam.get("page") - 1);
    setPage((curr) => {
      if (+searchParam.get("page") !== 1) {
        return {
          posts: [top, 12 * +searchParam.get("page")],
          pageView: +searchParam.get("page"),
        };
      }
      return { pageView: 2, posts: [0, 12] };
    });
  }, [+searchParam.get("page")]);

  return (
    <>
      {products.length > 0 ? (
        <div className="text-orange-900  text-center p-4 mt-24">
          <div className="mt-8 mb-16">
            <h1 className="text-2xl">{(id[0].toLocaleUpperCase() + id.slice(1).toLocaleLowerCase()) || "All Products"}</h1>

            <div className="flex flex-col lg:flex-row justify-between mt-4 lg:px-8">
              <p>{products.length} Products</p>
              <div className="flex justify-center lg:justify-between mt-4">
                <p className="border border-orange-900 px-4 py-2 mx-2 w-1/2 lg:w-32 flex justify-between items-center cursor-pointer">
                  Filter
                  <span className="ml-4 inline-block">
                    <svg width={"12"} height="8">
                      <line
                        x1="0"
                        y1="0"
                        x2="6"
                        y2="8"
                        fill="rgb(123, 45, 18)"
                        stroke="rgb(123, 45, 18)"
                      />
                      <line
                        x1="6"
                        y1="8"
                        x2="12"
                        y2="0"
                        fill="rgb(123, 45, 18)"
                        stroke="rgb(123, 45, 18)"
                      />
                    </svg>
                  </span>
                </p>
                <p className="border border-orange-900 px-4 py-2 mx-2 w-1/2 lg:w-32 flex justify-between items-center cursor-pointer">
                  Sort By
                  <span className="ml-4 inline-block">
                    <svg width={"12"} height="8">
                      <line
                        x1="0"
                        y1="0"
                        x2="6"
                        y2="8"
                        fill="rgb(123, 45, 18)"
                        stroke="rgb(123, 45, 18)"
                      />
                      <line
                        x1="6"
                        y1="8"
                        x2="12"
                        y2="0"
                        fill="rgb(123, 45, 18)"
                        stroke="rgb(123, 45, 18)"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <Pagination
            length={length}
            page={page}
            changePage={(x) =>
              setSearchParam({
                page: x,
              })
            }
          />

          <div className=" grid grid-cols-2 md:grid-cols-3 py-4 lg:grid-cols-4 place-items-center ">
            {products.slice(page.posts[0], page.posts[1]).map((item, index) => {
              return (
                <div key={item.id}>
                  <Prod
                    image={item.thumbnail}
                    price={item.price *400}
                    title={item.title}
                    id={item.id}
                  />
                </div>
              );
            })}
          </div>

          <Pagination
            length={length}
            page={page}
            changePage={(x) =>
              setSearchParam({
                page: x,
              })
            }
          />
        </div>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </>
  );
};

export default Products;
