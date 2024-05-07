import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";

const Withdrawals = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Withdrawals");
  }, [setHeaderTitle]);
  return <div>Withdrawals</div>;
};

export default Withdrawals;
