
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './srory.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Story = () => {
  return (
    <div>
       <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper my-28"
      >
        <SwiperSlide>
          
    <div className="flex flex-col text-base h-[100] text-white max-w-[416px]">
      <div className="flex relative flex-col items-start pt-5 pr-14 pb-11 pl-6 w-full aspect-[1.115]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain max-w-full rounded-full aspect-square w-[102px]"
        />
        <div className="relative">
          I really happy to see the result my new home. It’s really good house
          and good price too. And they work so fast becasue they have the best
          team. Once again, thankyou. I really appreciate it.
        </div>
        <div className="relative mt-4 font-semibold leading-relaxed">
          - Mr. James
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-start text-base max-w-[300px] text-neutral-700">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
        className="object-contain  rounded-full aspect-square w-20"
      />
      <div className="mt-8 leading-7">
        I really happy to see the result my new home. It’s really good house and
        good price too. And they work so fast becasue they have the best team.
        Once again, thankyou. I really appreciate it.
      </div>
      <div className="mt-4 font-semibold leading-relaxed">- Mr. Ahmed</div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-start text-base max-w-[300px] text-neutral-700">
      <img
        loading="lazy"
        srcSet="https://s3-alpha-sig.figma.com/img/e2f2/f600/e4961581e6604c94b763e63353f1a0cf?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZ2hAE8DqRQ66fh34TGnTa3Krgd~zyZ77pH8N-UfbtQDOjZVt6TahJNQAxXJyjVCw7BYNnIN3c9XfSTFl7h2qIZQvBm7KOQ0ax4vUZu-yMTN7YoJ~SWxDo2dW32mIu8LohdRxSRLtjV2PZlyeBKwC4dkRgQwlLuvn8L9poVfblUYqzU5htWiqzqRhcdVlmfO9uPDEklpRjJZex0xYwuhHbEkGl7PcKaRxm-V6OlUrzSe8nmvROT9oPO0sEedRsep9wsEmGvk0-UnUKdprgL6N2CJ~ZbwNNFR7pb2iBYWg2H42Jwnffk8tKKalEiPF-TAnT6g78JUay6yrhNmIJbaoA__"
        className="object-contain  rounded-full aspect-square w-20"
      />
      <div className="mt-8 leading-7">
        I really happy to see the result my new home. It’s really good house and
        good price too. And they work so fast becasue they have the best team.
        Once again, thankyou. I really appreciate it.
      </div>
      <div className="mt-4 font-semibold leading-relaxed">- Mr. Ahmed</div>
    </div>
        </SwiperSlide>
        <SwiperSlide>    <div className="flex flex-col text-base h-[100] text-white max-w-[416px]">
      <div className="flex relative flex-col items-start pt-5 pr-14 pb-11 pl-6 w-full aspect-[1.115]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e8e636e7ff24c93e610713836fe765e61504a1598aa0188ba7a6c4f682ed0a6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9462819bfac9034cb1e45fef2cff33965ee9e88dd027cf752494164e7623f852?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain max-w-full rounded-full aspect-square w-[102px]"
        />
        <div className="relative">
          I really happy to see the result my new home. It’s really good house
          and good price too. And they work so fast becasue they have the best
          team. Once again, thankyou. I really appreciate it.
        </div>
        <div className="relative mt-4 font-semibold leading-relaxed">
          - Mr. James
        </div>
      </div>
    </div></SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-start text-base max-w-[300px] text-neutral-700">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/08adf5e126aae4e399a66ef7fdce12f99618753c03170f8a51fdfd7aa7ac3d5a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
        className="object-contain  rounded-full aspect-square w-20"
      />
      <div className="mt-8 leading-7">
        I really happy to see the result my new home. It’s really good house and
        good price too. And they work so fast becasue they have the best team.
        Once again, thankyou. I really appreciate it.
      </div>
      <div className="mt-4 font-semibold leading-relaxed">- Mr. Ahmed</div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
         
        <div className="flex flex-col items-start text-base max-w-[300px] text-neutral-700">
      <img
        loading="lazy"
        srcSet="https://s3-alpha-sig.figma.com/img/e2f2/f600/e4961581e6604c94b763e63353f1a0cf?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZ2hAE8DqRQ66fh34TGnTa3Krgd~zyZ77pH8N-UfbtQDOjZVt6TahJNQAxXJyjVCw7BYNnIN3c9XfSTFl7h2qIZQvBm7KOQ0ax4vUZu-yMTN7YoJ~SWxDo2dW32mIu8LohdRxSRLtjV2PZlyeBKwC4dkRgQwlLuvn8L9poVfblUYqzU5htWiqzqRhcdVlmfO9uPDEklpRjJZex0xYwuhHbEkGl7PcKaRxm-V6OlUrzSe8nmvROT9oPO0sEedRsep9wsEmGvk0-UnUKdprgL6N2CJ~ZbwNNFR7pb2iBYWg2H42Jwnffk8tKKalEiPF-TAnT6g78JUay6yrhNmIJbaoA__"
        className="object-contain  rounded-full aspect-square w-20"
      />
      <div className="mt-8 leading-7">
        I really happy to see the result my new home. It’s really good house and
        good price too. And they work so fast becasue they have the best team.
        Once again, thankyou. I really appreciate it.
      </div>
      <div className="mt-4 font-semibold leading-relaxed">- Mr. Ahmed</div>
    </div>
        </SwiperSlide>

      </Swiper>
    </>

 
    <div className="flex flex-col">
      <div className="flex relative flex-col justify-center items-center px-16 py-16 w-full min-h-[428px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f48a863e6cfd71ebcbb9811aaba410f64b6fe98286e84a924e99a02a0fa0acb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f48a863e6cfd71ebcbb9811aaba410f64b6fe98286e84a924e99a02a0fa0acb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f48a863e6cfd71ebcbb9811aaba410f64b6fe98286e84a924e99a02a0fa0acb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f48a863e6cfd71ebcbb9811aaba410f64b6fe98286e84a924e99a02a0fa0acb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f48a863e6cfd71ebcbb9811aaba410f64b6fe98286e84a924e99a02a0fa0acb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f48a863e6cfd71ebcbb9811aaba410f64b6fe98286e84a924e99a02a0fa0acb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f48a863e6cfd71ebcbb9811aaba410f64b6fe98286e84a924e99a02a0fa0acb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f48a863e6cfd71ebcbb9811aaba410f64b6fe98286e84a924e99a02a0fa0acb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative w-full max-w-[985px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/01f9671b63026c447e3e3edfd6ccc7df3b362f8c185814e93a01f7c3b3f239fe?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f9671b63026c447e3e3edfd6ccc7df3b362f8c185814e93a01f7c3b3f239fe?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f9671b63026c447e3e3edfd6ccc7df3b362f8c185814e93a01f7c3b3f239fe?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f9671b63026c447e3e3edfd6ccc7df3b362f8c185814e93a01f7c3b3f239fe?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f9671b63026c447e3e3edfd6ccc7df3b362f8c185814e93a01f7c3b3f239fe?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f9671b63026c447e3e3edfd6ccc7df3b362f8c185814e93a01f7c3b3f239fe?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f9671b63026c447e3e3edfd6ccc7df3b362f8c185814e93a01f7c3b3f239fe?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/01f9671b63026c447e3e3edfd6ccc7df3b362f8c185814e93a01f7c3b3f239fe?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-contain w-full rounded-full aspect-square max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-2xl font-bold leading-10 max-md:max-w-full">
                  Mr. James’s says : “I’m so happy!”
                </div>
                <div className="mt-4 text-base leading-7 max-md:max-w-full">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry  standard dummy text ever
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
    </div>

  <>
  <div className="text-2xl text-center font-bold leading-10 text-sky-800 ">
      Mr. James’s villa
    </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/485a/2528/8471d5145069b908a2bea035138288eb?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsYliVvRXLOHdrr7VT2A3~znHpQ4ywDoUnRT-dBnGDjS8yVlVlRoLo~J7bBcRUqXLjyIuVT4mz1W2yqBBMAriQu5Svr9FfzbIRNf7oZbjQDkZpOyjRr62ZEXwzBV6SRin8d7-JxX3vDXI7VcMCI8C94q3QGkNWo38~Pldk5SY5wj0XkePmPcyewvn16YYuZoIF5LhNgie1fhCWET1V2h0~naRuDCm2KHxXOCg7qy4ZuVmxfkW2CUN4VRHOzT0VO-g-eI51GE1qXJ1SGAxun23nXPBCMpzjXrFcj14Gv5MLQbNqfsXQKp8c70O6zzl3NEwEleNptEQjfoZudhKCK3Yg__" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/ed62/6400/4fda28fcc13bfd497a7dde860fd142c0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BELOSpM6k3BYYxzNtP5uHDN8khWZaoQ9LN1ibXiwA5xAtcwU3BH3EtY8SxiN1Zi~WwA2zgZjT3llrn6ACbj~z6uXFU36namnlYDCsdN5X7k0TrSJq3mvEBfPUTBJHAHRY372Q0-79oN~AtpmpPUPf4IOoy4GLkcGmZGXncjEUP01razGcNHO~qlgNcAhYdYqrAwILXr0p5B1q9naiOC1YzxtFCsc6pbPJC-WDihvc64XdHnFiPegQmkbCIiBp7YBTyquq6-s-WwlwShrRJKgyOMfZuKF9koCFu-rCE5-83XCM4eXCso82ObUi4KATlYxLQrflHdOxF1ivrmjtVoQVA__" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/6ad8/4663/476eb7a241ae1bb544acfd3f07791da2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGL~Ra3XcIw4KMEBloZmRdUkpI3iqaRfE0wOy2-jvfR4OYhiTE9HMAvqq2Pg3uGFJdCsoX1FAggvdEN8OjhTINYAvwStIyLiS4KRlHAInKNJmMEbe8vfFJkKISrWtWCGE4coDgaallYFpjJeMHPn3gv0R05oD7MIXZE~6wVxExGanSolHHksRrsRpRU7FfUC5OkIM1dAEenVpCHlcewUJvkcAxOqSJncYdT98BSi~COkXITt1qlQrqvV8ef5Xa1K5OogI17SL8h9m-JGXaqlRAg9lPYdaG~sCvQDi8tgIbi~Rov0FASmCrBOlbtPLeu~oOdxLi1py9Pnm~WRTOAGMw__" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/485a/2528/8471d5145069b908a2bea035138288eb?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsYliVvRXLOHdrr7VT2A3~znHpQ4ywDoUnRT-dBnGDjS8yVlVlRoLo~J7bBcRUqXLjyIuVT4mz1W2yqBBMAriQu5Svr9FfzbIRNf7oZbjQDkZpOyjRr62ZEXwzBV6SRin8d7-JxX3vDXI7VcMCI8C94q3QGkNWo38~Pldk5SY5wj0XkePmPcyewvn16YYuZoIF5LhNgie1fhCWET1V2h0~naRuDCm2KHxXOCg7qy4ZuVmxfkW2CUN4VRHOzT0VO-g-eI51GE1qXJ1SGAxun23nXPBCMpzjXrFcj14Gv5MLQbNqfsXQKp8c70O6zzl3NEwEleNptEQjfoZudhKCK3Yg__" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/ed62/6400/4fda28fcc13bfd497a7dde860fd142c0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BELOSpM6k3BYYxzNtP5uHDN8khWZaoQ9LN1ibXiwA5xAtcwU3BH3EtY8SxiN1Zi~WwA2zgZjT3llrn6ACbj~z6uXFU36namnlYDCsdN5X7k0TrSJq3mvEBfPUTBJHAHRY372Q0-79oN~AtpmpPUPf4IOoy4GLkcGmZGXncjEUP01razGcNHO~qlgNcAhYdYqrAwILXr0p5B1q9naiOC1YzxtFCsc6pbPJC-WDihvc64XdHnFiPegQmkbCIiBp7YBTyquq6-s-WwlwShrRJKgyOMfZuKF9koCFu-rCE5-83XCM4eXCso82ObUi4KATlYxLQrflHdOxF1ivrmjtVoQVA__" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/6ad8/4663/476eb7a241ae1bb544acfd3f07791da2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGL~Ra3XcIw4KMEBloZmRdUkpI3iqaRfE0wOy2-jvfR4OYhiTE9HMAvqq2Pg3uGFJdCsoX1FAggvdEN8OjhTINYAvwStIyLiS4KRlHAInKNJmMEbe8vfFJkKISrWtWCGE4coDgaallYFpjJeMHPn3gv0R05oD7MIXZE~6wVxExGanSolHHksRrsRpRU7FfUC5OkIM1dAEenVpCHlcewUJvkcAxOqSJncYdT98BSi~COkXITt1qlQrqvV8ef5Xa1K5OogI17SL8h9m-JGXaqlRAg9lPYdaG~sCvQDi8tgIbi~Rov0FASmCrBOlbtPLeu~oOdxLi1py9Pnm~WRTOAGMw__" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/485a/2528/8471d5145069b908a2bea035138288eb?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsYliVvRXLOHdrr7VT2A3~znHpQ4ywDoUnRT-dBnGDjS8yVlVlRoLo~J7bBcRUqXLjyIuVT4mz1W2yqBBMAriQu5Svr9FfzbIRNf7oZbjQDkZpOyjRr62ZEXwzBV6SRin8d7-JxX3vDXI7VcMCI8C94q3QGkNWo38~Pldk5SY5wj0XkePmPcyewvn16YYuZoIF5LhNgie1fhCWET1V2h0~naRuDCm2KHxXOCg7qy4ZuVmxfkW2CUN4VRHOzT0VO-g-eI51GE1qXJ1SGAxun23nXPBCMpzjXrFcj14Gv5MLQbNqfsXQKp8c70O6zzl3NEwEleNptEQjfoZudhKCK3Yg__" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/ed62/6400/4fda28fcc13bfd497a7dde860fd142c0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BELOSpM6k3BYYxzNtP5uHDN8khWZaoQ9LN1ibXiwA5xAtcwU3BH3EtY8SxiN1Zi~WwA2zgZjT3llrn6ACbj~z6uXFU36namnlYDCsdN5X7k0TrSJq3mvEBfPUTBJHAHRY372Q0-79oN~AtpmpPUPf4IOoy4GLkcGmZGXncjEUP01razGcNHO~qlgNcAhYdYqrAwILXr0p5B1q9naiOC1YzxtFCsc6pbPJC-WDihvc64XdHnFiPegQmkbCIiBp7YBTyquq6-s-WwlwShrRJKgyOMfZuKF9koCFu-rCE5-83XCM4eXCso82ObUi4KATlYxLQrflHdOxF1ivrmjtVoQVA__" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/6ad8/4663/476eb7a241ae1bb544acfd3f07791da2?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGL~Ra3XcIw4KMEBloZmRdUkpI3iqaRfE0wOy2-jvfR4OYhiTE9HMAvqq2Pg3uGFJdCsoX1FAggvdEN8OjhTINYAvwStIyLiS4KRlHAInKNJmMEbe8vfFJkKISrWtWCGE4coDgaallYFpjJeMHPn3gv0R05oD7MIXZE~6wVxExGanSolHHksRrsRpRU7FfUC5OkIM1dAEenVpCHlcewUJvkcAxOqSJncYdT98BSi~COkXITt1qlQrqvV8ef5Xa1K5OogI17SL8h9m-JGXaqlRAg9lPYdaG~sCvQDi8tgIbi~Rov0FASmCrBOlbtPLeu~oOdxLi1py9Pnm~WRTOAGMw__" />
        </SwiperSlide>
      </Swiper>
    </>






    </div>
  )
}

export default Story


 
