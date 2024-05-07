import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";

const Admins = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Admins");
  }, [setHeaderTitle]);
  return <div>Admins</div>;
};

export default Admins;
