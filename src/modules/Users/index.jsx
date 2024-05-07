import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";

const Users = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Users");
  }, [setHeaderTitle]);
  return <div>Users</div>;
};

export default Users;
