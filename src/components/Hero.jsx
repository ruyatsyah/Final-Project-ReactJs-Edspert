import Figure from "../assets/img/Figure.png";

const Hero = () => {
  return (
    <section id="hero" className="bg-primary text-white pt-[98px]">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2 lg:pl-[120px]">
            <h1 className="text-base  font-semibold text-2xl md:text-4xl">
              Jadi expert bersama <span className="block">edspert.id</span>
            </h1>
            <p className="leading-relaxed mt-1">
              Tingkatkan skill dan pengetahuan bersama para mentor 
              <span className="block">terbaik di
              bidangnya, untuk siapkan karir impian anda.</span>
            </p>
          </div>
          <div className="w-full self-end px-[120px] lg:w-1/2 lg:pt-[120px]">
            <div className="relative mt-10 lg:right-0 xl:right-0">
                <img src={Figure} alt="/" className="max-w-full mx-auto"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
