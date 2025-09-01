'use client';
import Link from 'next/link';
import {Menu} from 'lucide-react';
import {usePathname} from 'next/navigation';

const menus = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Services', link: '/services'},
    {name: 'Work', link: '/work'}
];
export default function NavBar() {
    const pathname = usePathname();
    return (
        <div className='navbar bg-primary text-primary-content px-4 md:px-8 lg:px-16 border-b border-b-primary-content/20 sticky top-0 z-50'>
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
                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300  items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-2xl hidden lg:flex text-lg">
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
                                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-2xl mt-3 text-lg">
                                        <Link href='/contact'>Contact us</Link>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
