const Header = () => {
  return (
    <nav className="px-12 h-24 ">
      <ul className="flex justify-between items-center">
        <li className="cursor-pointer hover:bg-gray-200 py-2 px-4 rounded-full hover:shadow-2xl">
          <svg
            className="fill-current text-gray-400 h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </li>
        <li className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            viewBox="-4.608 -8.828925 39.936 52.97355"
          >
            <defs>
              <radialGradient
                gradientUnits="userSpaceOnUse"
                cx="173.7628"
                gradientTransform="matrix(.93267 0 0 1.0722 -146.703 -883.4623)"
                fy="856.9146"
                fx="173.7628"
                r="35.1884"
                cy="856.9146"
                id="a"
              >
                <stop stopColor="#FF7854" offset="0%" />
                <stop stopColor="#FD267D" offset="100%" />
              </radialGradient>
            </defs>
            <path
              d="M9.205 14.2587a.097.097 0 01-.108-.03c-1.194-1.581-1.494-4.299-1.567-5.343-.015-.201-.241-.314-.422-.213-3.687 2.071-7.108 6.97-7.108 11.7 0 8.126 5.644 14.943 15.36 14.943 9.103 0 15.36-7.026 15.36-14.942 0-10.358-7.402-17.24-13.995-20.351a.237.237 0 00-.336.246c.849 5.582-.324 11.653-7.184 13.99z"
              fill-rule="evenodd"
              fill="url(#a)"
            />
          </svg>
        </li>
        <li className="cursor-pointer hover:bg-gray-200 py-2 px-4 rounded-full hover:shadow-2xl">
          <svg className="fill-current text-gray-400 h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
