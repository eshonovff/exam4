import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex gap-5 flex-wrap py-16 max-md:flex-col">
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
      <div className="flex flex-col py-20">
        <div className="px-6 w-full bg-[url(/src/assets/BG.png)] bg-cover bg-center bg-no-repeat max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col  w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex relative  flex-col grow items-start min-h-[428px] max-md:mt-7 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/371753ceeff83217fe5cd1e5ee7437f560280447a033bf7f6dbc0c00b961b1b9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/371753ceeff83217fe5cd1e5ee7437f560280447a033bf7f6dbc0c00b961b1b9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/371753ceeff83217fe5cd1e5ee7437f560280447a033bf7f6dbc0c00b961b1b9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/371753ceeff83217fe5cd1e5ee7437f560280447a033bf7f6dbc0c00b961b1b9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/371753ceeff83217fe5cd1e5ee7437f560280447a033bf7f6dbc0c00b961b1b9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/371753ceeff83217fe5cd1e5ee7437f560280447a033bf7f6dbc0c00b961b1b9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/371753ceeff83217fe5cd1e5ee7437f560280447a033bf7f6dbc0c00b961b1b9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/371753ceeff83217fe5cd1e5ee7437f560280447a033bf7f6dbc0c00b961b1b9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain w-full aspect-[1.49] max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-2xl font-bold leading-10">
                  Design building / house
                </div>
                <div className="mt-4 text-base leading-7 max-md:max-w-full">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex bg-[url(/src/assets/BG.png)] bg-cover bg-center bg-no-repeat my-20 gap-5 max-md:flex-col">
        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col self-stretch px-16 py-20 my-auto mr-0 text-base leading-7 text-white min-h-[328px] w-[517px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9816b42621ae4167e747c2cb948f453009430499ab7c7941fe764a8fa1fe4e02?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9816b42621ae4167e747c2cb948f453009430499ab7c7941fe764a8fa1fe4e02?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9816b42621ae4167e747c2cb948f453009430499ab7c7941fe764a8fa1fe4e02?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9816b42621ae4167e747c2cb948f453009430499ab7c7941fe764a8fa1fe4e02?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9816b42621ae4167e747c2cb948f453009430499ab7c7941fe764a8fa1fe4e02?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9816b42621ae4167e747c2cb948f453009430499ab7c7941fe764a8fa1fe4e02?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9816b42621ae4167e747c2cb948f453009430499ab7c7941fe764a8fa1fe4e02?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9816b42621ae4167e747c2cb948f453009430499ab7c7941fe764a8fa1fe4e02?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain grow w-full aspect-[1.54] max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
