import Logo from "@/assets/logo.png";

import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

function Footer() {
  const navbar = [
    {
      label: "Company",
      links: [
        { label: "About", link: "/about" },
        { label: "Store", link: "/store" },
        { label: "FAQ", link: "/faq" },
      ],
    },
    {
      label: "Service",
      links: [
        { label: "Delivery", link: "/delivery" },
        { label: "Payment", link: "/payment" },
        { label: "Contact", link: "/contact" },
      ],
    },
    {
      label: "Follow us",
      links: [
        { label: "Instagram", link: "/instagram" },
        { label: "Facebook", link: "/facebook" },
        { label: "Twitter", link: "/twitter" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-background-darker">
      <div className="max-w-7xl mx-auto my-16 px-8 lg:px-0 flex flex-col-reverse lg:flex-row">
        <div className="basis-1/4 flex flex-col items-center lg:items-start gap-4 mt-8 lg:mt-0">
          <Link to={"/"}>
            <img className="w-28" src={Logo} alt="Logo Website" />
          </Link>
          <span className="text-sm hidden lg:block">
            Eco Food Market
            <br />
            SPROUT Goods Ltd.
          </span>
          <span className="block lg:hidden text-sm">
            Eco Food Market SPROUT Goods Ltd.
          </span>
          <div className="flex lg:hidden items-center gap-4 text-foreground/60 text-sm font-medium underline">
            <span>Term & Conditions</span>
            <span>Privacy Policy</span>
          </div>
          <span className="text-foreground/60 text-sm">
            2021 &copy; All rights reserved.
          </span>
        </div>
        <div className="basis-1/2 grid grid-cols-1 lg:grid-cols-3 items-center justify-between">
          {navbar.map((nav, i) => (
            <div key={i} className="flex flex-col gap-2 text-sm">
              <h5 className="font-semibold text-base mb-2">{nav.label}</h5>
              <div className="flex lg:flex-col gap-6 font-medium border-b-2 border-background-darker lg:border-none lg:gap-2 pb-6 mb-6 lg:pb-0 lg:mb-0">
                {nav.links.map((l, j) => (
                  <Link key={j} to={l.link}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="basis-1/4 flex flex-col gap-4 text-bas mb-10 lg:mb-0">
          <h5 className="font-medium">Get our newsletters:</h5>
          <div>
            <Input className="bg-white" placeholder="Your email" />
          </div>
          <div className="hidden lg:flex items-center gap-4 text-foreground/60 text-sm font-medium underline">
            <span>Term & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
