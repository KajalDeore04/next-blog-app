'use client';
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// This is the page component that will be rendered when the user navigates to /blogs/:id

const Page = ({params}) => {

    const [data, setData] = useState(null);

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if(Number(params.id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    }

    useEffect(() => {
        fetchBlogData();
    },[])

    return ( data ? <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28 '>
            <div className='flex justify-between items-center '>
                <Link href='/'>
                    <Image src={assets.logo} width={180} alt='logo' className='w-[130px] sm:w-auto' />
                </Link>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                    Get Started
                    <Image src={assets.arrow} alt='arrow' />
                </button>
            </div>
            <div className='text-center my-24'>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                <Image src={data.author_img} alt='author' width={60} height={60} className='mt-6 border border-white rounded-full mx-auto' />
                <p className='text-lg mt-1 pb-2 max-w-[740px] mx-auto'>{data.author}</p>
            </div>
        </div>
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image src={data.image} width={1280} height={720} alt='image' className='border-4 border-white' />
            <h1 className='my-8 text-[26px] font-semibold '>Introduction:</h1>
            <p>{data.description}</p>
            <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
            <p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore distinctio consectetur? Blanditiis culpa aut tenetur illo numquam minus cumque eligendi quidem earum. Atque saepe maxime est suscipit fugiat incidunt aspernatur odio tempore perspiciatis esse illo adipisci ea, ullam expedita.</p>
            <p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore distinctio consectetur? Blanditiis culpa aut tenetur illo numquam minus cumque eligendi quidem earum. Atque saepe maxime est suscipit fugiat incidunt aspernatur odio tempore perspiciatis esse illo adipisci ea, ullam expedita.</p>

            <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self-Reflection and Goal Setting</h3>
            <p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore distinctio consectetur? Blanditiis culpa aut tenetur illo numquam minus cumque eligendi quidem earum. Atque saepe maxime est suscipit fugiat incidunt aspernatur odio tempore perspiciatis esse illo adipisci ea, ullam expedita.</p>
            <p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore distinctio consectetur? Blanditiis culpa aut tenetur illo numquam minus cumque eligendi quidem earum. Atque saepe maxime est suscipit fugiat incidunt aspernatur odio tempore perspiciatis esse illo adipisci ea, ullam expedita.</p>

            <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self-Reflection and Goal Setting</h3>
            <p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore distinctio consectetur? Blanditiis culpa aut tenetur illo numquam minus cumque eligendi quidem earum. Atque saepe maxime est suscipit fugiat incidunt aspernatur odio tempore perspiciatis esse illo adipisci ea, ullam expedita.</p>
            <p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore distinctio consectetur? Blanditiis culpa aut tenetur illo numquam minus cumque eligendi quidem earum. Atque saepe maxime est suscipit fugiat incidunt aspernatur odio tempore perspiciatis esse illo adipisci ea, ullam expedita.</p>

            <h3 className='my-5 text-[18px] font-semibold'>Conclusion:</h3>
            <p className='my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore distinctio consectetur.</p>

            <div className=' my-24 '>
                <p className='text-black font-semibold my-4'>Share this article on social media</p>
                <div className='flex'>
                    <Image src={assets.facebook_icon} alt='facebook' width={50} />
                    <Image src={assets.twitter_icon} alt='twitter' width={50} />
                    <Image src={assets.googleplus_icon} alt='gmail' width={50} />
                </div>
            </div>
        </div>
        <Footer />
        </> : <></>
    );
}

export default Page;
