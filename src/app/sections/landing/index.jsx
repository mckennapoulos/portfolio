import { Heading } from "@/app/common/text";
import { Hero } from "./hero";

function Landing() {
  return (
    <>
      <Hero />
      <div className="">
        <Heading type="h3">Let's work together</Heading>
        <Heading
          type="h2"
          classnames="font-serif normal-case text-4xl lg:text-5xl tracking-normal w-full md:w-9/12"
        >
          I craft custom digital spaces using
          <br className="hidden 2xl:block" />{" "}
          <span className="italic">thoughtful</span> design,{" "}
          <span className="italic">responsive</span> layout, and
          <br className="hidden 2xl:block" />{" "}
          <span className="italic">clean</span> code with accessibility best
          practices
          <br className="hidden 2xl:block" /> top of mind.
        </Heading>
      </div>
    </>
  );
}

export default Landing;
