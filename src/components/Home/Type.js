import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A 2024 graduate with a strong interest in Web Development and Software Engineering.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed:50,
      }}
    />
  );
}

export default Type;
