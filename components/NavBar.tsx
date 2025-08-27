'use client';
import Link from 'next/link';
import {Menu} from 'lucide-react';
import {usePathname} from 'next/navigation';

const menus = [
    {name: 'Home', link: '/'},
    {name: 'Services', link: '/services'},
    {name: 'Work', link: '/work'},
    {name: 'testimonials', link: '/testimonials'},
    {name: 'About', link: '/about'},
    {name: 'Blog', link: '/blog'},
];
export default function NavBar() {
    const pathname = usePathname();
    return (
        <>
            <div className='navbar bg-primary text-primary-content px-4 md:px-8 lg:px-16 border-b border-b-primary-content/20 sticky'>
                <div className='w-full flex items-center justify-between'>
                    {/* logo */}
                    <div className='flex items-center gap-2'>
                        <a className='text-lg font-bold'>KoorAmy.dev</a>
                    </div>
                    {/* menu */}
                    <div className='hidden lg:block lg:w-auto'>
                        <ul className='flex gap-10 text-primary-content'>
                            {menus.map((menu, index) => (
                                <li
                                    key={index}
                                    className={`hover:text-secondary text-lg cursor-pointer ${
                                        pathname === menu.link ? 'text-secondary font-bold' : ''
                                    }`}
                                >
                                    <Link href={menu.link}>{menu.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* contact */}
                    <div className='flex items-center gap-4'>
                        <div className='flex items-stretch'>
                            <button className='btn btn-lg bg-linear-to-bl border-secondary/50 from-accent to-secondary text-primary rounded-md text-lg hidden lg:inline-block'>
                                <Link href='/contact'>Contact us</Link>
                            </button>
                            <div className='dropdown dropdown-end block lg:hidden'>
                                <div tabIndex={0}
                                     role='button'
                                     className='btn p-2 rounded-field'>
                                    <Menu className='text-primary'/>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className='menu dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow-sm'
                                >
                                    {menus.map((menu, index) => (
                                        <li
                                            key={index}
                                            className={`hover:text-secondary cursor-pointer text-lg ${
                                                pathname === menu.link
                                                    ? 'text-secondary font-bold'
                                                    : 'text-gray-600'
                                            }`}
                                        >
                                            <Link href={menu.link}>{menu.name}</Link>
                                        </li>
                                    ))}
                                    <li>
                                        {' '}
                                        <button className='btn btn-xl bg-linear-to-bl from-accent to-secondary text-primary rounded-md w-full mt-4 text-xl border-secondary/50'>
                                            <Link href='/contact'>Contact us</Link>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
