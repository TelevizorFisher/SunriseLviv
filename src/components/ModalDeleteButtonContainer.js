import { connect } from "react-redux";
import { deleteActionCreator } from "../redux/product-reducer";
import ModalDeleteButton from "./ModalDeleteButton";

let mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    deleteProd: (deleteId) => {
      let action = deleteActionCreator(deleteId);
      dispatch(action);
    },
  };
};

const ModalDeleteButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalDeleteButton);

export default ModalDeleteButtonContainer;
