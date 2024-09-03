import { defineField, defineArrayMember } from "sanity";
import { BiSolidBriefcaseAlt } from "react-icons/bi";

const resume = {
  name: "resume",
  title: "Resume",
  type: "document",
  icon: BiSolidBriefcaseAlt,
  fields: [
    {
      name: "title",
      title: "Role title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "summary",
      title: "Role summary",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "company",
      title: "Company",
      type: "object",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Company name",
          validation: (Rule) => [Rule.required()],
        },
        {
          name: "link",
          type: "url",
          title: "Company site",
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: "date",
      title: "Role duration",
      type: "object",
      fields: [
        {
          name: "isCurrentRole",
          type: "boolean",
          title: "I work here now",
        },
        {
          name: "yearOnly",
          type: "boolean",
          title: "Include year display only",
        },
        {
          name: "startTime",
          type: "date",
          title: "Role start time",
          options: {
            dateFormat: "M-Y",
            calendarTodayLabel: "Today",
          },
        },
        {
          name: "endTime",
          type: "date",
          title: "Role end time",
          options: {
            dateFormat: "M-Y",
            calendarTodayLabel: "Today",
          },
        },
      ],
      validation: (rule) => rule.required(),
    },
    defineField({
      name: "tech",
      type: "array",
      title: "Tech pills for a project",
      of: [
        defineArrayMember({
          type: "object",
          name: "pill",
          fields: [{ type: "string", name: "name" }],
        }),
      ],
    }),
  ],
};

export default resume;
