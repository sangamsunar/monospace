import React from "react";
import { Link } from "react-router";
import { MoonIcon, MoonStar, PlusIcon } from "lucide-react";
const Navbar = () => {
  return (
    <header className="border-b-2 border-base-content/10">
      <div className="mx-auto max-w-6xl p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-primary font-mono tracking-widest">
            MONOSPACE
          </h1>
          <div className="flex justify-center items-center gap-x-2">
            <Link to={"/create"} className="px-4 btn btn-primary text-">
              <PlusIcon className="size-6" /> Create
            </Link>
            {/* <MoonIcon className="size=6" color="white" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
