import { BiText } from "react-icons/bi";

const heading = {
  name: "heading",
  title: "Heading",
  type: "document",
  icon: BiText,
  fields: [
    {
      name: "title",
      title: "Version title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "landing",
      title: "Landing headings",
      type: "object",
      fields: [
        {
          name: "h3",
          type: "string",
          title: "H3",
          initialValue: "Let's work together",
        },
        {
          name: "description",
          type: "text",
          title: "Description for landing",
        },
      ],
    },
    {
      name: "project",
      title: "Projects headings",
      type: "object",
      fields: [
        {
          name: "h3",
          type: "string",
          title: "H3",
          initialValue: "Projects",
        },
        {
          name: "description",
          type: "text",
          title: "Description for projects",
        },
      ],
    },
    {
      name: "resume",
      title: "Resume headings",
      type: "object",
      fields: [
        {
          name: "h3",
          type: "string",
          title: "H3",
          initialValue: "Resume",
        },
        {
          name: "description",
          type: "text",
          title: "Description for resume",
        },
        {
          name: "resume",
          type: "file",
          title: "Resume",
        },
      ],
    },
    {
      name: "contact",
      title: "Contact headings",
      type: "object",
      fields: [
        {
          name: "cta",
          type: "string",
          title: "Section cta",
          initialValue: "Say hi !",
        },
        {
          name: "description",
          type: "text",
          title: "Description for contact",
        },
      ],
    },
  ],
};

export default heading;
