import { Link } from "react-router-dom";
import logo from '/src/assets/logo.png';
function Navbar(){

    return (<>
            <nav className="hover:shadow-2xl py-2 flex justify-between items-center px-10 border-2 border-slate-400 shadow-xl rounded-full m-2 bg-slate-50">
                <Link to="/" className="flex gap-2 items-center" ><img src={logo} alt="cvb" className="md:w-10 w-6"/><span className="font-medium md:text-2xl text-md">URL SHORTNER</span>
                </Link>
                <div className="md:text-md text-sm font-semibold  px-2 py-1 italic"> Designed by: Sajal Gupta</div>
            </nav>
    </>);

}

export default Navbar;