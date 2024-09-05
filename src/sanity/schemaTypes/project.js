import { defineField, defineArrayMember } from "sanity";
import { BiFile } from "react-icons/bi";

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
          of: [
            { type: "block" },
            {
              type: "image",
            },
          ],
        },
        {
          name: "desgin",
          title: "Design process block",
          type: "array",
          of: [
            { type: "block" },
            {
              type: "image",
            },
          ],
        },
        {
          name: "development",
          title: "Development process block",
          type: "array",
          of: [
            { type: "block" },
            {
              type: "image",
            },
          ],
        },
      ],
    },
  ],
};

export default project;
