import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './home.css';
import AOS from "aos";
import "aos/dist/aos.css";

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect } from "react";

const Homeus = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="py-14 px-10 sm:px-2">
      <div className="flex gap-5 sm:flex-wrap sm:justify-center max-md:flex-col">
        <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="/src/assets/home.png"
            className="object-contain grow w-full aspect-[1.52] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start mt-1.5 w-full text-base font-bold text-sky-800 max-md:mt-10 max-md:max-w-full">
            <div className="text-2xl leading-10">{t("Home.secton1.h1")}</div>
            <div className="mt-3.5 leading-7 text-neutral-700 max-md:max-w-full">
              {t("Home.secton1.p")}
            </div>
            <div className="mt-3 font-medium leading-7 text-neutral-700">
              {t("Home.secton1.p1")}
            </div>
            <div className="flex gap-10 self-stretch mt-3.5 text-xl leading-9 max-md:max-w-full">
              <div className="grow shrink w-[94px]">50+ {t("Home.secton1.Clients")}</div>
              <div className="grow shrink w-[95px]">30+ {t("Home.secton1.House")}</div>
              <div className="grow shrink w-[94px]">20+ {t("Home.secton1.Building")}</div>
            </div>
            <div className="gap-2.5 self-stretch pt-6 pr-10 pb-6 pl-10 mt-7  font-medium leading-relaxed text-white max-md:px-5">
              <h1 className="  bg-[#09A7CA] px-6 py-3 rounded-lg w-fit h-fit"> {t("Home.secton1.See more")}</h1>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="flex flex-col items-center py-10">
        <div className="ml-5 text-2xl font-bold leading-10 text-sky-800">
         {t("Home.secton1.Our services")}
        </div>
        <div className="mt-4 ml-5 text-base leading-7 text-center text-neutral-700 w-[348px]">
         {t("Home.secton1.include")}
        </div>
        <div className="self-stretch mt-8 max-md:-mr-0.5 max-md:max-w-full">
          <div className="flex gap-5 flex-wrap max-md:flex-col">
            <div className="flex flex-col w-[23%] sm:w-[45%] md:w-[95%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow items-start px-10 pt-5 pb-11 text-white aspect-[1.292] max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c080108124626a53e465cc037daf48ec247aea82b090e4f27e00c25283a6d28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c080108124626a53e465cc037daf48ec247aea82b090e4f27e00c25283a6d28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c080108124626a53e465cc037daf48ec247aea82b090e4f27e00c25283a6d28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c080108124626a53e465cc037daf48ec247aea82b090e4f27e00c25283a6d28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c080108124626a53e465cc037daf48ec247aea82b090e4f27e00c25283a6d28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c080108124626a53e465cc037daf48ec247aea82b090e4f27e00c25283a6d28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c080108124626a53e465cc037daf48ec247aea82b090e4f27e00c25283a6d28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c080108124626a53e465cc037daf48ec247aea82b090e4f27e00c25283a6d28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebbddf4e1c2fc1d5a24b22ac54392bd626fd3d9987c8949a253a96138fc9fca4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain w-14 aspect-square"
                />
                <div className="relative self-stretch mt-4 text-xl font-bold leading-9">
                  Design building/house
                </div>
                <div className="relative mt-4 text-base leading-7">
                  We have an architect for design new buildings
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] sm:w-[45%] md:w-[95%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto text-neutral-700 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/573ecf18f636cb53dec0bb3f4b92fac3c97bc3c49c030f3f702bfdf393d024bc?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain w-14 aspect-square"
                />
                <div className="mt-4 text-xl font-bold leading-9">
                  {t("Home.secton1.Design")}
                </div>
                <div className="self-stretch mt-4 text-base leading-7">
                  {t("Home.secton1.include")}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] sm:w-[40%] md:w-[95%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto text-neutral-700 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e28a59f963f3327bdd74d892b6121ea71eb7084f26357ec9885ad9422f083042?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain w-14 aspect-square"
                />
                <div className="mt-4 text-xl font-bold leading-9">
                 {t("Home.secton1.Build")}
                </div>
                <div className="self-stretch mt-4 text-base leading-7">
                  {t("Home.secton1.contractor")}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] sm:w-[45%] md:w-[95%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start mt-4 text-neutral-700 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a9f50ebbfb8283bd456c08044bfb5a9267fad1d7fdeb4f9420cb6d44d3a77c6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain w-14 aspect-square"
                />
                <div className="mt-4 text-xl font-bold leading-9">
                 {t("Home.section1.Renovation")}
                </div>
                <div className="self-stretch mt-4 text-base leading-7">
                 {t("Home.section1.renovate")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold leading-10 text-sky-800">
          Our benefits
        </div>
        <div className="mt-4 text-base leading-7 text-center text-neutral-700 w-[348px]">
          Here our benefits if you collaboration with our team
        </div>
        <div className="flex flex-wrap justify-center gap-10 ">
          <div className="flex flex-col text-white max-w-[400px]">
            <div className="flex relative flex-col justify-center items-center px-20 py-12 w-full min-h-[313px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col items-center max-w-full w-[199px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba0ca7f9bbcf393af7b6bd122a51cc2c85ac8a63523d1fe8e308be5c9cdb4e1?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain w-14 aspect-square"
                />
                <div className="mt-8 text-xl font-bold leading-9">
                  Flexible time
                </div>
                <div className="self-stretch mt-4 text-base leading-7 text-center">
                  We work wherever you ready to builds. Work fast and
                  profesional
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white max-w-[400px]">
            <div className="flex relative flex-col justify-center items-center px-20 py-12 w-full min-h-[313px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col items-center max-w-full w-[199px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba0ca7f9bbcf393af7b6bd122a51cc2c85ac8a63523d1fe8e308be5c9cdb4e1?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain w-14 aspect-square"
                />
                <div className="mt-8 text-xl font-bold leading-9">
                  Flexible time
                </div>
                <div className="self-stretch mt-4 text-base leading-7 text-center">
                  We work wherever you ready to builds. Work fast and
                  profesional
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white max-w-[400px]">
            <div className="flex relative flex-col justify-center items-center px-20 py-12 w-full min-h-[313px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ed15bdf9012499d1ba0ed636b8f16489189d4d3f70f828cc3c7c8a24744e50c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col items-center max-w-full w-[199px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba0ca7f9bbcf393af7b6bd122a51cc2c85ac8a63523d1fe8e308be5c9cdb4e1?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain w-14 aspect-square"
                />
                <div className="mt-8 text-xl font-bold leading-9">
                  Flexible time
                </div>
                <div className="self-stretch mt-4 text-base leading-7 text-center">
                  We work wherever you ready to builds. Work fast and
                  profesional
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative flex-col px-16 pt-40 min-h-[1414px] max-md:px-5 max-md:pt-24">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9f95d0d823a965fb3ef723e0fb83e6457b85f84bb9a9edd95ea2de9d39fb28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9f95d0d823a965fb3ef723e0fb83e6457b85f84bb9a9edd95ea2de9d39fb28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9f95d0d823a965fb3ef723e0fb83e6457b85f84bb9a9edd95ea2de9d39fb28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9f95d0d823a965fb3ef723e0fb83e6457b85f84bb9a9edd95ea2de9d39fb28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9f95d0d823a965fb3ef723e0fb83e6457b85f84bb9a9edd95ea2de9d39fb28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9f95d0d823a965fb3ef723e0fb83e6457b85f84bb9a9edd95ea2de9d39fb28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9f95d0d823a965fb3ef723e0fb83e6457b85f84bb9a9edd95ea2de9d39fb28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7c9f95d0d823a965fb3ef723e0fb83e6457b85f84bb9a9edd95ea2de9d39fb28?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col w-full max-md:mt-5 max-md:max-w-full">
                <div className="flex flex-col self-end mr-11 max-w-full text-white w-[334px] max-md:mr-2.5">
                  <div className="self-center text-2xl font-bold leading-10">
                    Our works
                  </div>
                  <div className="mt-4 text-base leading-7 text-center">
                    Here our some of the best the result when we build some
                    buildings, houses, and also interior designs
                  </div>
                </div>
                <div className="mt-8 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fc1727fa4ab4e15970f1695bdb3c7b749e6092f60b1c6bf9b5c1b5de6a90aaaa?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc1727fa4ab4e15970f1695bdb3c7b749e6092f60b1c6bf9b5c1b5de6a90aaaa?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc1727fa4ab4e15970f1695bdb3c7b749e6092f60b1c6bf9b5c1b5de6a90aaaa?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc1727fa4ab4e15970f1695bdb3c7b749e6092f60b1c6bf9b5c1b5de6a90aaaa?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc1727fa4ab4e15970f1695bdb3c7b749e6092f60b1c6bf9b5c1b5de6a90aaaa?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc1727fa4ab4e15970f1695bdb3c7b749e6092f60b1c6bf9b5c1b5de6a90aaaa?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc1727fa4ab4e15970f1695bdb3c7b749e6092f60b1c6bf9b5c1b5de6a90aaaa?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc1727fa4ab4e15970f1695bdb3c7b749e6092f60b1c6bf9b5c1b5de6a90aaaa?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                          className="object-contain aspect-[1.12] w-[200px]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c341451defa8af8506128fada43824aa2d656a043f537422b59b58888d183258?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c341451defa8af8506128fada43824aa2d656a043f537422b59b58888d183258?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c341451defa8af8506128fada43824aa2d656a043f537422b59b58888d183258?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c341451defa8af8506128fada43824aa2d656a043f537422b59b58888d183258?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c341451defa8af8506128fada43824aa2d656a043f537422b59b58888d183258?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c341451defa8af8506128fada43824aa2d656a043f537422b59b58888d183258?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c341451defa8af8506128fada43824aa2d656a043f537422b59b58888d183258?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c341451defa8af8506128fada43824aa2d656a043f537422b59b58888d183258?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                          className="object-contain mt-5 aspect-[0.76] w-[200px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3df7a42403c75c7df1ded6fa5e7c44f4543f3718edcb81b813997e1e154579d3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df7a42403c75c7df1ded6fa5e7c44f4543f3718edcb81b813997e1e154579d3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df7a42403c75c7df1ded6fa5e7c44f4543f3718edcb81b813997e1e154579d3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df7a42403c75c7df1ded6fa5e7c44f4543f3718edcb81b813997e1e154579d3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df7a42403c75c7df1ded6fa5e7c44f4543f3718edcb81b813997e1e154579d3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df7a42403c75c7df1ded6fa5e7c44f4543f3718edcb81b813997e1e154579d3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df7a42403c75c7df1ded6fa5e7c44f4543f3718edcb81b813997e1e154579d3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3df7a42403c75c7df1ded6fa5e7c44f4543f3718edcb81b813997e1e154579d3?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                        className="object-contain grow shrink-0 max-w-full aspect-[0.43] w-[200px] max-md:mt-5"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[51%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d660bfdedeaf6606cab7cf70037a0db5e214950245d2eecde938f8741db84179?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d660bfdedeaf6606cab7cf70037a0db5e214950245d2eecde938f8741db84179?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d660bfdedeaf6606cab7cf70037a0db5e214950245d2eecde938f8741db84179?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d660bfdedeaf6606cab7cf70037a0db5e214950245d2eecde938f8741db84179?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d660bfdedeaf6606cab7cf70037a0db5e214950245d2eecde938f8741db84179?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d660bfdedeaf6606cab7cf70037a0db5e214950245d2eecde938f8741db84179?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d660bfdedeaf6606cab7cf70037a0db5e214950245d2eecde938f8741db84179?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d660bfdedeaf6606cab7cf70037a0db5e214950245d2eecde938f8741db84179?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                          className="object-contain w-full aspect-[1.52]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/34ad541e930f536fe3f05fd6eced51e2bf1a90b55db7ad5eb0eafa3fbbed3865?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34ad541e930f536fe3f05fd6eced51e2bf1a90b55db7ad5eb0eafa3fbbed3865?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34ad541e930f536fe3f05fd6eced51e2bf1a90b55db7ad5eb0eafa3fbbed3865?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34ad541e930f536fe3f05fd6eced51e2bf1a90b55db7ad5eb0eafa3fbbed3865?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34ad541e930f536fe3f05fd6eced51e2bf1a90b55db7ad5eb0eafa3fbbed3865?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34ad541e930f536fe3f05fd6eced51e2bf1a90b55db7ad5eb0eafa3fbbed3865?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34ad541e930f536fe3f05fd6eced51e2bf1a90b55db7ad5eb0eafa3fbbed3865?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34ad541e930f536fe3f05fd6eced51e2bf1a90b55db7ad5eb0eafa3fbbed3865?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                          className="object-contain mt-5 w-full aspect-[2.58]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col mt-44 w-full max-md:mt-10">
                <div>
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7b9c8f1f0c14129fe19462a4b7c52ccf68a81aa60a8f3c92871f3017d2c6677d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b9c8f1f0c14129fe19462a4b7c52ccf68a81aa60a8f3c92871f3017d2c6677d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b9c8f1f0c14129fe19462a4b7c52ccf68a81aa60a8f3c92871f3017d2c6677d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b9c8f1f0c14129fe19462a4b7c52ccf68a81aa60a8f3c92871f3017d2c6677d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b9c8f1f0c14129fe19462a4b7c52ccf68a81aa60a8f3c92871f3017d2c6677d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b9c8f1f0c14129fe19462a4b7c52ccf68a81aa60a8f3c92871f3017d2c6677d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b9c8f1f0c14129fe19462a4b7c52ccf68a81aa60a8f3c92871f3017d2c6677d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7b9c8f1f0c14129fe19462a4b7c52ccf68a81aa60a8f3c92871f3017d2c6677d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                        className="object-contain grow shrink-0 max-w-full aspect-[0.78] w-[200px] max-md:mt-5"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/01518d8b9c7a18ebe0ee82dfc3f61242a3ae4b6d0f0510f29773a2f85d2d6341?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/01518d8b9c7a18ebe0ee82dfc3f61242a3ae4b6d0f0510f29773a2f85d2d6341?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01518d8b9c7a18ebe0ee82dfc3f61242a3ae4b6d0f0510f29773a2f85d2d6341?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/01518d8b9c7a18ebe0ee82dfc3f61242a3ae4b6d0f0510f29773a2f85d2d6341?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/01518d8b9c7a18ebe0ee82dfc3f61242a3ae4b6d0f0510f29773a2f85d2d6341?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01518d8b9c7a18ebe0ee82dfc3f61242a3ae4b6d0f0510f29773a2f85d2d6341?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/01518d8b9c7a18ebe0ee82dfc3f61242a3ae4b6d0f0510f29773a2f85d2d6341?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/01518d8b9c7a18ebe0ee82dfc3f61242a3ae4b6d0f0510f29773a2f85d2d6341?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                          className="object-contain aspect-[1.69] w-[200px]"
                        />
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/18f9f86d9e5fa2ec389278bec6f28b7070dcc133955c461020c1ece0da96d893?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f9f86d9e5fa2ec389278bec6f28b7070dcc133955c461020c1ece0da96d893?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f9f86d9e5fa2ec389278bec6f28b7070dcc133955c461020c1ece0da96d893?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f9f86d9e5fa2ec389278bec6f28b7070dcc133955c461020c1ece0da96d893?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f9f86d9e5fa2ec389278bec6f28b7070dcc133955c461020c1ece0da96d893?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f9f86d9e5fa2ec389278bec6f28b7070dcc133955c461020c1ece0da96d893?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f9f86d9e5fa2ec389278bec6f28b7070dcc133955c461020c1ece0da96d893?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/18f9f86d9e5fa2ec389278bec6f28b7070dcc133955c461020c1ece0da96d893?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                          className="object-contain mt-5 aspect-[1.69] w-[200px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/63fc7afc9cb07acdcd38ba4f7b0bc83aae8f208104c85141fd221e15e6bcfe82?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/63fc7afc9cb07acdcd38ba4f7b0bc83aae8f208104c85141fd221e15e6bcfe82?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63fc7afc9cb07acdcd38ba4f7b0bc83aae8f208104c85141fd221e15e6bcfe82?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/63fc7afc9cb07acdcd38ba4f7b0bc83aae8f208104c85141fd221e15e6bcfe82?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/63fc7afc9cb07acdcd38ba4f7b0bc83aae8f208104c85141fd221e15e6bcfe82?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63fc7afc9cb07acdcd38ba4f7b0bc83aae8f208104c85141fd221e15e6bcfe82?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/63fc7afc9cb07acdcd38ba4f7b0bc83aae8f208104c85141fd221e15e6bcfe82?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/63fc7afc9cb07acdcd38ba4f7b0bc83aae8f208104c85141fd221e15e6bcfe82?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain mt-5 w-full aspect-[2.28]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative flex-wrap gap-10 self-end mt-8 max-w-full text-base font-medium leading-relaxed text-white w-[912px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dff85f739131ada3beddb03842833da6b9d91beef34ec0a42da9615dd42c1c0?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain grow shrink-0 my-auto aspect-[333.33] basis-0 w-fit max-md:max-w-full"
          />
          <div className="gap-2.5 self-stretch pt-6 pr-10 pb-6 pl-10 max-md:px-5">
            See more
          </div>
        </div>
        <div className="relative z-10 pb-14 mt-24 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col items-start px-8 py-12 mx-auto w-full text-base bg-white max-md:px-5">
                <div className="self-stretch text-2xl font-bold leading-10 text-sky-800">
                  What our clients say?
                </div>
                <div className="mt-4 leading-7 text-neutral-700">
                  See what our clients say about their new home
                </div>
                <div className="gap-2.5 self-stretch pt-6 pr-10 pb-6 pl-10 mt-8 font-medium leading-relaxed text-white max-md:px-5">
                  See more
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col px-6 pb-6 mx-auto mt-6 w-full bg-[#056088] max-md:max-w-full">
                <div className="z-10 pt-44 -mt-6 -mr-6 max-md:pt-24 max-md:pl-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                        className="object-contain shrink-0 max-w-full rounded-full aspect-square w-[102px] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col pt-14 pr-6 pb-7 pl-12 mt-9 text-base text-white max-md:px-5 max-md:mt-10">
                        <div className="leading-7">
                          I really happy to see the result my new home. It’s
                          really good house and good price too. And they work so
                          fast becasue they have the best team. Once again,
                          thankyou. I really appreciate it.
                        </div>
                        <div className="self-start mt-4 font-semibold leading-relaxed">
                          - Mr. Roberto
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="py-16 ">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="text-[20px] font-[800] text-blue-500">Our Partners</SwiperSlide>
            <SwiperSlide>J.construct</SwiperSlide>
            <SwiperSlide>Arch</SwiperSlide>
            <SwiperSlide>Whix.co</SwiperSlide>
            <SwiperSlide>DZIKRA</SwiperSlide>
            <SwiperSlide>Our Partners</SwiperSlide>
            <SwiperSlide>J.construct</SwiperSlide>
            <SwiperSlide>Arch</SwiperSlide>
            <SwiperSlide>Whix.co</SwiperSlide>
            <SwiperSlide>DZIKRA</SwiperSlide>
          </Swiper>
        </>
      </div>
      <div className="flex flex-col pb-5 text-base leading-7 text-white">
      <div className="flex relative flex-col items-end px-20 pt-96 w-full min-h-[512px] max-md:pt-24 max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/499cb4ccdea08014bb57c86ef9bc3a4d97fbd68d3ac294325ffd63efc385473e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/499cb4ccdea08014bb57c86ef9bc3a4d97fbd68d3ac294325ffd63efc385473e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/499cb4ccdea08014bb57c86ef9bc3a4d97fbd68d3ac294325ffd63efc385473e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/499cb4ccdea08014bb57c86ef9bc3a4d97fbd68d3ac294325ffd63efc385473e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/499cb4ccdea08014bb57c86ef9bc3a4d97fbd68d3ac294325ffd63efc385473e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/499cb4ccdea08014bb57c86ef9bc3a4d97fbd68d3ac294325ffd63efc385473e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/499cb4ccdea08014bb57c86ef9bc3a4d97fbd68d3ac294325ffd63efc385473e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/499cb4ccdea08014bb57c86ef9bc3a4d97fbd68d3ac294325ffd63efc385473e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative z-10 px-16 py-9 mb-0 max-w-full bg-[#023957] w-[416px] max-md:px-5 max-md:mb-2.5">
          This is the timelapse video that shows how our teams work
        </div>
      </div>
    </div>

    <div data-aos="fade-up" className="flex flex-col py-10 text-base font-medium">
      <div className="flex relative flex-col justify-center items-center px-20 py-14 w-full min-h-[428px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/28893c96a0ee1ddac8ef426e166b49db9b9bcb3a219bbeeb737fc0f610e02245?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28893c96a0ee1ddac8ef426e166b49db9b9bcb3a219bbeeb737fc0f610e02245?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28893c96a0ee1ddac8ef426e166b49db9b9bcb3a219bbeeb737fc0f610e02245?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28893c96a0ee1ddac8ef426e166b49db9b9bcb3a219bbeeb737fc0f610e02245?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28893c96a0ee1ddac8ef426e166b49db9b9bcb3a219bbeeb737fc0f610e02245?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28893c96a0ee1ddac8ef426e166b49db9b9bcb3a219bbeeb737fc0f610e02245?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28893c96a0ee1ddac8ef426e166b49db9b9bcb3a219bbeeb737fc0f610e02245?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28893c96a0ee1ddac8ef426e166b49db9b9bcb3a219bbeeb737fc0f610e02245?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center max-w-full w-[640px]">
          <div className="text-5xl font-bold text-center text-white max-md:max-w-full max-md:text-4xl">
            Want to get our offer updates and news?
          </div>
          <div className="mt-9 leading-7 text-center text-white w-[517px] max-md:max-w-full">
            Submit your e-mail and we will give you update about information and
            discount. Every single week. (not spamming)
          </div>
          <div className="flex flex-wrap gap-5 justify-between self-stretch pl-8 mt-8 w-full leading-relaxed bg-white max-md:pl-5 max-md:max-w-full">
            <div className="my-auto text-center text-black text-opacity-40">
              Enter your e-mail here
            </div>
            <div className="gap-2.5 self-stretch px-10 pt-4 pb-5 text-white whitespace-nowrap max-md:px-5">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Homeus;
 


 

 