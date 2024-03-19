import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { IoMdMenu } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";


const Header = () => {
    const [open, setOpen]= useState(false)
    const routes = [
        {name: "Home",id: "home",path: "/",exact: true},
        {name: "About",id: "about",path: "/about",exact: true},
        {name: "Products",id: "products",path: "/products",exact: true},
        {name: "Product Detail",id: "productDetail",path: "/products/:id",exact: true},
        {name: "Search",id: "search",path: "/search",exact: true}
      ];
      
      
    return (
        <nav>
            <div className="md:hidden text-2xl  cursor-pointer bg-pink-200" onClick={()=> setOpen(!open)}>
                {
                    open === true? <RiCloseLine></RiCloseLine>:<IoMdMenu className=""></IoMdMenu>
                }
            
            </div>
            <ul className={`md:flex absolute md:static bg-pink-200 px-6 ${open === true? '' : 'hidden'}`}>
            {
                routes.map(route => <Navbar key={route.id} route={route}></Navbar>)
            }
            </ul>
        </nav>
    );
};

export default Header;