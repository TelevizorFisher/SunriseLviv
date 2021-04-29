import { connect } from "react-redux";
import { SortNameActionCreator, SortCountActionCreator } from "../../redux/product-reducer";
import MyProduct from "./MyProduct";

let mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};
let mapDispatchToProps = (dispatch) => {
	return {
	  SortNameProd: () => {
		 let action = SortNameActionCreator();
		 dispatch(action);
	  },
	  SortCountProd: () => {
		let action = SortCountActionCreator();
		dispatch(action);
	 },
	};
 };
const MyProductContainer = connect(mapStateToProps, mapDispatchToProps)(MyProduct);

export default MyProductContainer;
