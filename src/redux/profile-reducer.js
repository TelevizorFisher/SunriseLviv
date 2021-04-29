const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_POST_NAME = "UPDATE_NEW_POST_NAME";

let initialState = {
  posts: [
    {
      id: 1,
      productId: 1,
      name: "Василь",
      message:
        "Замовляла ролет майже півроку тому. Прийшов вчасно. Запакований надійно. Всі запчастини наявні. Все відповідає дійсності. Дякую компанії і менеджерам.",
    },
    {
      id: 2,
      productId: 2,
      name: "Степан",
      message:
        "Заказав через день відправили. Якість дуже гарна. Буду заказувати ще...",
    },
    {
      id: 3,
      productId: 3,
      name: "Люба",
      message:
        "Заказав через день відправили. Якість дуже гарна. Буду заказувати ще...",
    },
    {
      id: 4,
      productId: 4,
      name: "Віра",
      message:
        "Заказала, а вже через день відправили. Якість дуже гарна. Буду заказувати ще...",
    },
  ],
  newPostText: "",
  newPostName: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        productId: state.productId,
        name: state.newPostName,
        message: state.newPostText,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: "",
        newPostName: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
        productId: action.productId,
      };
    }
    case UPDATE_NEW_POST_NAME: {
      return {
        ...state,
        newPostName: action.newName,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text, productId) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
  productId: productId,
});

export const updateNewPostNameActionCreator = (name) => ({
  type: UPDATE_NEW_POST_NAME,
  newName: name,
});

export default profileReducer;
