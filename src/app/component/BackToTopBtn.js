"use client";

import { useEffect, useState } from "react";

// icons
import { FaChevronCircleUp } from "react-icons/fa";

// react scroll
import { Link } from "react-scroll";

export default function BackToTopBtn() {
  const [isActive, setisActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setisActive(true);
      } else {
        setisActive(false);
      }
    };
  }, []);
  return (
    <Link
      className={`${
        !isActive && "hidden"
      } fixed bg-accent hover:bg-accent-hover w-12
  h-12 right-16 bottom-11 z-10 cursor-pointer flex justify-center items-center
  text-white border-2 border-white`}
    >
      <FaChevronCircleUp className="text-xl" />
    </Link>
  );
}
