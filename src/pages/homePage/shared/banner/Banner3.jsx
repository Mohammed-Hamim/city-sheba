import React from 'react';
import bannerImg3 from '../../../../assets/banner/banner3.jpeg';

const Banner3 = () => {
    return (
        <div
            className="relative  bg-green-100 min-h-[80vh] flex items-center rounded-sm justify-center"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${bannerImg3})`,
                backgroundSize: "cover",

                backgroundPosition: "center",
            }}
        >

            {/* Content */}
            <div className="relative text-center px-6 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight mb-4">
                    Together for a Better City
                </h1>

                <p className="text-lg md:text-xl text-gray-100 drop-shadow mb-6">
                    Join thousands of citizens in reporting issues and making your city cleaner,
                    safer, and more efficient. CitySheba makes civic participation easy.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="btn w-[150px] bg-green-600 border-0 px-8 py-3 text-gray-800 font-bold hover:bg-green-700 shadow-lg">
                        Join Now
                    </button>
                    <button className="btn w-[150px] btn-outline  border-green-600 text-white px-8 py-3 hover:bg-white hover:text-green-700 shadow-lg">
                        Discover
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner3;
