import Vector from "../assets/img/Vector.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroDet from "../components/HeroDet";
import {useNavigate} from "react-router-dom";

const Detail = () => {
  const contensdetail = [
    {
      title: "Pengenalan Programming Laravel",
      contents:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
      link: "/",
    },
    {
      title: "Materi Bootcamp Laravel 2",
      contents:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
      link: "/",
    },
    {
      title: "Materi Bootcamp Laravel 3",
      contents:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
      link: "/",
    },
    {
      title: "Materi Bootcamp Laravel 4",
      contents:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
      link: "/",
    },
    {
      title: "Materi Bootcamp Laravel 5",
      contents:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
      link: "/",
    },
  ];

  const navigate = useNavigate()

  return (
    <>
    <Header/>
    <HeroDet />
      <div className="pt-5 w-full md:auto 2xl:place-item-center bg-[#EFF4FA] ">
        <div class="flex flex-wrap wrap px-[80px] gap-4 place-content-center">
          <div class="w-1/3 mr-6 w-[308px] h-[256px] bg-white rounded-xl drop-shadow-xl ">
            <div className="ml-[72px] text-[18px] ">
              <ul>
                <li className="py-[25px] list-none">
                  <a href="#" className="">
                    Materi
                  </a>
                </li>
                <li className="mb-2">
                  <a href="">Fasilitas</a>
                </li>
              </ul>
            </div>
            <hr className="bg-[#DDDDDD] mx-4" />
            <div className="flex justify-between px-9 pt-[25px]">
              <p className="  text-gray-400 line-through">Rp. 125.000</p>
              <p className="text-[20px] text-orange-400 font-semibold -m-1">
                Rp. 99.000
              </p>
            </div>
            <div className="pt-6 text-center">
              <button onClick={() => navigate ('/detail/checkout')} className="px-20 py-3 bg-yellow-500 rounded-full">
                Daftar kelas
              </button>
            </div>
          </div>
          <div className=" w-2/3 text-base h-[674px] bg-white rounded-xl drop-shadow-xl px-[50px] py-[15px]">
            <h1 className="text-[30px] font-semibold pt-4">Materi</h1>
            {contensdetail.map((link, index) => (
              <ul className="pt-4">
                <li>
                  <a
                    key={index}
                    href={link.link}
                    className="text-[20px] font-semibold"
                  >
                    <img src={Vector} alt="/" className="-ml-8 -mb-6" />{" "}
                    {link.title}
                  </a>
                  <p href={link.link} className="pt-2">
                    {link.contents}
                  </p>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap px-[80px] gap-4 py-5 place-content-center">
          <div className="w-1/3 mr-5 w-[308px] h-[256px]"></div>
          <div className="w-2/3 h-[299px] bg-white rounded-xl drop-shadow-xl px-[120px] py-[15px]">
            <h1 className="text-[30px] font-semibold pt-5">Fasilitas</h1>
            <div>
              <ul className="py-8 font-semibold">
                <li>
                  <a className="text-[20px]" href="#">
                    <img src={Vector} alt="/" className="-ml-8 -mb-6" />
                    E-Sertifikat
                  </a>
                </li>
                <li className="pt-3">
                  <a className="text-[20px]" href="#">
                    <img src={Vector} alt="/" className="-ml-8 -mb-6" />
                    Portfolio
                  </a>
                </li>
                <li className="pt-3">
                  <a className="text-[20px]" href="#">
                    <img src={Vector} alt="/" className="-ml-8 -mb-6" />
                    Job Connector
                  </a>
                </li>
                <li className="pt-3">
                  <a className="text-[20px]" href="#">
                    <img src={Vector} alt="/" className="-ml-8 -mb-6" />
                    Career Development
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-white bg-[#2B3E58] font-sans h-[386px] ">
          <h1 className="text-[46px] font-semibold">Sudah siap bergabung?</h1>
          <div className="pt-[64px]">
            <button
              onClick={() => navigate ('/detail/checkout')}
              className="px-20 py-3 bg-yellow-500 rounded-full"
            >
              Daftar kelas
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
