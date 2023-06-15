import React from "react";
import { Carousel } from "@material-tailwind/react";
import Slider from "../../components/slider/Slider";
import SwiperComponent from "../../components/slider/SwiperComponent";
import Head from "next/head";
const web3: React.FC = () => {
  const data = [
    "/web3/homepage.png",
    "/web3/listbot.png",
    "/web3/profilepage.png",
    "/web3/botpage.png",
  ];
  const slide_img = [
    "https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/solidity-icon.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xlv9NXBf9qW_6QqmIQA9CsDHkoKiL-wkO6RUf_f7nA&s",
    "https://mui.com/static/logo.png",
  ];
  return (
    <>
      <Head>
        <title>Doungchan Sroeun | Web3</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/profile.png" />
      </Head>
      <div className="flex flex-col m-8">
        <h1 className="text-3xl dark:text-teal-400 font-bold">Project</h1>
        <section className="flex flex-col w-full my-10 md:my-4">
          <div className="flex flex-col md:flex-row lg:flex-row gap-5">
            <div className="flex flex-col justify-center items-center md:w-full rounded-lg lg:w-1/2 overflow-hidden">
              <Slider data={data} />
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
              <h1 className="text-xl dark:text-teal-400 font-bold">
                Web 3.0 Trading Bot Market Place
              </h1>
              <line className="w-full h-1 bg-gray-500 my-4" />
              <p className="text-gray-500 text-sm">
                Web 3.0 trading bot marketplace’s objective is to build a
                marketplace for trading bot that takes similarity to Opensea - a
                marketplace platform for{" "}
                <span className="text-teal-500">NFT</span>. Therefore we divided
                into 3 main sub objectives which are smart contract, frontend
                and backend developments.
              </p>
            </div>
          </div>
        </section>
        <line className="w-full h-1 bg-gray-500 my-4" />
        <h1 className="text-xl dark:text-teal-400 font-bold">
          Technology Used
        </h1>

        <section className="w-full mt-4">
          <div className="flex justify-center items-center h-full">
            <SwiperComponent slide_img={slide_img} slidesPerView={4} />
          </div>
        </section>
      </div>
    </>
  );
};

export default web3;
