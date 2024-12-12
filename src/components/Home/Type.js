import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A 2024 graduate currently working as an Application Engineer at Flipkart, with a strong passion for Web Development and Software Engineering."
        ],
        autoStart: true,
        loop: true,
        deleteSpeed:10,
        delay:40,
        
      }}
    />
  );
}

export default Type;
