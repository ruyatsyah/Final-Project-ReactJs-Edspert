import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";

const Home = () => {
  const contents = [
    {
      intensive: "Intensive Bootcamp",
      title: "Laravel",
      content: "Ini adalah paragraf dalam section 1.",
      titledua: "Programing Laravel",
      contentdua: "Getting started with Laravel 9",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel prayoga",
      price: "Rp.2060.000",
      discount: "Rp 560.000",
    },
    {
      intensive: "Intensive Bootcamp",
      title: "Laravel",
      content: "Ini adalah paragraf dalam section 1.",
      titledua: "Programing Laravel",
      contentdua: "Getting started with Laravel 9",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel prayoga",
      price: "Rp.2060.000",
      discount: "Rp 560.000",
    },
    {
      intensive: "Intensive Bootcamp",
      title: "Laravel",
      content: "Ini adalah paragraf dalam section 1.",
      titledua: "Programing Laravel",
      contentdua: "Getting started with Laravel 9",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel prayoga",
      price: "Rp.2060.000",
      discount: "Rp 560.000",
    },
    {
      intensive: "Intensive Bootcamp",
      title: "Laravel",
      content: "Ini adalah paragraf dalam section 1.",
      titledua: "Programing Laravel",
      contentdua: "Getting started with Laravel 9",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel prayoga",
      price: "Rp.2060.000",
      discount: "Rp 560.000",
    },
    {
      intensive: "Intensive Bootcamp",
      title: "Laravel",
      content: "Ini adalah paragraf dalam section 1.",
      titledua: "Programing Laravel",
      contentdua: "Getting started with Laravel 9",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel prayoga",
      price: "Rp.2060.000",
      discount: "Rp 560.000",
    },
    {
      intensive: "Intensive Bootcamp",
      title: "Laravel",
      content: "Ini adalah paragraf dalam section 1.",
      titledua: "Programing Laravel",
      contentdua: "Getting started with Laravel 9",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel prayoga",
      price: "Rp.2060.000",
      discount: "Rp 560.000",
    },
    {
      intensive: "Intensive Bootcamp",
      title: "Laravel",
      content: "Ini adalah paragraf dalam section 1.",
      titledua: "Programing Laravel",
      contentdua: "Getting started with Laravel 9",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel prayoga",
      price: "Rp.2060.000",
      discount: "Rp 560.000",
    },
    {
      intensive: "Intensive Bootcamp",
      title: "Laravel",
      content: "Ini adalah paragraf dalam section 1.",
      titledua: "Programing Laravel",
      contentdua: "Getting started with Laravel 9",
      batch: "September 2022",
      mentor: "Wiliam Hartono, Farel prayoga",
      price: "Rp.2060.000",
      discount: "Rp 560.000",
    },
  ];
  return (
    <div className="bg-[#EFF4FA]">
      <Header />
      <Hero />
      <div
        id="bidangilmu"
        className="flex px-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-content-center mb-20 pt-[89px] lg:pl-12 "
      >
        <div className="flex flex-wrap items-center place-content-center drop-shadow-xl">
          {contents.map((item) => (
            <Section
              key={item.title}
              intensive={item.intensive}
              title={item.title}
              content={item.content}
              titledua={item.titledua}
              contentdua={item.contentdua}
              batch={item.batch}
              mentor={item.mentor}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
