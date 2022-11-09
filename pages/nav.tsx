import { motion } from "framer-motion";
import { useState } from "react";


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
    className="absolute bottom-5 left-0 right-0 h-1 bg-gradient-to-r from-stone-400 via-neutral-200 to-stone-400"
    layoutId="underline"
    layout
  ></motion.div>
);

const NiceMenu = () => {
  return (
    <div className="w-screen p-5 font-bold">
      <motion.div className=" p-5 flex justify-center ">
        <MenuItem text={"Home"}>
          <SubItem title="Product" text="e-commerce" />
          <SubItem title="Blog" text="Latest posts" />
          <SubItem title="Contact" text="Get in touch" />
        </MenuItem>
        <MenuItem text={"Tech"}>
          <SubItem title="Product" text="e-commerce" />
          <SubItem title="Blog" text="Latest posts" />
          <SubItem title="Contact" text="Get in touch" />
        </MenuItem>
        <MenuItem text={"Travel"}>
          <SubItem title="Product" text="e-commerce" />
          <SubItem title="Blog" text="Latest posts" />
          <SubItem title="Contact" text="Get in touch" />
        </MenuItem>
        <MenuItem text={"About us"} >
          <SubItem title="The Team" text="Get to know us better" />
          <SubItem title="The Company" text="Since 2022" />
        </MenuItem>
       
      </motion.div>
    </div>
  );
};

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

export default NiceMenu;
