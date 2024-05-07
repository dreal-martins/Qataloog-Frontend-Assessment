import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";

const AcademicLevels = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Academic Levels");
  }, [setHeaderTitle]);
  return <div>AcademicLevels</div>;
};

export default AcademicLevels;
