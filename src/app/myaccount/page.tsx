import Link from "next/link"
import Header from "../components/Header";

// import Service from "@/components/Service"
// import BreadCrumb from "@/components/BreadCrumb"

export default function MyAccount() {
  return (
    <><Header />
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Log In</h2>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-gray-700">
              Username or email address
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 border rounded" />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <Link href="/AllProducts">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Log In
            </button>
          </Link>
          <div className="text-sm text-center">
            <Link href="/" className="underline text-blue-500">
              Lost Your Password?
            </Link>
          </div>
        </form>
      </div>
      {/* <Service/> */}
    </div></>
  );
}
