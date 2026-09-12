import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="border-y border-[#F1F5F9] mt-20 bg-white">
      <div className="container mx-auto mt-20 pb-10 md:px-4">
        <div className="footerSection flex flex-col items-center md:flex-row lg:flex-row justify-between lg:items-center lg:pr-30 mb-15">
          <div className="grid gap-3 text-center md:text-left lg:text-left">
            <img
              className="w-[135px] h-[35px] mx-auto md:mx-0 lg:mx-0"
              src={Logo}
              alt="Logo"
            />
            <p className="text-[#64748B] text-[12px] max-w-[400px] mb-3">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mx-auto md:mx-0 lg:mx-0">
              <ul className="flex gap-3 text-[#4B5563] md:text-[#475569] lg:text-[#475569] text-[12px] md:font-semibold lg:font-semibold">
                <li>
                  <a href="https://github.com/theopsupcorp1009" target="_blank">Github</a>
                </li>
                <li>
                  <a href="https://x.com/MRKhanDipu" target="_blank">
                    <span className="mr-3 md:hidden lg:hidden">•</span> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/m-r-khan-dipu393/" target="_blank">
                    <span className="mr-3 md:hidden lg:hidden">•</span>LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden md:block lg:block space-y-3">
            <h2 className="text-[#0F172A] text-[12px] font-bold">PRODUCT</h2>
            <ul className="text-[#64748B] text-[12px] space-y-2">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Technologies</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block lg:block space-y-3">
            <h2 className="text-[#0F172A] text-[12px] font-bold">COMPANY</h2>
            <ul className="text-[#64748B] text-[12px] space-y-2">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block lg:block space-y-3">
            <h2 className="text-[#0F172A] text-[12px] font-bold">LEGAL</h2>
            <ul className="text-[#64748B] text-[12px] space-y-2">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Technologies</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F1F5F9] pt-8 px-3 md:px-0 lg:px-0 copyWrightSection">
          <div className="flex justify-between ">
            <p className="text-[#94A3B8] text-[12px] copyWrightText">
              © 2026 Dev Stack. All rights reserved.
            </p>
            <div className="privacyTerms">
              <ul className="flex gap-5 text-[#94A3B8] text-[12px]">
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
