import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPaypal,
  FaCcMastercard,
  FaAmazonPay,
  FaGooglePay,
  FaCcVisa,
} from "react-icons/fa";

const Footer = () => {
  const [reveal, setReveal] = useState(false);

  const openTab = (prev, curr) => {
    if (prev !== curr) setReveal(curr);
    else setReveal(false);
  };

  return (
    <footer className="py-6">
      <div className="text-center grid item-center justify-center m-3">
        {" "}
        <svg width="100" height="30" className="">
            <text x="40" y="25" fontSize={"20"} fill="rgb(124 45 18)">
              ENTA
            </text>
            <path
              d="M0 0 L5 0 L15 20 L20 0 L25 0 L45 0 L15 30 Z"

              fill="rgb(124 45 18)"
            />
          </svg>
      </div>

      <div className="bg-orange-900 text-center cursor-pointer group lg:flex justify-evenly">
        <div className="border-b border-b-black p-3">
          <p
            onClick={() => openTab(reveal, "quick")}
            className="text-sm lg:text-base"
          >
            QUICK LINKS{" "}
            <span className="ml-4 inline-block lg:hidden ">
                <svg width={"12"} height="8">
                      <line x1="0" y1="0" x2="6" y2="8" fill="rrgb(255, 237, 213)" stroke="rgb(255, 237, 213)"/>
                      <line x1="6" y1="8" x2="12" y2="0" fill="rgb(255, 237, 213)" stroke="rgb(255, 237, 213)"/>

                     </svg>
            </span>{" "}
          </p>
          <ul
            className={`duration-300 ${
              reveal === "quick" ? "h-44" : "h-0"
            } lg:h-full lg:mt-8`}
          >
            <li
              className={`${
                reveal === "quick" ? "block" : "hidden"
              } text-sm my-4 lg:block `}
            >
              <p>FAQs</p>
            </li>
            <li
              className={`${
                reveal === "quick" ? "block" : "hidden"
              } text-sm my-4 lg:block `}
            >
              <p>Contact Us</p>
            </li>
            <li
              className={`${
                reveal === "quick" ? "block" : "hidden"
              } text-sm my-4 lg:block `}
            >
              <p>Privacy Policy</p>
            </li>
            <li
              className={`${
                reveal === "quick" ? "block" : "hidden"
              } text-sm my-4 lg:block `}
            >
              <p>Terms of Service</p>
            </li>
            <li
              className={`${
                reveal === "quick" ? "block" : "hidden"
              } text-sm my-4 lg:block `}
            >
              <p>Refund Policy</p>
            </li>
          </ul>
        </div>

        <div className="border-b border-b-black p-3">
          <p
            onClick={() => openTab(reveal, "about")}
            className="text-sm  lg:text-base"
          >
            ABOUT US{" "}
            <span className="ml-4 inline-block lg:hidden ">
                <svg width={"12"} height="8">
                      <line x1="0" y1="0" x2="6" y2="8" fill="rrgb(255, 237, 213)" stroke="rgb(255, 237, 213)"/>
                      <line x1="6" y1="8" x2="12" y2="0" fill="rgb(255, 237, 213)" stroke="rgb(255, 237, 213)"/>

                     </svg>
            </span>
          </p>
          <ul
            className={`duration-300 ${
              reveal === "about" ? "h-44" : "h-0"
            } lg:h-full lg:mt-8`}
          >
            <li
              className={`${
                reveal === "about" ? "block" : "hidden"
              } text-sm my-4 lg:block `}
            >
              <p>Locations</p>
            </li>
            <li
              className={`${
                reveal === "about" ? "block" : "hidden"
              } text-sm my-4 lg:block `}
            >
              <p>Careers</p>
            </li>
            <li
              className={`${
                reveal === "about" ? "block" : "hidden"
              } text-sm my-4 lg:block `}
            >
              <p>Interns</p>
            </li>
            <li
              className={`${
                reveal === "about" ? "block" : "hidden"
              } text-sm my-4 lg:block `}
            >
              <p>Blog</p>
            </li>
          </ul>
        </div>

        <div className="border-b border-b-black p-3">
          <p
            onClick={() => openTab(reveal, "sign")}
            className="text-sm  lg:text-base"
          >
            SIGN UP{" "}
            <span className="ml-4 inline-block lg:hidden ">
                <svg width={"12"} height="8">
                      <line x1="0" y1="0" x2="6" y2="8" fill="rrgb(255, 237, 213)" stroke="rgb(255, 237, 213)"/>
                      <line x1="6" y1="8" x2="12" y2="0" fill="rgb(255, 237, 213)" stroke="rgb(255, 237, 213)"/>

                     </svg>
            </span>
          </p>
          <div
            className={`duration-300 ${
              reveal === "sign" ? "h-44" : "h-0"
            } lg:h-full lg:mt-8`}
          >
            <p
              className={`${
                reveal === "sign" ? "block" : "hidden"
              } text-sm  lg:block my-7`}
            >
              Subscribe to get special offers, free giveaways, and amazing
              deals.
            </p>
            <input
              className={`${
                reveal === "sign" ? "block" : "hidden"
              } lg:block w-full  text-center text-orange-900 outline-0 p-2 border rounded-lg text-xs my-2`}
              placeholder="Enter your email"
              type={"text"}
            />
            <input
              className={`${
                reveal === "sign" ? "block" : "hidden"
              } lg:block w-32 mx-auto text-orange-100  text-center p-2 border rounded-lg text-xs my-2`}
              value={"Subscribe"}
              type={"button"}
            />
          </div>
        </div>
      </div>

      <div className=" text-orange-900 text-center flex justify-center text-2xl m-6">
        <a
          href="https://facebook.com/ventashop"
          className="block mx-2"
          target={"_blank"}
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/seego"
          className="block mx-2"
          target={"_blank"}
        >
          {" "}
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/seego0"
          className="block mx-2"
          target={"_blank"}
        >
          <FaInstagram />
        </a>
      </div>

      <div className=" text-orange-900 text-center flex justify-center text-2xl mt-12">
        <FaAmazonPay className="block mx-2" />
        <FaCcMastercard className="block mx-2" />
        <FaGooglePay className="block mx-2" />
        <FaPaypal className="block mx-2" />
        <FaCcVisa className="block mx-2" />    </div>

      <div className=" text-orange-900 flex flex-col items-center mt-6 text-sm">
        <p>
          This site was designed and developed by{" "}
          <a
            href="https://github.com/seegow"
            target={"_blank"}
            className="bg-orange-900 text-orange-100 p-1 hover:bg-transparent hover:border hover:border-orange-900 hover:text-orange-900 hover:shadow-black shadow-md duration-500"
          >
            Seego
          </a>
        </p>
        <p>&copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
