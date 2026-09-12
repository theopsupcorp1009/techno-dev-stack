import BannerImg from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="banner container mx-auto mt-10 md:mt-10 lg:mt-0">
      <div className="grid items-center lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <div className="mx-auto mb-5 lg:mx-0">
            <h1 className="text-[40px] font-extrabold leading-10 lg:text-[60px] lg:leading-14">
              Build Your Idea
            </h1>
            <h1 className="text-[40px] font-extrabold leading-10 lg:text-[60px] lg:leading-14 gradient-theme gradient-text">
              Development Stack
            </h1>
          </div>

          <p className="mx-auto max-w-[460px] lg:max-w-[530px] text-[#475569] text-[18px] mb-12 lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex justify-center gap-3 lg:justify-start">
            <button className="button1 hoverStyle cursor-pointer fontType text-[#FFFFFF] font-semibold rounded-[8px] py-2 px-4 gradient-theme">
              Explore Technologies
            </button>
            <button className="button2 hoverStyle cursor-pointer fontType text-[#374151] rounded-[8px] border-1 border-gray-200 py-2 px-14">
              Learn More
            </button>
          </div>
        </div>
        <div className="bannerImageSection overflow-hidden lg:overflow-visible">
          <img className="bannerImage relative -top-18 md:mx-auto md:-top-20 lg:-top-0 w-full max-w-[700px]" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
