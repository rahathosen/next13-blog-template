import { motion } from "framer-motion";
import { useState } from "react";
import { Transition } from "@headlessui/react";




type MenuItemProps = {
    text: string;
    children: JSX.Element|JSX.Element[];
    
  }
type SubItemProps = {
    text: string;
    title:string;
}

const Underline = () => (
  <motion.div
    className="absolute bottom-5 left-0 right-0 h-1 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400"
    layoutId="underline"
    layout
  ></motion.div>
);

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="">
        <div className="">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center">
              <div className="hidden md:block">

                
            {/* large nav */}
           
            <div className="w-screen p-5 font-bold  hidden md:block">
      <motion.div className=" p-5 flex justify-center ">
        <MenuItem text={"Home"}>
          <SubItem title="Product" text="Modern e-commerce" />
          <SubItem title="Blog" text="Latest posts" />
          
        </MenuItem>
        <MenuItem text={"Tech"}>
          <SubItem title="Product" text="Modern e-commerce" />
          <SubItem title="Blog" text="Latest posts" />
          <SubItem title="Contact" text="Get in touch" />
        </MenuItem>
        <MenuItem text={"Travel"}>
          <SubItem title="Product" text="Modern e-commerce" />
          <SubItem title="Blog" text="Latest posts" />
          <SubItem title="Contact" text="Get in touch" />
        </MenuItem>
        <MenuItem text={"About us"} >
          <SubItem title="The Team" text="Get to know us better" />
          <SubItem title="The Company" text="Since 2022" />
        </MenuItem>
       
      </motion.div>
    </div>
   {/* large nav*/}
         </div>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start md:hidden px-8">
                <div className="flex-shrink-0 flex items-center">
                  <div
                    className="block lg:hidden h-8 w-auto text-lg font-bold">
                    Next Blog
                  </div>
                  <div
                    className="hidden lg:block h-8 w-auto text-lg font-bold" >Next Blog
                    </div>   
                </div>
                </div>
            <div className=" px-8 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-neutral-100 inline-flex items-center justify-center p-2 
                rounded-md text-neutral-800 hover:text-neutral-800 hover:bg-neutral-200 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200
                 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="mx-8 pt-2 pb-3 space-y-1 text-center bg-neutral-50">
                <a
                  href="#"
                  className="text-neutral-800 hover:bg-neutral-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-neutral-800 hover:bg-neutral-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Tech
                </a>

                <a
                  href="#"
                  className="text-neutral-800 hover:bg-neutral-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Travel
                </a>

                <a
                  href="#"
                  className="text-neutral-800 hover:bg-neutral-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About us
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}


const MenuItemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
  
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  const  MenuItem: React.FC<MenuItemProps> =  ({ text, children, ...props }) => {
    const [isBeingHovered, setIsBeingHovered] = useState(false);
  
    return (
      <motion.div
        className="px-10 relative cursor-pointer z-10"
        onHoverStart={() => setIsBeingHovered(true)}
        onHoverEnd={() => setIsBeingHovered(false)}
      >
        <span className="relative">
          {text}
          {isBeingHovered && <Underline />}
        </span>
        {isBeingHovered && (
          <div className="">
            <motion.div
              {...props}
              layoutId="menu"
              className="absolute border rounded-lg border-1 shadow-lg py-8 px-8 bg-white rounded-box "
              variants={MenuItemVariants}
              initial="hidden"
              animate="visible"
            >
              {children}
            </motion.div>
          </div>
        )}
      </motion.div>
    );
  };
  
  const SubItemVariants = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  
  const SubItem: React.FC<SubItemProps> = ({ title, text }) => {
    return (
      <motion.div
        className="my-2 group cursor-pointer min-w-max"
        layout
        variants={SubItemVariants}
      >
        <div className="flex items-center gap-4">
          <div className="py-2">
            <p className="font-bold text-gray-800 group-hover:text-blue-900 text-md">
              {title}
            </p>
            <span className="font-bold text-gray-400 group-hover:text-blue-400 text-sm">
              {text}
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

export default Nav;