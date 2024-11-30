import React from "react";
import Navbar from "./navbar";

const story = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="  flex gap-3 ">
        <h5> Home </h5>
        <h5>/</h5>
        <h5>About</h5>
      </div>
      <div className="text-3xl m-20 ">
        <h1>Our Story</h1>
      </div>
      <div className="flex  flex-col text-start m-20">
        <h4 className="size-60">
          Once upon a time, in a not-so-distant future, there was a small but
          ambitious e-commerce startup called Gizmo Galaxy. It was founded by a
          young tech enthusiast named Sarah, who dreamed of creating a one-stop
          shop for all things gadgets and gizmos.
        </h4>
        <h4 className="size-60  ">
          Sarah had always been fascinated by the world of technology. From
          wireless earbuds to drones, from smartwatches to virtual reality
          headsets—if it beeped, buzzed, or flashed, she was interested. But as
          Sarah navigated through her daily life, she realized something: the
          online stores she shopped at were a mess. Some were too niche,
          focusing only on specific gadgets. Others had endless pages of
          irrelevant products
        </h4>
        <div className="size-80  m-80 h-60">
          <img
            src="https://img.freepik.com/free-photo/surprised-girl-pink-culottes-posing-with-trolley-full-multi-colored-packages-with-new-clothes_197531-14251.jpg?t=st=1732896213~exp=1732899813~hmac=f4314952c120d8367e5f748ca3ebc9692b07f7c506da56ad329a0dba9fccfd60&w=2000"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default story;
