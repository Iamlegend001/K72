import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center pt-5">
      <div className="text-[9.5vw] justify-center uppercase leading-[8vw]">L'étincelle</div>
      <div className="text-[9.5vw] justify-center uppercase  flex items-first leading-[8vw]">
        qu{" "}
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-3">
          <Video />
        </div>
        igénère
      </div>
      <div className="text-[9.5vw] justify-center uppercase leading-[8vw]">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
