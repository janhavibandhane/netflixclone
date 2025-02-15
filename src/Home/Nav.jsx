import logo from "/Images/logo.png";
function Nav() {
  return (
    <>
      {/* changes */}
      <div className="navbar absolute top-0 left-0 md:pl-32 md:pr-32">
        {/* logo */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img src={logo} className=" md:w-40 w-32"></img>
          </a>
        </div>

        {/* buttons */}
        <div className="flex-none space-x-4">

          <select id="options" name="options" className=" bg-transparent text-white border border-white rounded-md md:w-24 md:h-8 w-16 h-6">
            <option value="option1" className=" text-black">English</option>
            <option value="option2" className=" text-black">Hindi</option>
          </select>

          <button className=" md:rounded-lg md:w-20 md:h-10 rounded-md w-16 h-7 bg-red-600 text-white hover:bg-red-800">
            sign in
          </button>
        </div>
      </div>
    </>
  );
}
export default Nav;
