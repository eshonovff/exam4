

const Contact = () => {
  return (
    <div className="p-[5%]">
          <div>
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fab97cbbd0f929380ecf8e97542ecb15c33f6fe6c4fd7917b4c2fdc3c432b703?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab97cbbd0f929380ecf8e97542ecb15c33f6fe6c4fd7917b4c2fdc3c432b703?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab97cbbd0f929380ecf8e97542ecb15c33f6fe6c4fd7917b4c2fdc3c432b703?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab97cbbd0f929380ecf8e97542ecb15c33f6fe6c4fd7917b4c2fdc3c432b703?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab97cbbd0f929380ecf8e97542ecb15c33f6fe6c4fd7917b4c2fdc3c432b703?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab97cbbd0f929380ecf8e97542ecb15c33f6fe6c4fd7917b4c2fdc3c432b703?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab97cbbd0f929380ecf8e97542ecb15c33f6fe6c4fd7917b4c2fdc3c432b703?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fab97cbbd0f929380ecf8e97542ecb15c33f6fe6c4fd7917b4c2fdc3c432b703?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain grow w-full aspect-[1.1] max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-10 py-10 mx-auto w-full text-base font-medium leading-relaxed bg-neutral-100 text-black text-opacity-40 max-md:px-5 max-md:max-w-full">
            <div className="self-start text-2xl font-bold leading-10 text-sky-800 max-md:max-w-full">
              Let’s talk about anything you need
            </div>
            <div className="flex flex-wrap gap-4 mt-6 max-md:max-w-full">
              <div className="grow px-5 py-3 bg-white w-fit">
                Your name/company name
              </div>
              <div className="grow px-5 py-3 whitespace-nowrap bg-white w-fit">
                Phone/E-mail
              </div>
            </div>
            <div className="px-5 pt-3 pb-28 mt-4 whitespace-nowrap bg-white max-md:pb-28 max-md:max-w-full">
              Message
            </div>
            <div className="gap-2.5 self-start px-10 pt-6 pb-6 mt-4 text-white whitespace-nowrap max-md:px-5">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
     
    <div data-aos="fade-up-left" className="flex flex-col mt-20   justify-center ">
      <div className="w-full text-2xl font-bold text-center leading-10 text-sky-800 max-md:max-w-full">
        Or contact us via e-mails or even mobile call or Whatsapp messages
      </div>
      <div data-aos="fade-up-left" className="flex flex-wrap gap-5 justify-between self-center mt-8 max-w-full text-base font-medium leading-relaxed text-white whitespace-nowrap w-[538px]">
        <div className="px-12 py-6 bg-[#056088] max-md:px-5">E-mails</div>
        <div data-aos="fade-up-left" className="px-9 py-6 bg-[#056088] max-md:px-5">Whatsapp</div>
        <div className="px-11 py-6  bg-[#056088] max-md:px-5">Message</div>
      </div>
    </div>
    </div>
  )
}

export default Contact
 

 