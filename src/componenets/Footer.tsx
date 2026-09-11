import footer from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#F1F5F9] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Footer Main Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div>
              <img src={footer} alt="Dev Stack" />

              <p className="mt-4 max-w-sm text-xs leading-5 text-[#64748B]">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

              {/* Social Links */}
              <div className="mt-5 flex items-center gap-5">
                <a
                  href="#"
                  className="font-semibold text-[#475569] hover:text-[#DB2777]"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="font-semibold text-[#475569] hover:text-[#DB2777]"
                >
                  Twitter
                </a>

                <a
                  href="#"
                  className="font-semibold text-[#475569] hover:text-[#DB2777]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[#0F172A]">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs text-[#64748B] hover:text-[#DB2777]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-[#64748B] hover:text-[#DB2777]"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-[#64748B] hover:text-[#DB2777]"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[#0F172A]">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs text-[#64748B] hover:text-[#DB2777]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-[#64748B] hover:text-[#DB2777]"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-[#64748B] hover:text-[#DB2777]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[#0F172A]">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs text-[#64748B] hover:text-[#DB2777]"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-xs text-[#64748B] hover:text-[#DB2777]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="mt-10 flex flex-col gap-4 border-t border-[#94A3B8] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[#94A3B8] text-xs">
            {" "}
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-[#64748B] hover:text-[#DB2777]">
              Privacy
            </a>
            <a href="#" className="text-xs text-[#64748B] hover:text-[#DB2777]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
