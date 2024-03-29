import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <div className="border border-stone-900 rounded-md overflow-hidden w-full m-2 p-10 max-w-2xl min-w-2xl">
        <h1 className="font-bold  text-4xl font-sans">Mishal Abdullah</h1>
        <p className="font-mono mb-10">Developer.Writer.Designer</p>
      </div>
      <p className="max-w-xl">
        I do have an intriguing journey, and I do believe that my behaviour is
        something like to a monkey jumping from one field to another. started
        out with Linux, moved on to data analysis, upgraded to data science,
        then moved on to python development, then web development, and is now,
        hopefully, settled in Web3.
      </p>
      <br></br>
      <p className="max-w-xl">
        Along the way started writing blogs which you can find
        <a
          className="text-cyan-600 underline hover:underline-offset-4 m-1"
          href="https://medium.com/@prinux"
          target="blank"
        >
          HERE
        </a>
        and then you can find all my projects over{" "}
        <a
          className="text-cyan-600 underline hover:underline-offset-4 m-1"
          href="https://github.com/Mishalabdullah"
          target="blank"
        >
          HERE
        </a>{" "}
        and my youtube channel over{" "}
        <a
          className="text-cyan-600 underline hover:underline-offset-4 m-1"
          href="https://www.youtube.com/@Prinux."
          target="blank"
        >
          HERE
        </a>
        .I may or may not continue it (alpha stage).
      </p>
    </div>
  );
}
export default Intro;
