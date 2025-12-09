import React from 'react';
import bannerImg1 from '../../../../assets/banner/banner1.webp'

const Banner1 = () => {
    return (
        <div
            className="relative rounded-sm bg-green-100 min-h-[80vh] flex items-center justify-center"
            style={{
                background: `linear-gradient(rgba(0,5,0,0.3), rgba(0,0,0,0.5)), url(${bannerImg1})`,
                backgroundSize: "cover",
               
            }}
        >

            {/* Content */}
            <div className="relative text-center px-6 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight mb-4">
                    Smarter Cities Start With You
                </h1>

                <p className="text-lg md:text-xl text-gray-100 drop-shadow mb-6">
                    CitySheba lets you report public issues instantly. Together, we build cleaner,
                    safer, and more efficient cities — one report at a time.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="btn border-0 bg-green-600 px-8 py-3 text-white hover:bg-green-700 shadow-lg">
                        Report an Issue
                    </button>
                    <button className="btn btn-outline border-green-600  text-white px-8 py-3 hover:bg-white hover:text-green-700 shadow-lg">
                        Track Issues
                    </button>
                </div>
            </div>
        </div>


    );
};

export default Banner1;