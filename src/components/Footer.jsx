import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] pt-12 pb-5 drop-shadow-xl">
      <div className="container ">
        <div className="flex px-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-content-center">
          <div className="text-[#A3A3A3] flex flex-wrap  items-center ">
            <h1 className="font-bold ">TAGLINE edspert disini</h1>
            <h2 className="font-medium -mt-20">
              Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik,{" "}
              <span className="inline-block">
                Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
              </span>
            </h2>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-[16px] text-black mb-5">
              Program
            </h3>
            <ul className="text-[#A3A3A3]">
              <li>
                <a href="#" className="inline-block text-base ">
                  Online Course
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-base ">
                  Mini Bootcamp
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-base ">
                  Bootcamp
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/4">
            <h3 className="font-semibold text-[16px] text-black mb-5">
              Bidang Ilmu
            </h3>
            <ul className="text-[#A3A3A3]">
              <li>
                <a href="#" className="inline-block text-base ">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-base ">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-base ">
                  English
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-base ">
                  Programming
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/4">
            <h3 className="font-semibold text-[16px] text-black mb-5">
              Tentang edspert
            </h3>
            <ul className="text-[#A3A3A3]">
              <li>
                <a href="#" className="inline-block text-base ">
                  Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-base ">
                  Kontak kami
                </a>
              </li>
              <li>
                <a href="#" className="inline-block text-base ">
                  Media sosial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-[#A3A3A3] mt-5">
        <h1>
          Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
