import React, { useEffect, useState } from "react";

const query = `{
    assetCollection(where : {title_in:["red beanie","wolf cap","brown brim",
    "palm tree cap","brown cowboy","grey brim","green beanie","blue beanie","blue snapback",]}){
      items{
        title,
        description,
        url
      }
    }
  }`;
const useGraph = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACEID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((responese) => responese.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => setError(error.message));
  }, []);

  return [data, error];
};

export default useGraph;
