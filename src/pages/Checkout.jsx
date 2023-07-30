import React from "react";
import Header from "../components/Header";
import Dropdown from "../assets/img/Dropdown.png";
import BCA from "../assets/img/BCA.png";
import Mandiri from "../assets/img/Mandiri.png";
import Footer from "../components/Footer";
import Pesanan from "../assets/img/Pesanan.png";
import { useNavigate } from "react-router-dom";
import Left from "../assets/img/Left.png"


const Checkout = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <Header />
        <div className="bg-[#EFF4FA] mx-auto">
         <div className="px-10">
        <ul className="flex pt-10">
          <li className="mr-2"><button onClick={() => navigate('/detail')}><img src={Left} alt="" className="inline-block" /></button></li>
          <li><h1 className="font-semibold text-[#1097E7]">checkout</h1></li>
          <li><img src={Dropdown} alt=""  className="rotate-90 inline-block mr-2 ml-2"/></li>
          <li><h1>intruksi pembayaran</h1></li>
        </ul>
         </div>
          <h1 className="pt-10 px-10 text-xl font-semibold">Checkout</h1>
          <div className="w-full mx-auto  flex flex-wrap justify-betwen gap-4 pt-[39px] px-8 place-content-center">
            <div className="w-2/5  w-[500px] bg-white drop-shadow-xl rounded-xl px-8 py-8">
              <h1 className="font-semibold">Pilih metode pembayaran</h1>
              <div className="my-4">
                <h2 className="text-[14px] font-semibold">
                  Bank transfer (Verifikasi manual)
                </h2>
                <div className="flex justify-between">
                  <p className="text-[12px] mr-3 mt-1">
                    Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode
                    bayar ini memerlukan verifikasi pembayaran melalu WhatsApp
                  </p>
                  <img
                    src={Dropdown}
                    alt="/"
                    className="h-2 w-4 mr-0"
                  />
                </div>
              </div>
              <hr />
              <div className="border border-[#C9CCCF] flex justify-between py-4 px-4 mt-4">
                <img src={Mandiri} alt="/" />
                <h1 className="text-[14px] font-semibold">
                  Bank Transfer ke Rek Bank Mandiri
                </h1>
                <input type="radio" className="default:ring-2 " />
              </div>
              <div className="border border-[#C9CCCF] flex justify-between py-4 mt-2 px-4">
                <img src={BCA} alt="/" />
                <h1 className="-ml-6 text-[14px] font-semibold">
                  Bank Transfer ke Rek Bank BCA
                </h1>
                <input type="radio" className="default:ring-2 " />
              </div>
              <div className="mt-4">
                <h2 className="text-[14px] font-semibold">
                  Bank Account (Verifikasi otomatis)
                </h2>
                <div className="flex justify-between">
                  <p className="text-[12px] mr-3 mb-4 mt-1">
                    Pembayaran melalui virtual account berbagai bank. Metode
                    bayar ini akan diverifikasi secara otomatis.
                  </p>
                  <img
                    src={Dropdown}
                    alt="/"
                    className="h-2 w-4 mr-0"
                  />
                </div>
                <hr />
                <div className="border border-[#C9CCCF] flex justify-between py-4 px-4 mt-4">
                  <img src={Mandiri} alt="/"/>
                  <h1 className="text-[14px] font-semibold">
                    Bank Transfer ke Rek Bank Mandiri
                  </h1>
                  <input id="bank" type="radio" className="default:ring-2 " />
                </div>
                <div className="border border-[#C9CCCF] flex justify-between py-4 mt-2 px-4">
                  <img src={BCA} alt="/" />
                  <h1 className="-ml-6 text-[14px] font-semibold">
                    Bank Transfer ke Rek Bank BCA
                  </h1>
                  <input id="bank" type="radio" className="default:ring-2 " />
                </div>
              </div>
            </div>
            <div class="w-3/5 w-[667px] bg-white drop-shadow-xl rounded-xl px-12 py-8">
              <h1 className="font-semibold">Ringkasan Pesanan</h1>
              <div className="pt-4 flex">
                <img src={Pesanan} alt="/" className="h-[110px] w-[119px]" />
                <div className="">
                  <h1 className="ml-5 text-[25px] font-semibold">
                    Programming Laravel
                    <span className="block text-[20px]">
                      Getting Started with Laravel 9
                    </span>
                  </h1>
                  <div className="ml-5 text-[12px] text-gray-500">
                    <p>
                      Batch
                      <span className="ml-7 text-black">September 2022</span>
                    </p>
                    <p>
                      Mentor
                      <span className="ml-5 text-black">
                        William Hartono, Farel Prayoga
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h1 className="text-[14px] font-bold mb-2">Kode promo</h1>
                <div className="flex ">
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Masukkan kode promo "
                    type="text"
                    name="search"
                  />
                  <button className="px-8 py-3 bg-[#2A61A8] rounded-md text-white ml-1">
                    Terapkan
                  </button>
                </div>
                <div className="mb-4 mt-6 text-[14px]">
                  <h1 className="font-bold">Metode pembayaran</h1>
                  <h2>Bank Transfer (verifikasi manual)-Mandiri </h2>
                </div>
                <div className="text-[14px] pt-2">
                  <h1 className="font-bold">Ringkasan Pembayaran</h1>
                  <div className="flex justify-between pt-4">
                    <h1>Harga</h1>
                    <h1>Rp. 700.000</h1>
                  </div>
                  <div className="flex justify-between pt-2">
                    <h1>Potongan</h1>
                    <h1>Rp. 200.000</h1>
                  </div>
                  <div className="flex justify-between pt-2">
                    <h1>Promo</h1>
                    <h1>-</h1>
                  </div>
                  <div className="flex justify-between pt-2 mb-2">
                    <h1>kode unik</h1>
                    <h1>Rp. 100.000</h1>
                  </div>
                  <hr />
                  <div className="flex justify-between pt-2 mb-2 font-bold">
                    <h1>Total Pembayaran</h1>
                    <h1>Rp. 400.000</h1>
                  </div>
                </div>
                <p className="mt-8 text-[14px]">
                  Dengan menekan tombol <span className="font-bold">Bayar</span> kamu telah menyetujui syarat dan
                  ketentuan yang berlaku, silahkan baca kembali <span className="text-blue-500 font-semibold">Syarat &
                  ketentuan</span> yang berlaku.
                </p>
                <div className="pt-8 flex justify-between">
                  <div className="flex mt-3">
                  <img src={Dropdown} alt="/" className="-rotate-90 h-1.5"/>
                  <button onClick={() => navigate ('/detail')} className="-mt-6"><a href="#">Batalkan</a></button>
                  </div>
                  <button onClick={() => navigate ('/detail/checkout/payment')} className="w-[205px] py-2 bg-[#2A61A8] rounded-full text-white">Bayar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-36 bg-[#EFF4FA]">
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
