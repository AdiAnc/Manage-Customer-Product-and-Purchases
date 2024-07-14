import { useSelector } from "react-redux";
import { calculateTotalAmountPurchasedProduct } from "../utils.jsx/utils";
const TotalPrice = (product) => {
  const purchases = useSelector((state) => state.purchases.purchases);

  return (
    <div
      style={{
        border: "3px solid red",
        width: "150px",
        height: "50px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      Total Price: {calculateTotalAmountPurchasedProduct(product.data,purchases)}
    </div>
  );
};

export default TotalPrice;
