import { AvatarComponent, CloseButton, LogoIcon, MenuButton } from "@/modules";
import Link from "next/link";
import { LinkItem } from "./links";
import { FC } from "react";

export const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            >
              {/* TODO: Implement State */}
              {true ? <MenuButton /> : <CloseButton />}
            </button>
            <a
              href="#"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              <LogoIcon />
              <span className="self-center whitespace-nowrap ml-2">
                {" "}
                ShadCN | UI
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <AvatarComponent />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const AsideNavigation: FC<{links: LinkItem}> = ({ links }) => {
  return (
    <aside
      id="sidebar"
      className="fixed hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 borderR border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base capitalize text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                  >
                    <span className="ml-3">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};