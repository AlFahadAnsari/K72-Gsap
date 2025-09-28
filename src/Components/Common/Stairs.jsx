import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = () => {
  const PathName = useLocation().pathname;
  const ParentDiv = useRef(null);
  const stairsRef = useRef([]);

  useGSAP(() => {
    gsap.set(stairsRef.current, {
      clearProps: "all",
    });

    const tl = gsap.timeline();

    tl.set(ParentDiv.current, { display: "block" });

    tl.from(stairsRef.current, {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });

    tl.to(stairsRef.current, {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.set(ParentDiv.current, { display: "none" });

    return () => {
      tl.kill();
    };
    
  }, [PathName]);

  return (
    <div ref={ParentDiv} className="h-screen w-full fixed z-20 pointer-events-none">
      <div className="h-full w-full flex">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (stairsRef.current[index] = el ) }
            className="stair h-full w-1/5 bg-black"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Stairs;
