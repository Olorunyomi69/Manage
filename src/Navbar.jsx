
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

  return (
    <div>
      <nav className="relative mx-auto container p-6">
        <div className=" md:flex items-center justify-between">
          <div className="pt-2">
            <img src="./logo.svg" alt="logo" />
          </div>
          <div className="nav hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          <a
            href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md: block "
          >
            Get Started
          </a>

          <button
            id="menu-btn"
            className="block hambuger md:hidden focus:outline-none"
          >
            <IoMenu size={40} />
          </button>
        </div>

        <div className="md:hidden">
          <div
            className="absolute flex flex-col item-center hidden self-end text-red-300 py-8 mt-10 space-y-6 font-bold bg-white sm-w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="">Pricing</a>
            <a href="">Product</a>
            <a href="">About Us</a>
            <a href="">Careers</a>
            <a href="">Community</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
