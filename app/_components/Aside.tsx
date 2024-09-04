"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Aside = () => {

    const pathname = usePathname()
    const links = [
        {
            href: "/dashboard/invoice",
            tag: "Invoice"
        },
        {
            href: "/dashboard/costumer",
            tag: "Costumer"
        },
    ]
    
    return(
        <>
        <aside className="bg-transparent border-r sticky top-0 h-screen overflow-y-hidden p-8">
            {links.map(link => (
                <Link 
                key={link.href}
                href={link.href} 
                className={`flex flex-col ${pathname == link.href ? 'underline' : ''}`}
                >
                {link.tag}
                </Link>
            ))}
            </aside>

    </>
    );
}

export default Aside;