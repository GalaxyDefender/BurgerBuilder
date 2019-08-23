import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseInit = (state, action) => {
  return {
    ...state,
    purchased: false
  };
};

const purchasedBurgerStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const purchasedBurgerSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId
  };
  return {
    ...state,
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  };
};

const purchasedBurgerFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};

const fetchOrdersStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const fetchOrdersSuccess = (state, action) => {
  return {
    ...state,
    orders: action.orders,
    loading: false
  };
};

const fetchOrdersFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASED_INIT:
      return purchaseInit(state, action);

    case actionTypes.PURCHASED_BURGER_START:
      return purchasedBurgerStart(state, action);

    case actionTypes.PURCHASED_BURGER_SUCCESS:
      return purchasedBurgerSuccess(state, action);

    case actionTypes.PURCHASED_BURGER_FAIL:
      return purchasedBurgerFail(state, action);

    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);

    default:
      return state;
  }
};

export default reducer;
