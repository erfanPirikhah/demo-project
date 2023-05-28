import React, { Fragment, useState } from "react";
import Sidbar from "../Sidbar/Sidbar";
import { IoApps } from "react-icons/io5";
import Profile_Menu from "../Profile_Menu/Profile_Menu";

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="min-h-screen flex flex-row overflow-x-hidden bg-gray-50">
        <div
          // className={`flex flex-col w-full ${isOpen ? "" : ""
          //   } `}
          className={`content ${
            isOpen ? " md:mr-60" : ""
          }  transform ease-in-out duration-500 px-2 flex flex-col w-full`}
        >
          <nav
            className="sticky top-0 flex gap-3 items-center px-5 py-3 text-gray-700  bg-gray-50 dark:bg-[#1E293B] "
            aria-label="Breadcrumb"
          >
            <Profile_Menu />
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoApps size={25} className="text-gray-600 " />
            </button>
          </nav>

         
          <div className="w-full ">{props.children}</div>
        </div>
        <Sidbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Layout;
