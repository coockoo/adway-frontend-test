export const actions = {
  redirect: (page) => {
    return { type: 'REDIRECT', payload: page };
  },
  submit: (formData) => {
    return { type: 'SUBMIT_SUCCESS', payload: formData };
  }
};

const initialState = {
  page: 'form', // 'landing', 'form', 'confirmation'
  formData: {},
};

function reducer (state = initialState, action) {
  if (action.type === 'REDIRECT') {
    return { ...state, page: action.payload };
  }
  if (action.type === 'SUBMIT_SUCCESS') {
    return { ...state, formData: action.payload };
  }
  return state;
}

export default reducer;
