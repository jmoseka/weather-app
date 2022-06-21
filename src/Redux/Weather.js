export const fetchBook = () => async (dispatch) => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      const books = [];
      Object.entries(data).forEach((el) => {
        books.push({
          item_id: el[0],
          ...el[1][0],
        });
      });
      dispatch(getBook(books));
    } catch (error) {
      <h2>{error}</h2>;
    }
  };

  export default function weatherReducer(state = [], action) {
    switch (action.type) {
      case GET_BOOK:
        return action.payload;
      case ADD_BOOK:
        return [
          ...state,
          action.book,
        ];
      case DELETE_BOOK:
        return [...state].filter((item) => item.item_id !== action.id);
      default:
        return state;
    }
  }