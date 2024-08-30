import { Heading, Paragraph } from "@/_components/text";
import Form from "./form";

function Contact() {
  return (
    <div className="mb-32 flex w-full">
      <div className="flex w-full flex-col justify-between md:flex-row-reverse lg:flex-row">
        <div className="w-3/12" />
        <div className="flex w-full flex-col lg:w-8/12">
          <Heading type="h2" serif={true} classnames="mb-6">
            Say hi !
          </Heading>
          <div className="mb-8 w-full lg:w-6/12">
            <Paragraph>
              Your digital business needs, site development, frontend engineer
              opportunities, branding revamp, design help, typography guidance,
              accessibility overhaul, latest UX finds, cool websites, your
              favorite dinner recipe, latest NWSL news, surfing, starting an
              herb garden, the best local WFH coffee spots in San Diego — I want
              to talk about it! <br /> <br /> Leave a message and let’s get the
              conversation going.
            </Paragraph>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
