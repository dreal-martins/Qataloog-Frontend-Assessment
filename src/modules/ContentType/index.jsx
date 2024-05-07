import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";

const ContentType = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Content Type");
  }, [setHeaderTitle]);
  return <div>ContentType</div>;
};

export default ContentType;
