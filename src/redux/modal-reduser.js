const OPEN_MODAL = "OPEN_MODAL";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  openModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {};
    }
    default:
      return state;
  }
};

export const openModalActionCreator = () => ({ type: OPEN_MODAL });
export const updateNewPostTextActionCreator = (text, productId) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
  productId: productId,
});

export default modalReducer;
