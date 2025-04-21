import { AiFillGithub, AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const socialLinks = [
  { href: "https://github.com/EmamulArefin", Icon: AiFillGithub, label: "GitHub" },
  //{ href: "https://x.com", Icon: AiOutlineTwitter, label: "X (Twitter)" },
  { href: "https://facebook.com/emamul.arfin.56", Icon: AiFillFacebook, label: "Facebook" },
  //{ href: "https://instagram.com", Icon: AiFillInstagram, label: "Instagram" },
  //{ href: "https://telegram.org", Icon: FaTelegramPlane, label: "Telegram" }
];

export const Footer = () => {

  return (
    <footer className="py-8 max-w-full mx-auto px-4 bg-black/90">
      <div className="flex flex-col items-center justify-center text-center">
      <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-gray-200">
          © 2025. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socialLinks.map(({ href, Icon, label }) => (
            <a 
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                         hover:text-gray-400 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
        <p className="mt-4 text-gray-200">
            Built with ❤️ by Emamul Arefin Islam
        </p>
      </div>
    </footer>
  );
};