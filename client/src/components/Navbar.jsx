import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white p-4 flex justify-between">
            <Link to="/" className="text-xl font-bold">🌱 Mini Plant Store</Link>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/admin">Add Plant</Link>
            </div>
        </nav>
    );
};

export default Navbar;
