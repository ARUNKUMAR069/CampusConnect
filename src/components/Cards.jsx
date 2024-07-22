import React from 'react'

const Cards = ({
    title,
    images = 'src/assets/profile.png',
    Name = "Arun Kumar",
    FathersName = "Hardeep Singh",
    Dob = "12/04/2005",
    Address = "Vill-Haler, Talwara Township, Hoshiarpur",
    RollNo = 2201635,
    MobileNumber = 6284445269,
    Course = "B.Tech C.S.E",
}) => {
    return (
        <div className="box w-full md:w-[400px] h-[250px] rounded-lg overflow-hidden bg-[#FEEFAD] hover:shadow-xl transition duration-300 ease-in-out">
            <div className="bg-[#03AED2] text-white py-2 px-4">
                <h2 className="text-xl font-medium">{title}</h2>
            </div>
            <div className="p-4 flex gap-4">
                {/* LEFT SIDE */}
                <div className="w-1/3 flex justify-center items-center bg-[#68D2E8] rounded-l-lg">
                    <img className="w-24 h-24 rounded-full" src={images} alt="Profile" />
                </div>
                {/* RIGHT SIDE */}
                <div className="w-2/3 flex flex-col justify-center">
                    {/* NAME */}
                    <div className="mb-2">
                        <span className="text-sm text-gray-600">Name:</span>
                        <span className="text-sm font-medium">{Name}</span>
                    </div>
                    {/* FATHERS NAME */}
                    <div className="mb-2">
                        <span className="text-sm text-gray-600">S/D/O:</span>
                        <span className="text-sm font-medium">{FathersName}</span>
                    </div>
                    {/* DOB */}
                    <div className="mb-2">
                        <span className="text-sm text-gray-600">D.O.B:</span>
                        <span className="text-sm font-medium">{Dob}</span>
                    </div>
                    {/* ADRESS */}
                    <div className="mb-2">
                        <span className="text-sm text-gray-600">Address:</span>
                        <span className="text-sm font-medium">{Address}</span>
                    </div>
                    {/* ROLL NO */}
                    <div className="mb-2">
                        <span className="text-sm text-gray-600">Uni.Roll.No:</span>
                        <span className="text-sm font-medium">{RollNo}</span>
                    </div>
                    {/*  STUDENT PHONE NUMBER */}
                    <div className="mb-2">
                        <span className="text-sm text-gray-600">Phone:</span>
                        <span className="text-sm font-medium">{MobileNumber}</span>
                    </div>
                    {/* BRANCH OR COURSE */}
                    <div className="mb-2">
                        <span className="text-sm text-gray-600">Branch:</span>
                        <span className="text-sm font-medium">{Course}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards
