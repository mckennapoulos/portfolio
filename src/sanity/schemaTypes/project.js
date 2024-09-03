import { defineField, defineArrayMember } from "sanity";
import { BiFile } from "react-icons/bi";

const BATLCaseStudy = {
  id: 2,
  name: "BATL",
  description:
    "As a client of Scout Studio’s fall 2020 roster, a team of 6 designers and developers, lead by 1 project manager, underwent the development of a custom brand identity and information site.",
  tech: ["React", "Contentful", "Figma", "Javascript"],
  team: { role: "Lead Developer", count: 6 },
  duration: "4 months",
  overview: {
    client: `BATL is Northeastern University’s Biopharmaceutical Analysis & Training Lab. They provide worldwide training, research and education to industries including biopharma, government and academia at their facilities based in the US and around the world. In 2020, BATL transformed part of its lab to house the University’s COVID-19 test center for students and faculty. 

        BATL was brought on as a client to Northeastern’s student-led design studio, Scout, to undergo a semester-long design up haul – re-designing their entire brand identity and developing a new site. `,
    problem:
      "BATL is looking for a strong brand identify to solidify their place as a top regulatory global agency. This brand need to amplify their voice and highlight the pillars of their mission. When people visit the site, they need to be able to understand 3 things: 1. what batl is  and why they are important. 2. what batl can do for them. 3. How to reach batl. ",
    impact:
      "Delivered entire site + brand identity guidelines. Completed all requests and x y z. We used contentful, React app, google maps, figma, Font #1, Font #2 to reinvent BATL.  BATL’s online presence doubled. There is clear information and people can find it quickly. ",
  },
  process: `Long text markup`,
  href: "https://batl.cos.northeastern.edu/",
  categories: ["Web design", "Web development", "Branding"],
};

const project = {
  name: "project",
  title: "Project",
  type: "document",
  icon: BiFile,
  fields: [
    {
      name: "title",
      title: "Project title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    },
    {
      name: "href",
      title: "Project link",
      type: "url",
    },
    {
      name: "previewImage",
      title: "Preview image of project",
      type: "object",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Alternative text is required.",
          validation: (Rule) => [Rule.required()],
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        { name: "file", type: "image" },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: "mockup",
      title: "Mockup svg file",
      type: "file",
    },
    defineField({
      name: "categories",
      type: "array",
      title: "Categories of project",
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          type: "object",
          name: "category",
          fields: [{ type: "string", name: "name" }],
        }),
      ],
    }),
    {
      name: "duration",
      title: "Duration of project",
      type: "string",
    },

    {
      name: "team",
      type: "object",
      title: "Project team breakdown",
      fields: [
        { type: "string", name: "role" },
        { type: "number", name: "memberCount" },
      ],
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
    {
      name: "overview",
      type: "object",
      title: "High-level overview of the project",
      fields: [
        { type: "text", name: "client" },
        { type: "text", name: "problem" },
        { type: "text", name: "impact" },
      ],
    },
    {
      name: "process",
      title: "Full process of project",
      description: "Diving deeper into the process of the project",
      type: "object",
      fields: [
        {
          name: "discovery",
          title: "Discovery process block",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "desgin",
          title: "Design process block",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "development",
          title: "Development process block",
          type: "array",
          of: [{ type: "block" }],
        },
      ],
    },
  ],
};

export default project;
