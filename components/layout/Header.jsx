import Link from "next/link";
import HeaderLogo from "../icons/HeaderLogo";
import TargetNav from "../icons/TargetNav";
import Search from "../icons/Search";
import Menu from "../icons/Menu";
import { menuList } from "../../data/menuList";
const Header = () => {
  return (
    <header className="bg-brandBlue-dark px-6 sticky z-50 top-0">
      <div className="xl:mx-auto max-w-9xl  flex justify-between items-center">
        <div className="flex gap-2.5 items-center ">
          <button className="-ml-1.5  p-1.5">
            <TargetNav />
          </button>
          <Link href="/" className="flex py-5 gap-3 items-center ">
            <HeaderLogo />
            <span className="hidden xl:block text-xs text-white tracking-large">
              Technical <br />
              University <br />
              of Munich
            </span>
          </Link>
        </div>
        <div className="flex justify-start flex-wrap items-center">
          <nav className="hidden xl:block mr-13.5">
            <ul className="flex gap-6">
              {menuList.map((item, index) => (
                <li key={index} className="">
                  <Link
                    href={item.url}
                    className="pt-8 pb-6 mb-0.5 border-b-0 hover:border-b-4 border-white text-sm font-bold leading-4 text-center uppercase text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <ul className="mr-2.5 uppercase flex items-center">
              <li className=" tracking-large text-white font-bold ">
                <Link
                  href="/"
                  className=" text-opacity-50 hover:text-opacity-0"
                >
                  DE
                </Link>
              </li>
              <li className="font-bold text-white tracking-large border-l-2 border-white ml-2 pl-2">
                <span>En</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <button className="p-2.5">
              <Search />
            </button>
          </div>
          <div className="flex items-center xl:hidden">
            <button className="p-2.5">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
