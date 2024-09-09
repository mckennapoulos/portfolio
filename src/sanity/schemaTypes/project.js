import { defineField, defineArrayMember } from "sanity";
import { BiFile, BiSolidMegaphone, BiHighlight } from "react-icons/bi";

const customImage = {
  name: "customImage",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Alternative Text",
      name: "alt",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      title: "Caption",
      name: "caption",
      type: "string",
    },
  ],
};

const BlockElement = {
  type: "block",
  styles: [
    {
      title: "Normal",
      value: "normal",
    },
    {
      title: "H5",
      value: "h5",
      component: ({ children }) => (
        <span className="font-sans text-3xl tracking-tight">{children}</span>
      ),
    },
    {
      title: "H6",
      value: "h6",
      component: ({ children }) => (
        <span className="font-sans text-3xl font-bold tracking-tight text-primary">
          {children}
        </span>
      ),
    },
    {
      title: "Quote",
      value: "blockquote",
      component: ({ children }) => (
        <span className="font-sans text-5xl text-primary">"{children}"</span>
      ),
    },
  ],
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
      { title: "Emphasis", value: "em" },
      { title: "Underline", value: "underline" },
      {
        title: "Highlight",
        value: "highlight",
        icon: BiHighlight,
        component: ({ children }) => (
          <span className="text-primary">{children}</span>
        ),
      },
    ],
  },
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
      name: "slug",
      title: "Project url slug",
      type: "string",
    },
    {
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    },
    {
      name: "linkOnly",
      title: "Only show as link",
      type: "boolean",
      initialVale: false,
    },
    {
      name: "href",
      title: "Project link",
      type: "url",
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
      title: "Mockup image",
      type: "image",
    },
    defineField({
      name: "overview",
      type: "array",
      title: "High-level overview section",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          fields: [
            { type: "string", name: "title" },
            {
              name: "content",
              title: "Section content",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
          ],
        }),
      ],
    }),
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
          of: [BlockElement, customImage],
        },
        {
          name: "design",
          title: "Design process block",
          type: "array",
          of: [
            BlockElement,
            customImage,
            defineArrayMember({
              type: "object",
              name: "callout",
              title: "callout section!",
              options: { hotspot: true },
              fields: [
                {
                  name: "heading",
                  type: "string",
                  title: "heading for callout",
                },
                {
                  name: "content",
                  type: "array",
                  of: [{ type: "block" }],
                },
              ],
            }),
          ],
        },
        {
          name: "development",
          title: "Development process block",
          type: "array",
          of: [BlockElement, customImage],
        },
      ],
    },
    {
      name: "screens",
      title: "Project screens",
      type: "object",
      fields: [
        {
          name: "desktop",
          title: "Desktop screens",
          type: "array",
          of: [customImage],
        },
        {
          name: "mobile",
          title: "Mobile screens",
          type: "array",
          of: [customImage],
        },
        {
          name: "tablet",
          title: "Tablet screens",
          type: "array",
          of: [customImage],
        },
      ],
    },
  ],
};

export default project;
