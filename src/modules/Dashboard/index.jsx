import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";

const Dashboard = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Dashboard");
  }, [setHeaderTitle]);
  return <div>Dashboard</div>;
};

export default Dashboard;
