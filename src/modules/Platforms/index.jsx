import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";

const Platforms = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Platforms");
  }, [setHeaderTitle]);
  return <div>Platforms</div>;
};

export default Platforms;
