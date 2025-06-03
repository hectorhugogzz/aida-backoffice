import { GlobeIcon, HelpCircleIcon, UserIcon } from "lucide-react";
import React from "react";

export const SearchAndActionSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Dashboard", active: false },
    { label: "Customer", active: false },
    { label: "Subscription", active: true },
    { label: "Setup", active: false },
  ];

  return (
    <header className="w-full bg-[#124158b2] h-[58px]">
      <div className="relative h-full bg-[url(https://c.animaapp.com/oNH5aJml/img/image-3.png)] bg-cover bg-[50%_50%]">
        <div className="h-full bg-[#124158b2]">
          <div className="flex items-center justify-between h-full px-3.5 mx-auto">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                className="h-[52px] w-[150px] object-cover"
                alt="Company Logo"
                src="https://c.animaapp.com/oNH5aJml/img/image-1@2x.png"
              />
            </div>

            {/* Navigation */}
            <nav className="flex items-center justify-center flex-1">
              <ul className="flex space-x-10">
                {navItems.map((item, index) => (
                  <li key={index} className="relative">
                    <a
                      href="#"
                      className={`font-inter block py-4 text-xl text-white text-center ${
                        item.active ? "font-bold" : "font-medium"
                      }`}
                    >
                      {item.label}
                    </a>
                    {item.active && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[129px] h-[3px] bg-white" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-6">
              <button className="text-white">
                <HelpCircleIcon className="w-6 h-6" />
              </button>
              <button className="text-white">
                <GlobeIcon className="w-6 h-6" />
              </button>
              <button className="text-white">
                <UserIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
