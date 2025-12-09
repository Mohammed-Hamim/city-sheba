import React, {  } from "react";
import { FaSearch } from "react-icons/fa";
 
 

const AllIssuePage = ( ) => {      
    return (
        <div>
            <div className=" px-6 sm:px-12 lg:px-24     text-center">
                {/* Slogan */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                    Track City Issues Instantly
                </h1>

                {/* Short Description */}
                <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Search, filter, and monitor public issues in your city. Stay informed and contribute to making your city cleaner and safer.
                </p>

                {/* Search Form */}
                <form
                  
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
                >
                    <input
                        type="text"
                        placeholder="Search by title, category, or location..."
                       
                        className="flex-1 border border-gray-300 rounded-full px-5 py-3 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 text-white text-lg px-6 py-3 rounded-full hover:bg-green-700 transition flex items-center gap-2"
                    >
                        <FaSearch /> Search
                    </button>
                </form>
            </div>
            <div>
                
            </div>
        </div>

    );
};

export default AllIssuePage;
