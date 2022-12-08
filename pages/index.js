import Head from "next/head";
import Image from "next/image";
import styles from "../assets/styles/Home.module.css";
import Link from 'next/link';
import { useState } from 'react';
//import "../assets/styles/customs.css"
//import { Layout,Breadcrumb,Row,Col } from 'antd';
//import { ConfigProvider } from "antd";
import HeaderTop from "../components/layout/Header";
import SideNav from "../components/layout/Sidenav";
import Main from "../components/layout/Main";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      {/* <ConfigProvider direction="rtl">
<Layout className={styles.container} >
<Header>
<HeaderTop />
</Header>
    
      <Layout>
      <Row gutter={[24, 0]}>
        <Col span={8}>
        <Sider>
          <SideNav>

          </SideNav>
        </Sider>
          </Col>
          <Col span={16}>
          <Content>
          <Main></Main>
        </Content>
          </Col>
       
       </Row>
      </Layout>
      
      <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">hghfgfgfg</p>
            <p className="text-sm text-gray-500">gfgfhghy</p>
          </div>

    </Layout>
</ConfigProvider> */}

      {/* <div className="flex flex-wrap items-center justify-between w-full p-4 text-white bg-gray-800" x-data="{dropdown: false}">
     
        <a className="text-xl" href="#">
          {" "}
          Logo
        </a>

      
        <button className="p-2 border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>

        <ul className="list-none flex-col w-full gap-4 text-lg font-medium bg-gray-500" x-show = "dropdown">
          <li>first</li>
          <li>second</li>
          <li>third</li>
          <li>fourth</li>
        </ul>
      </div> */}

<div>
      <Head>
        <title>Create Next Responsive Navbar With Tailwind CSS</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
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
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
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
        </div>
      </nav>
      <div className="flex justify-center items-center mt-8">
        <h1 className="text-2xl font-bold text-purple-500">
          Create Responsive Navbar Menu in Next js with Tailwind CSS
        </h1>
      </div>
    </div>
    </>
  );
}
