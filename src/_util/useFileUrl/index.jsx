//UrlDownload.js

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

const useFileUrl = (props) => {
  const [link, setLink] = useState();

  useEffect(() => {
    const getLink = async () => {
      const assetLink = await client.fetch(`*[_id == $id][0].url`, {
        id: props.file.asset._ref,
      });
      setLink(assetLink);
    };

    getLink();
  }, []);

  return link;
};

export default useFileUrl;
