import { NAV_LINKS } from "@/constant"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className=" py-5 padding-container flexBetween max-container z-30">
       <Link href="/">
          <Image src='/hilink-logo.svg' alt="logo" width={74} height={24}/>
       </Link>

       <ul className="hidden lg:flex gap-12 h-full">
          {NAV_LINKS.map((link) =>(
             <Link href={link.href} key={link.key}
             className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
             >
                {link.label}
             </Link>
          ))}
       </ul>
       <div className="hidden lg:flexCenter">
           <Button
             type="button"
             title="Login"
             icon="/user.svg"
             variant="btn_dark_green"           
           />
       </div>

       <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"       
       />
    </nav>
  )
}

export default Navbar