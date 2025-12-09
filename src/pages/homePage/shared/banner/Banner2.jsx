import React from 'react';
import bannerImg2 from '../../../../assets/banner/banner2.jpeg';

const Banner2 = () => {
    return (
        <div
            className="relative bg-green-100 min-h-[80vh] flex items-center justify-center"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bannerImg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            {/* Content */}
            <div className="relative text-center px-6 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight mb-4">
                    Your Voice, Your City
                </h1>

                <p className="text-lg md:text-xl text-gray-100 drop-shadow mb-6">
                    Report potholes, broken streetlights, and other issues instantly. CitySheba connects
                    citizens and authorities for faster, smarter city services.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="btn btn-primary px-8 py-3 text-white hover:bg-green-700 shadow-lg">
                        Report Now
                    </button>
                    <button className="btn btn-outline btn-white px-8 py-3 hover:bg-white hover:text-green-700 shadow-lg">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner2;
