import React from "react";
import Header from "../components/Header";
import Pesanan from "../assets/img/Pesanan.png";
import Mandiri from "../assets/img/Mandiri.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Dropdown from "../assets/img/Dropdown.png"
import Left from "../assets/img/Left.Png"

const CheckoutPayment = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-[#EFF4FA] ">
      <Header />
      <div className="px-10">
        <ul className="flex pt-10">
          <li className="mr-2"><button onClick={() => navigate('/detail/checkout')}><img src={Left} alt="" className="inline-block" /></button></li>
          <li><button onClick={() => navigate('/detail/checkout')}>checkout</button></li>
          <li><img src={Dropdown} alt=""  className="rotate-90 inline-block mr-2 ml-2"/></li>
          <li><button className="text-[#1097E7] font-semibold">intruksi pembayaran</button></li>
        </ul>
         </div>
      <h1 className="py-[39px] px-10 text-[20px] font-semibold">Intruksi pembayaran</h1>
      <div className="flex px-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 place-content-center  place-content-center ">
        <div className="w-1/2">
          <div className="bg-white px-10 pb-16">
            <div className="pt-10 flex">
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
            <div className="text-[#6D7175] text-[14px] ">
              <h1 className="text-black font-bold pt-4 mb-1">
                Metode Pembayaran
              </h1>
              <p>Bank Transfer (verifkasi manual)-Mandiri</p>
              <div className="flex pt-2">
                <img src={Mandiri} alt="/" className="h-5 mt-3" />
                <div className="ml-5">
                  <p className="text-black">
                    No Rek. 137000299089{" "}
                    <span className="block text-[#6D7175]">
                      a.n. PT Widya Kreasi Bangsa
                    </span>
                  </p>
                </div>
              </div>
              <p className="inline-block mt-2">
                Nominal yang harus dibayar senilai:{" "}
              </p>
              <h1 className="text-[14px] text-black font-bold">Rp. 400.000</h1>
            </div>
          </div>
        </div>
        <div className="w-1/2  ">
          <div className="bg-white px-10 pt-6 pb-6">
            <h1 className="text-[20px] font-semibold">Intruksi Pembayaran </h1>
            <div className="text-[20px]">
              <ul className="flex">
                <li className="pr-10">
                  <a href="#" className="">
                    ATM
                  </a>
                </li>
                <li className="pr-10">
                  <a href="#">Internet Banking</a>
                </li>
                <li>
                  <a href="#">M-Banking</a>
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <ul className="list-decimal pl-4 pt-1 mr-36 text-[16px]">
                <li>Masukkan kartu ke mesing ATM Mandiri.</li>
                <li>Pilih Bahasa.</li>
                <li>Masukkan PIN ATM..</li>
                <li>Pilih menu transaksi lainnya.</li>
                <li>Pilih menu “Transfer”, lalu pilih ke relk Mandiri.</li>
                <li>Masukkan no rekening yang dituju.</li>
                <li>Masukkan nominal jumlah uang yang akan di transfer.</li>
                <li>
                  Layar ATM akan menampilkan data transaksi anda, jika data
                  sudah benar pilih “YA”.
                </li>
                <li>Selesai, struk akan keluar dari mesin ATM.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 pb-20">
      <div className="w-full flex flex-col items-center justify-center text-white bg-[#2B3E58] font-sans h-[236px] rounded-b-xl">
          <h1 className="text-[20px] font-semibold">Sudah Transfer? Lakukan verifikasi pembayaran segera!</h1>
          <div className="pt-[20px]">
            <a
              href="#"
              type="button"
              className="px-12 py-3 bg-yellow-500 rounded-full"
            >
              Verifikasi Pembayaran
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CheckoutPayment;
