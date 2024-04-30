
import Link from "next/link";

const NavLink = ({ href, title, icon, isActive }) => {
  return (
    <Link
      href={href}
      className={`${isActive} flex flex-col justify-center items-center hover:text-slate-900 text-xs sm:text-lg rounded dark:hover:text-white`}
    >
      {icon}
      {title}
    </Link>
  );
};

export default NavLink;
