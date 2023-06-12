import { createStore } from 'redux';

const initialState = {
  // Khởi tạo giá trị ban đầu cho state
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Xử lý các action
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;