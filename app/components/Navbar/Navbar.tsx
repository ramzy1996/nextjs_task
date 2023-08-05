'use client'
import { NavItem } from "@/app/Constant"
import { INavBar } from "@/app/Interfaces/INavBar"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import { FcAbout } from "react-icons/fc";
import styles from './navbar.module.scss'

const Navbar = () => {
    const route = useRouter();
    const pathname = usePathname();
    return (
        <nav className={`backdrop-blur shadow fixed z-50 left-0 right-0 top-0 w-full flex py-1  justify-between items-center navbar sm:px-16 px-6 border-b-[1px] border-black`}>
            <Image src='/logo.png' alt="V4Codes" width={100} height={80} className='cursor-pointer' onClick={() => route.push('/')} />
            <ul className='list-none flex gap-16 justify-end items-center flex-1'>
                {
                    NavItem.map((nav: INavBar, i) => (
                        <li key={i}
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-white"
                                }`}>
                            <Link href={nav.url}>
                                {nav.icon !== '' ? (
                                    <div className={pathname === nav.url ? styles.activeLink : styles.iconClass}>
                                        <FcAbout style={{ fontSize: '40px', }} />
                                    </div>
                                ) : (
                                    <div className={pathname === nav.url ? styles.activeLink : styles.iconClass}>
                                        <span>{nav.label}</span>
                                    </div>
                                )}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar