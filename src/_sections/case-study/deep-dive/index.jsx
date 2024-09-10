"use client";
import PortableTextComponent from "@/_components/portable-text";
import { Heading } from "@/_components/text";
import { twMerge } from "tailwind-merge";

const NavLink = ({ contentId, children }) => {
  // const [active, setActive] = useState(null);
  // const sections = document.querySelectorAll("section");

  return (
    <div className="group flex items-center">
      <div className="mb-[8px] mr-2 h-[2px] w-[2px] border border-primary bg-primary transition-all ease-in-out group-hover:w-[32px]" />
      <a
        href={`#${contentId}`}
        className="md:pb-auto pb-2 font-sans text-xl font-normal capitalize tracking-tight text-primary transition-all ease-in-out group-hover:font-bold md:text-2xl"
      >
        {children}
      </a>
    </div>
  );
};

const SectionHeading = ({ text, offsetTop = true }) => (
  <div className="flex align-baseline">
    <div
      className={twMerge(
        "relative top-[1.7rem] h-[2px] w-[32px] border border-primary bg-primary",
        offsetTop && "top-[2.7rem]",
      )}
    />
    <Heading
      type="h5"
      classnames={twMerge(
        "ml-2 font-bold mb-[-3rem] mt-4",
        offsetTop && "mt-8 mb-[-2.5rem]",
      )}
    >
      {text}
    </Heading>
  </div>
);

function DeepDive({ data }) {
  const { discovery, design, development } = data;

  return (
    <div className="mb-16">
      <Heading type="h3" classnames="mb-2">
        Diving Deeper
      </Heading>

      <div className="flex w-full flex-col lg:flex-row">
        <div className="sticky mb-4 mr-4 mt-3 w-full lg:w-2/12">
          {discovery?.length && (
            <NavLink contentId="discovery">Discovery</NavLink>
          )}
          {design?.length && (
            <NavLink contentId="process">Design Process</NavLink>
          )}
          {development?.length && (
            <NavLink contentId="development">Development</NavLink>
          )}
        </div>
        <div className="w-full scroll-smooth lg:w-8/12">
          {discovery && (
            <div id="discovery" className="mb-4 scroll-mt-14">
              <section>
                <SectionHeading text="Discovery" offsetTop={false} />
                <PortableTextComponent
                  blocks={discovery}
                  classnames="first:mt-2"
                />
              </section>
            </div>
          )}
          {process && (
            <div id="process" className="mb-4 scroll-mt-12">
              <section>
                <SectionHeading text="Process" />

                <PortableTextComponent
                  blocks={design}
                  classnames="first:text-pink"
                />
              </section>
            </div>
          )}
          {development && (
            <div id="development" className="mb-4 scroll-mt-12">
              <section>
                <SectionHeading text="Development" />
                <PortableTextComponent
                  blocks={development}
                  classnames="first:mt-2"
                />
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeepDive;
