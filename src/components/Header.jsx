import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { storecontext } from './context';

export default function Header() {
    const { cart } = useContext(storecontext);

    return (
        <header className="fixed top-0 w-full z-20 bg-gradient-to-r from-green-700 to-emerald-600 backdrop-blur-lg bg-opacity-90 text-white shadow-lg transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-3xl font-extrabold tracking-wide hover:text-yellow-300 transition duration-200">
                        ShopSmart
                    </h1>
                </Link>
                <nav>
                    <ul className="flex space-x-8 font-medium text-lg">
                        <li>
                            <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
                        </li>
                        <li>
                            <Link to="/Shop" className="hover:text-yellow-300 transition">Shop</Link>
                        </li>
                        <li>
                            <Link to="/aboutpage" className="hover:text-yellow-300 transition">About</Link>
                        </li>
                        <li>
                            <Link to="/contactpage" className="hover:text-yellow-300 transition">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="/cart">
                    <div className="relative flex items-center gap-2 text-xl bg-white text-green-700 px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
                        <span className="font-semibold">Cart</span>
                        <CiShoppingCart size={24} />
                        {cart.length > 0 && (
                            <span className="absolute top-[-6px] right-[-6px] bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                                {cart.length}
                            </span>
                        )}
                    </div>
                </Link>
            </div>
        </header>
    );
}
