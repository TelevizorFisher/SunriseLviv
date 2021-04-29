import { connect } from "react-redux";
import SingleProduct from "./SingleProduct";

let mapStateToProps = (state) => {
  return {
	product: state.product.product,
  };
};
const SingleProductContainer = connect(mapStateToProps)(SingleProduct);

export default SingleProductContainer;
