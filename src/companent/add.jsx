import React from 'react'
import { Link } from 'react-router-dom'

const Add = ({name, image, price, type, id, status}) => {
  return (
    <div className='mt-[50px] rounded-[20px] shadow-custom'>
      <Link to={`/shop/${id}`}>
      <div>
          <div className="flex flex-col text-center rounded-none max-w-[335px]">
        <div className="flex flex-col w-full bg-stone-50 rounded-[30px]">
          <div className="flex relative flex-col px-8 pt-7 pb-4 w-full rounded-none aspect-[0.694]">
            <img
              loading="lazy"
              srcSet={image}
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative gap-2 items-start max-w-full text-base font-semibold text-white whitespace-nowrap w-[162px]">
              <div className="gap-2.5 self-stretch px-3 pt-1.5 pb-1.5 rounded-lg bg-slate-700">
                {type}
              </div>
            </div>
            <div className="flex relative flex-col mt-80">
              <div className="self-start text-xl font-semibold text-slate-700">
                {name}
              </div>
              <div className="flex flex-col mt-3.5 w-full whitespace-nowrap max-w-[279px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0b931097effce7be736c3e681760e8d65c2c336c5a58246aa7510781984d8c?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain w-full"
                />
                <div className="flex gap-10 items-center mt-1.5 w-full">
                  <div className="flex gap-2 self-stretch my-auto w-[114px]">
                    <div className="flex flex-col pb-2.5 my-auto text-base font-semibold text-zinc-400">
                      <div className='line-through'>${price*2}.00</div>
                      <div className="flex shrink-0 h-px bg-zinc-400" />
                    </div>
                    <div className="text-lg font-bold text-slate-700">${price}.00</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fcf96d05bd1c21ace55c8f52177222d425cdce9ea37972cb67210eecf1d61dd?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                    className="object-contain shrink-0 self-stretch my-auto rounded-sm aspect-[4.42] w-[84px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
          </Link>
    </div>
  )
}

export default Add
