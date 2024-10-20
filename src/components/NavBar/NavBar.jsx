import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";



const NavBar = () => {

    const routes = [
        { id: 1, path: '/', component: 'Home' }, 
        { id: 2, path: '/about', component: 'About' }, 
        { id: 3, path: '/services', component: 'Services' }, 
        { id: 4, path: '/contact', component: 'Contact' }, 
        { id: 5, path: '/blog', component: 'Blog' }
      ];

    const [open, setOpen] = useState(false)

    return (
        <nav>
            <div className="bg-gray-300 p-1 relative ">
                <div className="md:hidden text-3xl text-green-700 m-4" onClick={() => {setOpen(!open)}}>
                    {
                        open === true ? <RxCross2 /> : <FiMenu/>
                    }
                </div>
                <ul className={`md:flex md:static md:justify-center  absolute bg-gray-300 ${open ? 'top-full' : '-top-60'} duration-500`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;