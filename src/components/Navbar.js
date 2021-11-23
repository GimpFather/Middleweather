import { GiRing } from "react-icons/gi";
import { VscCode } from "react-icons/vsc";
import { WiCloudy } from "react-icons/wi";

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 px-6
        w-screen h-16 
        flex flex-row
        bg-gray-900 text-white shadow-lg">
            <NavbarIcon text="LOTR Theme" icon = {<GiRing size="48"/>}></NavbarIcon>
            <span className="ml-auto"></span>
            <NavbarIcon text="Checkout my Github" icon = {<VscCode size="48"/>}></NavbarIcon>
            <NavbarIcon text="Weather API" icon = {<WiCloudy size="50"/>}></NavbarIcon>
        </div>
    )
};

const NavbarIcon = ({ icon, text = '' }) => (
    <div className="navbar-icon group">
        {icon}
        <span className="navbar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default Navbar;