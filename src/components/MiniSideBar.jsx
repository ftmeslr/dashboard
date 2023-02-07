import { useState } from "react";
const MiniSideBar = ({ logos, Add }) => {
  const [activeLogo, setActiveLogo] = useState(logos[0]);
  return (
    <div className="w-20 mt-20">
      {logos.map((item, index) => (
        <div className={`w-full relative `}>
          <div
            className={`absolute bg-[#e40712] w-1 h-12 rounded-r-lg ${
              activeLogo === item ? "" : "hidden"
            }`}
          ></div>
          <div
            key={index}
            className={`w-12 h-12 rounded-full mx-4 my-5 cursor-pointer`}
            onClick={() => setActiveLogo(item)}
          >
            <img
              className="object-cover rounded-full"
              src={item}
              alt="netflix"
            />
          </div>
        </div>
      ))}

      <div className="w-12 h-px bg-[#2f3137] m-auto"></div>
      <div className="w-12 h-12 rounded-full bg-[#222127] mx-4 my-5 relative">
        <Add
          className="m-auto d-block absolute left-0 right-0 bottom-0 top-0 cursor-pointer"
          size="24"
          color="#fff"
        />
      </div>
    </div>
  );
};

export default MiniSideBar;
