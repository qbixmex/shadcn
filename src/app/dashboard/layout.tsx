// Reference:
// https://tailwindcomponents.com/component/tailwind-css-admin-dashboard-layout

import Link from "next/link";
import { AvatarComponent, CloseButton, FacebookIcon, GithubIcon, InstagramIcon, LogoIcon, MenuButton, TwitterIcon } from "@/modules";

const links = [
  { name: "home", href: "home" },
  { name: "accordion", href: "accordion" },
  { name: "alert dialog", href: "alert-dialog" },
  { name: "alert", href: "alert" },
  { name: "avatar", href: "avatar" },
  { name: "badge", href: "badge" },
  { name: "button", href: "button" },
  { name: "calendar", href: "calendar" },
  { name: "card", href: "card" },
  { name: "carousel", href: "carousel" },
  { name: "checkbox", href: "checkbox" },
  { name: "combobox", href: "combobox" },
  { name: "command", href: "command" },
  { name: "context menu", href: "context-menu" },
  { name: "dialog", href: "dialog" },
  { name: "input otp", href: "input-otp" },
  { name: "menu bar", href: "menu-bar" },
  { name: "progress", href: "progress" },
  { name: "sheet", href: "sheet" },
  { name: "skeleton", href: "skeleton" },
  { name: "slider", href: "slider" },
];

type Props = { children: React.ReactNode };

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
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
                { true ? <MenuButton /> : <CloseButton /> }
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
      <div className="flex overflow-hidden bg-white pt-16">
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
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4">
              <div className="w-full min-h-[calc(100vh-230px)] bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                {children}
              </div>
            </div>
          </main>

          <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4 print:hidden">
            <ul className="flex items-center flex-wrap mb-6 md:mb-0">
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex sm:justify-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FacebookIcon />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <TwitterIcon />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <InstagramIcon />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <GithubIcon />
              </a>
            </div>
          </footer>
          <p className="text-center text-sm text-gray-500 my-10 print:hidden">
            &copy; 2019-{new Date().getFullYear()}{" "}
            <a href="#" className="hover:underline" target="_blank">
              Themesberg
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );

};

export default DashboardLayout;
