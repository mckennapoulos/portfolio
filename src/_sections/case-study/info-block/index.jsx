import Button from "@/_components/button";
import Pills from "@/_components/pill";
import { Label, Paragraph } from "@/_components/text";
import { twMerge } from "tailwind-merge";
import MemberIcon from "../../../../public/icons/member.svg";
import Image from "next/image";

export const InfoGroup = ({ label, text, classnames }) => {
  const cx = twMerge("mb-3", classnames);
  return (
    <div className={cx}>
      <Label classnames="uppercase">{label}</Label>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

function InfoBlock({ description, tech, team: { role, count }, duration }) {
  const memberCount = Array.apply("icon", Array(count));
  return (
    <div className="mb-10 lg:mb-auto">
      <div className="flex w-full flex-col-reverse justify-between rounded-2xl bg-tertiary px-5 py-8 md:flex-row md:px-9 md:py-12">
        <div className="flex w-full flex-col md:w-6/12">
          <Paragraph>{description}</Paragraph>
          <Pills list={tech} />
        </div>
        <div className="flex w-full flex-col md:w-5/12">
          <InfoGroup label="Role" text={role} />
          <div className="mb-2 flex w-full flex-row-reverse md:mb-auto md:block">
            <div className="mb-3 w-6/12">
              <Label classnames="uppercase mb-1">Team</Label>
              <div className="flex">
                {memberCount.map((i) => {
                  return (
                    <div key={i} className="">
                      <Image
                        src={MemberIcon}
                        alt="Human Icon"
                        className="ml-1"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mb-3 w-6/12 md:w-auto">
              <InfoGroup label="Duration" text={duration} />
            </div>
          </div>
        </div>
      </div>
      <Button text="Visit Site" classnames="block md:hidden mt-4" />
    </div>
  );
}

export default InfoBlock;
