import { connect } from "react-redux";
import ModalAdd from "./ModalAdd";
import {
  addProdActionCreator,
  updateNewProdTextActionCreator,
} from "../redux/product-reducer";

let mapStateToProps = (state) => {

  return {
    product: state.product.product,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addProd: () => {
      dispatch(addProdActionCreator());
    },
    updateNewProdName: (name, count, weight, color, description, foto) => {
      let action = updateNewProdTextActionCreator(
        name,
        count,
        weight,
        color,
        description,
        foto
      );
      dispatch(action);
    },
  };
};

const ModalAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAdd);

export default ModalAddContainer;
