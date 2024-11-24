import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNav({ showNav, closeNav }: Props) {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 ${navOpen} transition-all duration- z-[1000] bg-black bg-opacity-70 w-full h-screen`}
      />

      {/* navLinks */}
      <div
        className={`text-white fixed ${navOpen} flex flex-col justify-center h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[1006]`}
      >
        {navLinks.map((item) => (
          <Link key={item.id} href={item.href} onClick={closeNav}>
            <p className="nav__link text-white text-[20px] ml-12 border-b-[1.5px] border-white sm:text-[30px]">
              {item.label}
            </p>
          </Link>
        ))}

        {/* Close Icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] z-[1008] text-white w-8 h-8 right-[1.4rem] cursor-pointer"
        />
      </div>
    </>
  );
}

// Clock Strike
