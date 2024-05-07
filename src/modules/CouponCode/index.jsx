import React, { useEffect } from "react";
import { useAppContext } from "../../contexts";

const CouponCode = () => {
  const { setHeaderTitle } = useAppContext();

  useEffect(() => {
    setHeaderTitle("Coupon Code");
  }, [setHeaderTitle]);
  return <div>CouponCode</div>;
};

export default CouponCode;
