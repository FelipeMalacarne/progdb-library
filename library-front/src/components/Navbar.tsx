
export const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-indigo-600 px-6 py-4 shadow sm:px-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white md:text-3xl">Library</h1>
        </div>
        <div className="md:hidden">
          <button type="button" className="block text-white hover:text-gray-700 focus:text-gray-700 focus:outline-none">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path className="hidden" fillRule="evenodd" clipRule="evenodd" d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:-mx-4 hidden md:block">
        <a href="#" className="my-1 text-white hover:text-blue-500 md:mx-4 md:my-0">Home</a>
        <a href="#" className="my-1 text-white hover:text-blue-500 md:mx-4 md:my-0">About</a>
        <a href="#" className="my-1 text-white hover:text-blue-500 md:mx-4 md:my-0">Contact</a>
        <a href="#" className="my-1 text-white hover:text-blue-500 md:mx-4 md:my-0">Login</a>
      </div>
    </div>
    )

}
