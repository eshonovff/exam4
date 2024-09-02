
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import Switcher from "../companent/switch";


const Layout = () => {
  // const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div className="dark:bg-gray-400 dark:text-white">
 <div className="flex flex-col text-white">
  <div className="flex relative flex-col px-20 pt-8 pb-36 w-full min-h-[450px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
    <img
      loading="lazy"
      srcSet="/src/assets/IMG.png"
      className="object-cover absolute inset-0 size-full"
    />
    <div className="flex sticky top-0 backdrop-blur-lg flex-wrap gap-5 justify-between w-full whitespace-nowrap max-md:max-w-full">
      <div className="text-7xl font-bold max-md:text-4xl">DB-</div>
      <div className="flex flex-wrap items-center gap-10 self-end mt-7 text-base font-medium">
        <Link className="hover:underline" to={"/"}>{t("header.nav.Home")}</Link>
        <Link className="hover:underline" to={"/about"}>{t("header.nav.About")}</Link>
        <Link className="hover:underline" to={"/services"}>{t("header.nav.Services")}</Link>
        <Link className="hover:underline" to={"/gallery"}>{t("header.nav.Gallery")}</Link>
        <Link className="hover:underline" to={"/contact"}>{t("header.nav.Contact")}</Link>
        <Link className="hover:underline" to={"/story"}>{t("header.nav.Story")}</Link>
        <Link className="hover:underline" to={"/careers"}>{t("header.nav.Careers")}</Link>
        <Link className="hover:underline" to={"/news"}>{t("header.nav.News")}</Link>
        <div>
          <select onChange={handleChange} value={age} className="bg-gray-800 text-white rounded-md p-2">
            <option value="en">English</option>
            <option value="tj">Тоҷикӣ</option>
          </select>
        </div>
          <Switcher></Switcher>
      </div>
    </div>
    <div className="relative self-center mt-28 -mb-7 text-5xl font-bold text-center max-md:mt-10 max-md:mb-2.5 max-md:max-w-full max-md:text-4xl">
      {t("header.h1")}
    </div>
  </div>
</div>



      <Outlet />
      <div className="flex flex-col text-base text-white">
      <div className="flex flex-col justify-center items-center px-16 py-16 w-full bg-sky-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-center ml-2.5 w-full max-w-[1100px] max-md:max-w-full">
          <div className="flex flex-col items-start self-stretch">
            <div className="text-7xl font-bold max-md:text-4xl">DB-</div>
            <div className="self-stretch mt-12 leading-6 max-md:mt-10">
              Lizenzo street number 12
              <br />
              Jakarta, Indonesia
            </div>
            <div className="p-6 mt-8 font-medium leading-relaxed max-md:px-5">
              Get directions
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch my-auto whitespace-nowrap">
            <div className="self-stretch text-2xl font-bold leading-10">
              Menu
            </div>
            <div className="mt-8">Home</div>
            <div className="mt-4">About</div>
            <div className="mt-4">Gallery</div>
            <div className="mt-4">Service</div>
          </div>
          <div className="flex flex-col items-start self-stretch my-auto whitespace-nowrap">
            <div className="self-stretch text-2xl font-bold leading-10">
              Contact
            </div>
            <div className="mt-8">E-mail</div>
            <div className="mt-4">Mobile</div>
            <div className="mt-4">Whatsapp</div>
            <div className="mt-4">Fax</div>
          </div>
          <div className="flex flex-col items-start self-stretch my-auto whitespace-nowrap">
            <div className="self-stretch text-2xl font-bold leading-10">
              Career
            </div>
            <div className="mt-8">Job</div>
            <div className="mt-4">Part-time</div>
            <div className="mt-4">Internship</div>
            <div className="mt-4">Service</div>
          </div>
          <div className="flex flex-col items-start self-stretch my-auto whitespace-nowrap">
            <div className="self-stretch text-2xl font-bold leading-10">
              Business
            </div>
            <div className="mt-8">Affiliate</div>
            <div className="mt-4">Collaboration</div>
            <div className="mt-4">Investment</div>
            <div className="mt-4">People</div>
          </div>
        </div>
      </div>
    </div>
   

    </div>
  );
};

export default Layout;




 

 