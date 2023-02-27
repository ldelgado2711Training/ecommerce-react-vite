import { useState } from "react";
import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";

const MainHeader = () => {
  const [navClass, setNavClass] = useState("hidden");
  const [ulClass, setUlClass] = useState("");

  const handledOpenMenu = () => {
    setNavClass(
      "flex flex-col absolute top-0 left-0 p-8 w-4/5 h-screen bg-white border border-black"
    );
    setUlClass("gap-y-5 flex-col");
    console.log("click...[ OPEN ]");
  };

  const handledCloseMenu = () => {
    setNavClass("hidden");
    setUlClass("");
  };
  return (
    <header className="container relative mx-auto flex items-center gap-4  px-4 py-8">
      <button className="md:hidden" onClick={handledOpenMenu}>
        <MenuIcon />
      </button>
      <img
        src={LogoSneakers}
        alt="Sneakers"
        className="mr-auto mb-1 h-5 md:mr-0"
      />
      <nav
        className={`${navClass} py-0 md:static md:mr-auto md:flex md:h-full font-bold md:border-none`}
      >
        <button className="mb-12 md:hidden" onClick={handledCloseMenu}>
          <CloseIcon />
        </button>
        {/* ul>(li>a[href="#"]{comentario $})*5 */}
        <ul className={`${ulClass} flex md:flex-row md:gap-8 md:gap-y-0`}>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <button>
          <CartIcon />
        </button>
        <img src={AvatarImage} alt="Avatar" className="w-10" />
      </div>
    </header>
  );
};

export default MainHeader;
