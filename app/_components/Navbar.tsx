"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname()
    const links = [
        {
            href: "/",
            tag: "Home"
        },
        {
            href: "/dashboard",
            tag: "Dashboard"
        },
        {
            href: "/blog",
            tag: "Blog"
        },
        {
            href: "/contact",
            tag: "Contact"
        },
    ]   
    
    return (
        <>
            <nav className="w-full h-12 bg-orange-900 border-b flex items-center justify-center gap-10 top-0 sticky z-10">
                {links.map(link => (
                    <Link href={link.href} className={``} style={pathname == link.href ? {textDecoration: "underline"} : {}}>{link.tag}</Link>
                ))}
            </nav>
        </>
    );
}

export default Navbar;