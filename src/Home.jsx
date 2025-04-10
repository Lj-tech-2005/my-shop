import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { storecontext } from './components/context';

export default function Product() {
    const { addtocart } = useContext(storecontext);
    const [allproduct, setproduct] = useState([]);
    const [loading, setloading] = useState(true);
    const [totalpage, settotalpage] = useState(0);
    const limit = 30;
    const [current, setcurrent] = useState(0);

    useEffect(() => {
        setloading(true);
        axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${current * limit}`)
            .then((res) => {
                setproduct(res.data.products);
                settotalpage(Math.ceil(res.data.total / limit));
            })
            .catch(() => {
                setproduct([]);
            })
            .finally(() => {
                setloading(false);
            });
    }, [current]);

    const getPageClass = (i) => {
        return `px-4 py-2 rounded-md cursor-pointer border transition-all duration-300 ${
            current === i
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-green-100 hover:text-green-700"
        }`;
    };

    const pagination = [];
    for (let i = 0; i < totalpage; i++) {
        pagination.push(
            <li key={i} onClick={() => setcurrent(i)} className={getPageClass(i)}>
                {i + 1}
            </li>
        );
    }

    return (
        <>
            {/* Hero Banner */}
            <section className="mt-20 mb-10">
                <img src="1.jpg" alt="Promotional Banner" className="w-full object-cover rounded-xl max-h-[400px]" />
            </section>

            {/* Products Section */}
            <div className="w-full">
                <div className="max-w-[1300px] mx-auto px-4">
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {loading
                            ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
                            : allproduct.map((prod, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                                    <Link to={`/productfulldetails/${prod.id}`}>
                                        <img
                                            src={prod.thumbnail}
                                            alt={prod.title}
                                            className="h-56 w-full object-cover"
                                        />
                                    </Link>
                                    <div className="p-4">
                                        <Link to={`/productfulldetails/${prod.id}`}>
                                            <h2 className="text-lg font-semibold text-gray-800 hover:text-green-700">{prod.title}</h2>
                                        </Link>
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-xl font-bold text-green-700">${prod.price}</span>
                                            <button
                                                onClick={() => addtocart(prod.id)}
                                                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* Pagination */}
                    <ul className="flex flex-wrap justify-center gap-2 mt-10">
                        {pagination}
                    </ul>
                </div>
            </div>

            <section className='relative'>
                <img className='h-[400px] absolute right-0 top-[-400px]'  src="4.png" alt="" />
            </section>
        </>
    );
}

// Skeleton Card Placeholder
const SkeletonCard = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow animate-pulse">
            <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
            <div className="space-y-3">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
            <div className="h-10 bg-gray-300 rounded-lg mt-4"></div>
        </div>
    );
};





