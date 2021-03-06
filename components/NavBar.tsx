import Link from 'next/link'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTheme } from 'next-themes'
function Navbar() {
  const router = useRouter()
  const [showModal, setShowModal] = useState('')
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const [showButton, setShowButton] = useState(true)

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }
  return (
    <div className="sticky top-0 border-b-2 border-t-2 shadow-lg dark:border-gray-800 ">
      <nav className="rounded  border-gray-200 bg-white  px-2 py-2.5 dark:border-gray-900 dark:bg-gray-900 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between md:flex-row">
          <div className="flex items-center">
            <span className="ml-2 self-center whitespace-nowrap text-xl font-semibold text-black dark:text-gray-200  sm:ml-0">
              Pokereds
            </span>
          </div>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`  h-6 w-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setShowModal('visible')}
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`${
                showModal == 'visible' ? 'visible' : 'hidden'
              } h-6 w-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setShowModal('hidden')}
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              showModal == 'visible' ? 'visible' : 'hidden'
            } w-full md:block md:w-auto`}
            id="mobile-menu"
          >
            <ul className=" mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-2 md:text-sm md:font-medium">
              <Link href="/">
                <a
                  className="mx-2 mb-1  block rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-2 px-3 text-center text-sm font-medium text-white hover:bg-gradient-to-bl  focus:outline-none focus:ring-4 focus:ring-green-200 dark:from-green-300 dark:to-blue-400  dark:text-teal-900 dark:focus:ring-green-800"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>

              <Link href="/weather">
                <a className="mx-2 mb-1  block rounded-lg bg-gradient-to-br from-green-400 to-blue-600  p-2 px-3 text-center text-sm font-medium text-white hover:bg-gradient-to-bl  focus:outline-none focus:ring-4 focus:ring-green-200 dark:from-green-300 dark:to-blue-400  dark:text-teal-900 dark:focus:ring-green-800">
                  Weather
                </a>
              </Link>
              <Link href="/House">
                <a className="mx-2 mb-1  block rounded-lg bg-gradient-to-br from-green-400 to-blue-600  p-2 px-3 text-center text-sm font-medium text-white hover:bg-gradient-to-bl  focus:outline-none focus:ring-4 focus:ring-green-200 dark:from-green-300 dark:to-blue-400  dark:text-teal-900 dark:focus:ring-green-800">
                  Portfolio
                </a>
              </Link>
           
                {/* from-green-400 to-blue-600    hover:bg-gradient-to-bl  focus:outline-none focus:ring-4 focus:ring-green-200 dark:from-green-300 dark:to-blue-400  dark:text-teal-900 dark:focus:ring-green-800 */}
                {showButton && (
                  <a
                    onClick={scrollToTop}
                    className="mx-2 mb-1 block rounded-lg text-white p-2 px-3 text-center text-sm font-medium bg-blue-700  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      ></path>
                    </svg>
                  </a>
                )}
              
              <a
                onClick={toggleTheme}
                className="mx-2 mb-1 rounded-lg p-2 text-center text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:mx-0 sm:mb-0 "
              >
                <button>
                  {theme == 'light' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                </button>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
