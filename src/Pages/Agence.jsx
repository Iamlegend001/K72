import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "/Images/Image (1).jpg",
    "/Images/Image (2).jpg",
    "/Images/Image (3).jpg",
    "/Images/Image (4).jpg",
    "/Images/Image (5).jpg",
    "/Images/Image (6).jpg",
    "/Images/Image (7).jpg",
    "/Images/Image (8).jpg",
    "/Images/Image (9).jpg",
    "/Images/Image (10).jpg",
    "/Images/Image (11).jpg",
    "/Images/Image (12).jpg",
    "/Images/Image (13).jpg",
    "/Images/Image (14).jpg",
    "/Images/Image (15).jpg",
    "/Images/Image (16).jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 36%",
        end: "top -70%",

        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: function (elem) {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }

          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="bg-black">
      {" "}
      <div className="section1 relative py-1">
        <div
          ref={imageDivRef}
          className="h-[20vw] w-[15vw] overflow-hidden rounded-4xl absolute top-96 left-[40vw]"
        >
          <img
            className="h-full w-full object-cover"
            ref={imageRef}
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className=" relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-6xl ">
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
