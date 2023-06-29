import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";
import SwiperComponent from "../../components/slider/SwiperComponent";
import Head from "next/head";
const Vconnect: React.FC = () => {
  const data = [
    "/vconnect/profilescreen.png",
    "/vconnect/formscreen1.png",
    "/vconnect/formscreen.png",
    "/vconnect/qrscreen.png",
  ];
  const slide_img = [
    "https://logowik.com/content/uploads/images/flutter7884.jpg",
    "https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/egoditor/logo-icon-white.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Dart_logo.png/900px-Dart_logo.png?20220718193800",
  ];
  return (
    <>
      <Head>
        <title>Doungchan Sroeun | Vconnect</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/profile.jpg" />
      </Head>
      <div className="flex flex-col m-8">
        <section className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center items-center gap-x-16">
            <div className="flex flex-col justify-center items-center rounded-lg  w-[200px] h-[400px]">
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                stopOnHover={false}
                showThumbs={false}
              >
                {data.map((item: string, index: number) => (
                  <div
                    key={index}
                    className="justify-center items-center rounded-md overflow-hidden"
                  >
                    <Image
                      src={item}
                      alt={`image ${index + 1}`}
                      className="w-60 h-60 object-cover rounded-3xl "
                      width={420}
                      height={850}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
              <h1 className="text-xl dark:text-teal-400 font-bold">
                VConncect
              </h1>
              <line className="w-full h-1 bg-gray-500 my-4" />
              <p className="text-gray-500 text-sm">
                The purpose of this app is to help people more easier in
                communication. It will allows user to create their QR Code that
                contain name, phone number, and other socail media name. Then
                when someone else scanning that QR Code it will auto saving
                those informations in their mobile phone. So they can easily
                contact each other.
              </p>
            </div>
          </div>
        </section>
        <line className="w-full h-1 bg-gray-500 my-4" />
        <h1 className="text-xl dark:text-teal-400 font-bold">
          Technology Used
        </h1>

        <section className="w-full mt-10">
          <div className="flex justify-center items-center h-full">
            <SwiperComponent slide_img={slide_img} slidesPerView={3} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Vconnect;
