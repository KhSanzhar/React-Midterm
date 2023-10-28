import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return(
        <nav className="h-20 flex items-center justify-between px-8 bg-gradient-to-r from-blue-600 to-blue-900 text-white shadow-lg">
          <span className="text-3xl font-extrabold tracking-wider">Twitter</span>
    
          <div className="space-x-6">
            <Link
              to="/"
              className="text-lg font-medium hover:text-gray-300 transition duration-300"
            >
              Products
            </Link>
            <Link
              to="/posts"
              className="text-lg font-medium hover:text-gray-300 transition duration-300"
            >
              Posts
            </Link>
            <Link
              to="/profile"
              className="text-lg font-medium hover:text-gray-300 transition duration-300"
            >
              Profile
            </Link>
          </div>
        </nav>
    )
}