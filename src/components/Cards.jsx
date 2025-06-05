import React from "react";

const HoverCard = () => {
  return (
    <div className="group mt-10 ml-10 relative w-[300px] h-[320px] rounded-xl overflow-hidden shadow-md bg-white">

      <div className="relative h-[75%] group-hover:h-full transition-all duration-700 ease-in-out overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/500px-Image_created_with_a_mobile_phone.png"
          alt="Government"
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="absolute bottom-0 p-4 w-full z-10">
   
        <div
          className="absolute inset-0 rounded-b-xl -z-10
                     backdrop-blur-sm opacity-0 group-hover:opacity-40
                     transition-opacity duration-700"
        ></div>

        <h3 className="text-lg font-semibold transition-colors duration-700 group-hover:text-white text-black">
          Government
        </h3>
        <p className="text-sm transition-colors duration-700 group-hover:text-white text-gray-600">
          Streamline Government HR With Automation For Efficiency And Compliance.
        </p>
      </div>
    </div>
  );
};

export default HoverCard;
