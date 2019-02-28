export const actions = {
  redirect: (page) => {
    return { type: 'REDIRECT', payload: page };
  },
};

const initialState = {
  page: 'landing', // 'landing', 'form', 'confirmation'
};

function reducer (state = initialState, action) {
  if (action.type === 'REDIRECT') {
    return { ...state, page: action.payload };
  }
  return state;
}

export default reducer;
