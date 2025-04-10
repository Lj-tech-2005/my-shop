import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { storecontext } from './Context';


export default function Product() {

    const { addtocart } = useContext(storecontext)
    const [allproduct, setproduct] = useState([]);
    const [categories, setcategories] = useState([])
    const [loading, setloading] = useState(true);
    const { categorieslug } = useParams();
    const [totalpage, settotalpage] = useState(0)
    const limit = 30;
    const [current, setcurrent] = useState(0)




    const getcategories = () => {

        axios.get('https:dummyjson.com/products/categories').then(
            (response) => {
                setcategories(response.data)
            }
        ).catch((error) => {

            console.log(error)

        })
    }



    useEffect(
        () => {

            getcategories()
        }, []
    )

    useEffect(
        () => {

            setloading(true);

            let api = ""
            if (categorieslug == null) {

                api = axios.get('https://dummyjson.com/products');

            } else {

                api = axios.get("https:dummyjson.com/products/category/" + categorieslug);
            }

            api.then(

                (Response) => {

                    setproduct(Response.data.products)
                    settotalpage(Math.ceil(Response.data.total / limit))

                }).catch((error) => {
                    setproduct([])

                }).finally(() => {
                    setloading(false)
                })
        }, [categorieslug]
    )

    useEffect(() => {

        setloading(true);
        axios.get(`https://dummyjson.com/products?skip=${current * limit}`).then(

            (Response) => {

                setproduct(Response.data.products)


            }).catch((error) => {

                setproduct([])

            }).finally(() => {
                setloading(false)
            })



    }, [current]
    )



    

    const getPageClass = (i) => {
        return `flex items-center justify-center px-3 cursor-pointer h-8 leading-tight border ${current === i
                ? "bg-blue-400 text-white"
                : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }`;
    };


    const pagination = []

    for (let i = 0; i < totalpage; i++) {

        pagination.push(

            <li key={i} onClick={() => setcurrent(i)} className={getPageClass(i)}>
                {i + 1}
            </li>

        )


    }




    return (
        <div className='w-full mt-18 '>
            <div className='max-w-[1300px] p-4'>
                <div className='grid gap-5 items-start grid-cols-12 '>
                    <ul className='col-span-2 '>
                        <Link to="/"><li className={`shadow ${categorieslug == null ? "bg-green-700 text-white" : ""}  cursor-pointer p-3`}>ALL</li></Link>
                        {
                            categories.map((cat, index) => {

                                return (

                                    <Link key={index} to={`/${cat.slug}`}> <li key={index} className={`w-full ${categorieslug == cat.slug ? "bg-green-700 text-white" : ""}  cursor-pointer p-3 mb-3 shadow`}>{cat.name}</li></Link>
                                )

                            })
                        }
                    </ul>


                    <div className='grid col-span-10 p-4 gap-5 items-start'>



                        <div className='grid  gap-5 items-start grid-cols-3 ' >
                            {

                                loading == true ?
                                    [1, 2, 3, 4, 5, 6, 7, 8].map((d, i) => {

                                        return (
                                            <SkeletonCard key={i} />
                                        )
                                    }) :

                                    allproduct.map((prod, index) => {

                                        return (
                                            <div className="max-w-sm  rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-100 bg-white p-5">
                                                <Link key={index} to={`/productfulldetails/${prod.id}`}>
                                                    <img
                                                        className="w-full h-56 object-cover rounded-lg"
                                                        src={prod.thumbnail}
                                                        alt="Product"
                                                    />
                                                </Link>

                                                <div className="py-4">
                                                    <Link key={index} to={`/productfulldetails/${prod.id}`}>

                                                        <h2 className="text-xl font-semibold text-gray-900">{prod.title}</h2>
                                                        <p className="text-gray-600 mt-2">This is a short description of the product.</p>
                                                    </Link>

                                                    <div className="flex items-center justify-between mt-4">

                                                        <span className="text-lg font-bold text-gray-900">$99.99</span>
                                                        <button onClick={() => { addtocart(prod.id) }} className="bg-green-700 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                                            Add to Cart
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>

                                        )


                                    })

                            }

                        </div>
                        <ul className="flex -space-x-px text-sm mt-17 justify-center">

                            {pagination}
                        </ul>



                    </div>

                </div>

            </div>

        </div>
    )
}



const SkeletonCard = () => {
    return (
        <div className="max-w-sm w-full p-4 rounded-lg shadow-md bg-white">
            <div className="animate-pulse">
                {/* Image Skeleton */}
                <div className="bg-gray-300 h-48 w-full rounded-lg"></div>

                {/* Text Skeleton */}
                <div className="mt-4 space-y-3">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>

                {/* Button Skeleton */}
                <div className="mt-4 h-10 bg-gray-300 rounded-lg w-full"></div>
            </div>
        </div>
    );
};

