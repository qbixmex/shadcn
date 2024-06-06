// Reference:
// https://tailwindcomponents.com/component/tailwind-css-admin-dashboard-layout

import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from "@/modules";
import { AsideNavigation, Navigation, links } from "@/components";

type Props = { children: React.ReactNode };

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="flex overflow-hidden bg-white pt-16">
        <AsideNavigation links={links} />
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
