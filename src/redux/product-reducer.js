const ADD_PROD = "ADD_PROD";
const DELETE_PROD = "DELETE_PROD";
const UPDATE_NEW_PROD = "UPDATE_NEW_PROD";
const SORT_COUNT_PROD_NAME = "SORT_COUNT_PROD_NAME";
const SORT_COUNT_PROD_COUNT = "SORT_COUNT_PROD_COUNT";
const UPDATE_PROD = "UPDATE_PROD";
const UPDATE_PROD_TEXT = "UPDATE_PROD_TEXT";

let initialState = {
  product: [
    {
      id: 1,
      name: "Жалюзі",
      photo:
        "https://gros.ua/wp-content/uploads/2019/04/horizontal-zhaluziKh.jpg",
      count: "9",
      weight: "200g",
      color: "red",
      description: "Товар в чудовому стані",
    },
    {
      id: 2,
      name: "Ролокасети",
      photo:
        "https://stankor.com.ua/wp-content/uploads/2020/07/70afe8ed8760a21e2a4a7db09a7212df.jpg.pagespeed.ce._PBMGvSNKN.jpg",
      count: "8",
      weight: "500g",
      color: "blue",
      description: "Якісний німецький двигун",
    },
    {
      id: 3,
      name: "Карнізи",
      photo:
        "https://images.ua.prom.st/1824277262_w640_h640_karniz-mardom-derevo-metall.jpg",
      count: "7",
      weight: "300g",
      color: "green",
      description: "Товар в чудовому стані",
    },
    {
      id: 4,
      name: "Маркіза",
      photo:
        "https://markiza.of.ua/upload/works/7665/markiza-malaga/1920x1200/markiza-malaga.jpg",
      count: "4",
      weight: "200g",
      color: "green",
      description: "БУ",
    },
    {
      id: 5,
      name: "Римські шторки",
      photo:
        "https://sunny-tm.com/image/cache/catalog/new5/art1/rimskie-shtory-top-653.jpg",
      count: "6",
      weight: "150g",
      color: "green",
      description: "Товар в чудовому стані",
    },
    {
      id: 6,
      name: "Жалюзі",
      photo:
        "https://polves.com.ua/content/vertikalnye-zhaljuzi.jpg.pagespeed.ce.5TkQXiqR-w.jpg",
      count: "1",
      weight: "200g",
      color: "green",
      description: "Товар в чудовому стані",
    },
    {
      id: 7,
      name: "Жалюзі",
      photo:
        "https://polves.com.ua/content/vertikalnye-zhaljuzi.jpg.pagespeed.ce.5TkQXiqR-w.jpg",
      count: "1",
      weight: "200g",
      color: "green",
      description: "Товар в чудовому стані",
    },
    {
      id: 8,
      name: "Жалюзі",
      photo:
        "https://polves.com.ua/content/vertikalnye-zhaljuzi.jpg.pagespeed.ce.5TkQXiqR-w.jpg",
      count: "1",
      weight: "200g",
      color: "green",
      description: "Товар в чудовому стані",
    },
    {
      id: 9,
      name: "Римські шторки",
      photo:
        "https://sunny-tm.com/image/cache/catalog/new5/art1/rimskie-shtory-top-653.jpg",
      count: "6",
      weight: "150g",
      color: "green",
      description: "Товар в чудовому стані",
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROD: {
      let newProd = {
        id: Math.floor(Math.random() * 100),
        name: state.newProdName,
        count: state.newProdCount,
        weight: state.newProdWeight,
        color: state.newProdColor,
        description: state.newProdDescr,
        photo: state.newProdFoto,
      };
      return {
        ...state,
        product: [newProd, ...state.product],
        newProdName: "",
        newProdCount: "",
        newProdWeight: "",
        newProdColor: "",
        newProdDescr: "",
        newProdFoto: "",
      };
    }
    case UPDATE_NEW_PROD: {
      return {
        ...state,
        newProdName: action.newName,
        newProdCount: action.newCount,
        newProdWeight: action.newWeight,
        newProdColor: action.newColor,
        newProdDescr: action.newDescr,
        newProdFoto: action.newFoto,
      };
    }
    case DELETE_PROD: {
      let Id = action.deleteId;
      return {
        ...state,
        product: state.product.filter((el) => el.id !== Id),
      };
    }
    case SORT_COUNT_PROD_NAME: {
      let sortedCount = [].slice.call(state.product).sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      return {
        product: sortedCount,
      };
    }
    case SORT_COUNT_PROD_COUNT: {
      let sortedName = [].slice.call(state.product).sort(function (a, b) {
        return a.count - b.count;
      });
      return {
        product: sortedName,
      };
    }
    case UPDATE_PROD_TEXT: {
      return {
        ...state,
        newProdName: action.newName,
        newProdCount: action.newCount,
        newProdWeight: action.newWeight,
        newProdColor: action.newColor,
        newProdDescr: action.newDescr,
        newProdFoto: action.newFoto,
        productId: action.productId,
      };
    }
    case UPDATE_PROD: {
      let newItemsProd = {
        id: state.productId,
        name: state.newProdName,
        count: state.newProdCount,
        weight: state.newProdWeight,
        color: state.newProdColor,
        description: state.newProdDescr,
        photo: state.newProdFoto,
      };
      return {
        product: state.product.map((o) => {
          if (o.id === state.productId) {
            return newItemsProd;
          }
          return o;
        }),
      };
    }
    default:
      return state;
  }
};
export const addProdActionCreator = () => ({ type: ADD_PROD });
export const updateNewProdTextActionCreator = (
  name,
  count,
  weight,
  color,
  description,
  foto
) => ({
  type: UPDATE_NEW_PROD,
  newName: name,
  newCount: count,
  newWeight: weight,
  newColor: color,
  newDescr: description,
  newFoto: foto,
});
export const deleteActionCreator = (deleteId) => ({
  type: DELETE_PROD,
  deleteId: deleteId,
});
export const SortNameActionCreator = () => ({
  type: SORT_COUNT_PROD_NAME,
});
export const SortCountActionCreator = () => ({
  type: SORT_COUNT_PROD_COUNT,
});
export const updateProdTextActionCreator = (
  name,
  count,
  weight,
  color,
  description,
  foto,
  productId
) => ({
  type: UPDATE_PROD_TEXT,
  newName: name,
  newCount: count,
  newWeight: weight,
  newColor: color,
  newDescr: description,
  newFoto: foto,
  productId: productId,
});
export const UpdateProdActionCreator = () => ({ type: UPDATE_PROD });
export default productReducer;
