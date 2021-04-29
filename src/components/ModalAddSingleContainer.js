import { connect } from "react-redux";
import {
  UpdateProdActionCreator,
  updateProdTextActionCreator,
} from "../redux/product-reducer";
import ModalAddSingle from "./ModalAddSingle";

let mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateProd: () => {
      dispatch(UpdateProdActionCreator());
    },
    updateProdName: (
      name,
      count,
      weight,
      color,
      description,
      foto,
      productId
    ) => {
      let action = updateProdTextActionCreator(
        name,
        count,
        weight,
        color,
        description,
        foto,
        productId
      );
      dispatch(action);
    },
  };
};

const ModalAddSingleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAddSingle);

export default ModalAddSingleContainer;
