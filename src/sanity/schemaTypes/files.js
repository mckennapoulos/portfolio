import { BiSolidFileDoc } from "react-icons/bi";

const files = {
  name: "files",
  title: "Files",
  type: "document",
  icon: BiSolidFileDoc,
  fields: [
    {
      name: "name",
      title: "File name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "file",
      title: "File upload",
      type: "file",
    },
  ],
};

export default files;
