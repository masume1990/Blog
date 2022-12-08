import Head from "next/head";
import Image from "next/image";
import styles from "../assets/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
//import "../assets/styles/customs.css"
//import { Layout,Breadcrumb,Row,Col } from 'antd';
//import { ConfigProvider } from "antd";
import HeaderTop from "../components/layout/Header";
import SideNav from "../components/layout/Sidenav";
import Main from "../components/layout/Main";
import blogImg from "../assets/images/work_tech.png";
export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="container h-full">
        <Head>
          <title>Create Next Responsive Navbar With Tailwind CSS</title>
          <meta
            name="description"
            content="Create Next JS Responsive Menu with Tailwind CSS"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className="w-full bg-gray-800 shadow">
          <div className=" px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8  md:justify-between">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="#">
                  <h2 className="text-2xl text-white font-bold">NEXT JS</h2>
                </a>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3  mt-8  md:pr-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-white">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link href="/blogs">
                      <a>Blogs</a>
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link href="/about">
                      <a>About US</a>
                    </Link>
                  </li>
                  <li className="text-white">
                    <Link href="/contact">
                      <a>Contact US</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex items-end  py-3">
                <a href="#" onClick={() => setShowModal(true)}>
                  <h2 className="text-2xl text-white font-bold">ورود</h2>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex   flex-col justify-center items-center mt-8">
          <h1 className="text-2xl font-bold text-purple-500">وبلاگ</h1>
          <form className="flex items-center">
            <label for="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="جستجو کنید..."
                required
              />
            </div>
          </form>
        </div>
        <div className="grid grid-cols-12 gap-1 ">
          <div className="col-span-12 sm:col-span-4  bg-red-400">
            {/* checkbox */}
            <div className="max-w-sm w-full lg:max-w-full ">
              <div className="  bg-white rounded shadow dark:bg-gray-700">
                <h2 className="px-3">دسته بندی</h2>
                <ul className="overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <label
                        for="checkbox-item-11"
                        className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        کامپیوتر
                      </label>
                      <input
                        id="checkbox-item-11"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <label
                        for="checkbox-item-11"
                        className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        کامپیوتر
                      </label>
                      <input
                        id="checkbox-item-11"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <label
                        for="checkbox-item-11"
                        className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        کامپیوتر
                      </label>
                      <input
                        id="checkbox-item-11"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <label
                        for="checkbox-item-11"
                        className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        کامپیوتر
                      </label>
                      <input
                        id="checkbox-item-11"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-8  bg-gray-500">
            {/* card */}

            <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-sm p-2">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage: `url('https://v1.tailwindcss.com/img/card-left.jpg')`,
                }}
                title="Woman holding a mug"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p className="text-gray-700 text-base line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.fdfsfsfsfsfsfsfssfffs
                    fsfsfsfsffereretf ggdgrge em ipsum dolor sit amet,
                    consectetur adipisici em ipsum dolor sit amet, consectetur
                    adipisici em ipsum dolor sit amet, consectetur adipisici em
                    ipsum dolor sit amet, consectetur adipisici
                  </p>
                </div>
                <div className="flex items-center text-sm justify-between flex-wrap">
                  <div>
                    <p className="text-gray-900  flex items-center">
                      Jonathan Reinink
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                    </p>
                    {/* <p className="text-gray-600">Aug 18</p> */}
                  </div>
                  <div>
                    <p className="text-gray-900 leading-none flex items-center">
                      10 نظر
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 leading-none flex items-center">
                      علی نسیمی
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                    </p>
                  </div>
                  <div>
                    <a href="#" className="bg-green-500 rounded-md px-4 py-2">
                      نمایش بیشتر
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-sm p-2">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage: `url('https://v1.tailwindcss.com/img/card-left.jpg')`,
                }}
                title="Woman holding a mug"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p className="text-gray-700 text-base line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.fdfsfsfsfsfsfsfssfffs
                    fsfsfsfsffereretf ggdgrge em ipsum dolor sit amet,
                    consectetur adipisici em ipsum dolor sit amet, consectetur
                    adipisici em ipsum dolor sit amet, consectetur adipisici em
                    ipsum dolor sit amet, consectetur adipisici
                  </p>
                </div>
                <div className="flex items-center text-sm justify-between flex-wrap">
                  <div>
                    <p className="text-gray-900 leading-none flex items-center">
                      Jonathan Reinink
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                    </p>
                    {/* <p className="text-gray-600">Aug 18</p> */}
                  </div>
                  <div>
                    <p className="text-gray-900 leading-none flex items-center">
                      10 نظر
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 leading-none flex items-center">
                      علی نسیمی
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                    </p>
                  </div>
                  <div>
                    <a href="#" className="bg-green-500 rounded-md px-4 py-2">
                      نمایش بیشتر
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-sm p-2">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{
                  backgroundImage: `url('https://v1.tailwindcss.com/img/card-left.jpg')`,
                }}
                title="Woman holding a mug"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                  <p className="text-gray-700 text-base line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.fdfsfsfsfsfsfsfssfffs
                    fsfsfsfsffereretf ggdgrge em ipsum dolor sit amet,
                    consectetur adipisici em ipsum dolor sit amet, consectetur
                    adipisici em ipsum dolor sit amet, consectetur adipisici em
                    ipsum dolor sit amet, consectetur adipisici
                  </p>
                </div>
                <div className="flex items-center text-sm justify-between">
                  <div>
                    <p className="text-gray-900 leading-none flex items-center">
                      Jonathan Reinink
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                    </p>
                    {/* <p className="text-gray-600">Aug 18</p> */}
                  </div>
                  <div>
                    <p className="text-gray-900 leading-none flex items-center">
                      10 نظر
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 leading-none flex items-center">
                      علی نسیمی
                      <svg
                        className="fill-current text-gray-500 w-3 h-3 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                    </p>
                  </div>
                  <div>
                    <a href="#" className="bg-green-500 rounded-md px-4 py-2">
                      نمایش بیشتر
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex   flex-col justify-center items-center mt-8">
                    <h1 className="text-2xl font-bold text-black">
                      ورود به حساب کاربری
                    </h1>
                    <form className="flex  flex-col items-start">
                     
                        <label
                          for="input-group-1"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          نام کاربری
                        </label>
                     

                      <div className="relative mb-6">
                        <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="input-group-1"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@flowbite.com"
                        />
                      </div>


                      <label
                          for="input-group-1"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          رمز 
                        </label>
                     

                      <div className="relative mb-6">
                        <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="input-group-1"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@flowbite.com"
                        />
                        
                      </div>
                      <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                    </form>
                  </div>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
