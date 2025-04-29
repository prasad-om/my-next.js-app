import Image from "next/image"
import { Search, Settings, Bell, ChevronDown, X, ArrowRight, Users } from "lucide-react"
import Link from "next/link"

export default function PostmanUI() {
  return (
    <div className="flex flex-col h-screen bg-[#212121] text-white">
      {/* Top Navigation Bar */}
      <header className="flex items-center px-4 h-12 bg-[#262626] border-b border-[#3d3d3d]">
        <div className="flex items-center space-x-4">
          <Link href="#" className="font-medium">
            Home
          </Link>
          <div className="flex items-center space-x-1">
            <Link href="#" className="font-medium">
              Workspaces
            </Link>
            <ChevronDown className="w-4 h-4" />
          </div>
          <Link href="#" className="font-medium">
            API Network
          </Link>
        </div>

        <div className="flex items-center mx-4 flex-1 max-w-md relative">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search Postman"
              className="w-full py-1.5 pl-10 pr-4 bg-[#3d3d3d] rounded text-sm focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-gray-400">
              <span>Ctrl</span>
              <span className="ml-1">K</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Settings className="w-5 h-5 text-gray-300" />
          <Bell className="w-5 h-5 text-gray-300" />
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-white font-medium">O</span>
          </div>
          <button className="flex items-center space-x-1 bg-[#3d3d3d] px-3 py-1 rounded">
            <span>Upgrade</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </header>

      
      <div className="flex flex-1 overflow-hidden">
        
        <div className="w-64 border-r border-[#3d3d3d] flex flex-col">
          <div className="p-4 flex flex-col items-center border-b border-[#3d3d3d]">
            <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center mb-2">
              <span className="text-white text-3xl font-bold">O</span>
            </div>
            <h2 className="font-bold text-lg">OMPRASAD</h2>
            <p className="text-sm text-gray-400">omprasad-7255852.postman.co</p>

            <div className="flex items-center mt-4 space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white font-medium">O</span>
              </div>
              <button className="bg-orange-500 text-white px-4 py-1 rounded text-sm">Invite</button>
            </div>
          </div>

          <div className="p-4 border-b border-[#3d3d3d]">
            <h3 className="font-medium mb-2">Workspaces</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">Private API Network</li>
              <li className="text-sm text-gray-300">Integrations</li>
              <li className="text-sm text-gray-300">Reports</li>
            </ul>
          </div>

          <div className="p-4">
            <ul className="space-y-2">
              <li className="text-sm text-gray-300 flex items-center">
                <span>What is Postman</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </li>
              <li className="text-sm text-gray-300 flex items-center">
                <span>How to Publish</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </li>
              <li className="text-sm text-gray-300 flex items-center">
                <span>Learning Center</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </li>
              <li className="text-sm text-gray-300 flex items-center">
                <span>Support Center</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </li>
              <li className="text-sm text-gray-300 flex items-center">
                <span>Postman Enterprise</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </li>
              <li className="text-sm text-gray-300 flex items-center">
                <span>Download Desktop App</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </li>
            </ul>
          </div>
        </div>

        
        <div className="flex-1 overflow-y-auto p-6">
          
          <div className="bg-[#2d2d2d] rounded-md p-6 mb-8 flex relative">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Set your team up for success</h2>
              <p className="text-gray-300 mb-4 max-w-md">
                Use your personalized 'Getting started' guide to help your team achieve its goals faster.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Get Started</button>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="w-64 h-32 relative">
                <Image
                  src="/placeholder.svg?height=128&width=256"
                  alt="Astronaut illustration"
                  width={256}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
            <button className="absolute top-2 right-2 text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6">Get started</h2>

            <div className="grid grid-cols-1 gap-4">
              
              <div className="bg-[#2d2d2d] rounded-md p-4 flex items-start">
                <div className="w-12 h-12 bg-[#1a3a47] rounded flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-[#4db6ac]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L20 12L12 20M4 12H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">Send an API request</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Quickly send and test any type of API request: HTTP, GraphQL, gRPC, WebSocket, Socket.IO, or MQTT
                  </p>
                </div>
                <button className="bg-[#3d3d3d] hover:bg-[#4d4d4d] text-white px-4 py-2 rounded whitespace-nowrap">
                  New Request
                </button>
              </div>

              
              <div className="bg-[#2d2d2d] rounded-md p-4 flex items-start">
                <div className="w-12 h-12 bg-[#3e2723] rounded flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-[#ff8a65]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4V16M12 16L8 12M12 16L16 12M6 20H18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">Import APIs and collections</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Easily import your existing APIs, collections, files, folders, cURL commands, raw text, or URLs
                  </p>
                </div>
                <button className="bg-[#3d3d3d] hover:bg-[#4d4d4d] text-white px-4 py-2 rounded">Import</button>
              </div>
            </div>
          </div>

          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6">Recently visited workspaces</h2>

            <div className="bg-[#2d2d2d] rounded-md p-4 flex items-center">
              <div className="w-8 h-8 bg-[#3d3d3d] rounded flex items-center justify-center mr-4">
                <Users className="w-4 h-4 text-gray-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">OMPRASAD's Workspace</h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white font-medium">O</span>
              </div>
            </div>
          </div>

        
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Discover what you can do in Postman</h2>
              <Link href="#" className="text-blue-400 flex items-center">
                View all
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <p className="text-gray-400 mb-4">Explore the full potential of Postman with collection templates.</p>

    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              
              <div className="bg-[#2d2d2d] rounded-md p-6 hover:bg-[#333333] transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded mb-4 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">REST API basics</h3>
                <p className="text-gray-400 text-sm">Get up to speed with testing REST APIs on Postman.</p>
              </div>

              
              <div className="bg-[#2d2d2d] rounded-md p-6 hover:bg-[#333333] transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded mb-4 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L19 8V16L12 20L5 16V8L12 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12L19 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12L12 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12L5 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">API prototyping</h3>
                <p className="text-gray-400 text-sm">Get up to speed with building an API prototype on Postman.</p>
              </div>

              
              <div className="bg-[#2d2d2d] rounded-md p-6 hover:bg-[#333333] transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded mb-4 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Functional testing</h3>
                <p className="text-gray-400 text-sm">
                  Verify your API's accuracy, reliability, and compliance with functional specifications.
                </p>
              </div>

              
              <div className="bg-[#2d2d2d] rounded-md p-6 hover:bg-[#333333] transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded mb-4 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 3L21 11L13 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 11H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">WebSocket basics</h3>
                <p className="text-gray-400 text-sm">Get hands-on with WebSocket testing on Postman.</p>
              </div>

              
              <div className="bg-[#2d2d2d] rounded-md p-6 hover:bg-[#333333] transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded mb-4 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 2V8H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 13H8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 17H8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 9H9H8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Blueprint documentation</h3>
                <p className="text-gray-400 text-sm">Help your API consumers onboard faster.</p>
              </div>

              
              <div className="bg-[#2d2d2d] rounded-md p-6 hover:bg-[#333333] transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded mb-4 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 20V10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20V4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 20V14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Data visualization</h3>
                <p className="text-gray-400 text-sm">
                  Turn complex response data into an easy-to-understand visualization.
                </p>
              </div>
            </div>
          </div>

          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Explore popular APIs</h2>
              <Link href="#" className="text-blue-400 flex items-center">
                Explore all
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            
            <div className="space-y-6">
              
              <div className="border-b border-[#3d3d3d] pb-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#2d2d2d] rounded flex items-center justify-center mr-4">
                    <span className="text-xs text-gray-300">HPE</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">New HPE Aruba Networking Central</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 7L12 12M12 12L17 7M12 12V21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20 14C20 17.866 16.866 21 13 21H12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4 14C4 17.866 7.13401 21 11 21H12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-gray-400">Fork</span>
                          <span className="text-sm text-gray-400">7</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 12C2 12 5.63636 5 12 5C18.3636 5 22 12 22 12C22 12 18.3636 19 12 19C5.63636 19 2 12 2 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-gray-400">Watch</span>
                          <span className="text-sm text-gray-400">7</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 space-x-2">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm text-gray-400">By HPE Aruba Networking</span>
                        <svg
                          className="w-4 h-4 text-blue-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12L11 14L15 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-400">Updated on 23 Apr, 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="border-b border-[#3d3d3d] pb-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#2d2d2d] rounded flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 8L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">FlashDocs API</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 7L12 12M12 12L17 7M12 12V21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20 14C20 17.866 16.866 21 13 21H12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4 14C4 17.866 7.13401 21 11 21H12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-gray-400">Fork</span>
                          <span className="text-sm text-gray-400">1</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 12C2 12 5.63636 5 12 5C18.3636 5 22 12 22 12C22 12 18.3636 19 12 19C5.63636 19 2 12 2 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-gray-400">Watch</span>
                          <span className="text-sm text-gray-400">3</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mt-2">
                      Programmatically generate, customize, and manage beautiful, brand-consistent slide decks — all
                      from code
                    </p>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className="text-sm text-gray-400">By FlashDocs</span>
                      <span className="text-sm text-gray-400">Updated on 24 Apr, 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="border-b border-[#3d3d3d] pb-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#2d2d2d] rounded flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-indigo-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">API Factus</h3>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 7L12 12M12 12L17 7M12 12V21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20 14C20 17.866 16.866 21 13 21H12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4 14C4 17.866 7.13401 21 11 21H12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-gray-400">Fork</span>
                          <span className="text-sm text-gray-400">500+</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 12C2 12 5.63636 5 12 5C18.3636 5 22 12 22 12C22 12 18.3636 19 12 19C5.63636 19 2 12 2 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm text-gray-400">Watch</span>
                          <span className="text-sm text-gray-400">579</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className="text-sm text-gray-400">By Factus API</span>
                      <span className="text-sm text-gray-400">Updated on 24 Apr, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
