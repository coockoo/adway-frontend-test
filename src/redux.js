export const actions = {
  fetchJob: () => {
    return async (dispatch) => {
      const response = await fetch('/job');
      const job = await response.json();
      dispatch({ type: 'FETCH_JOB_SUCCESS', payload: job });
    };
  },
  redirect: (page) => {
    return { type: 'REDIRECT', payload: page };
  },
  submit: (formData) => {
    return async (dispatch) => {
      await fetch('/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      dispatch({ type: 'SUBMIT_SUCCESS', payload: formData });
      dispatch(actions.redirect('confirmation'));
    };
  },
};

const initialState = {
  page: 'landing', // 'landing', 'form', 'confirmation'
  job: null,
  formData: {},
};

function reducer(state = initialState, action) {
  if (action.type === 'FETCH_JOB_SUCCESS') {
    return { ...state, job: action.payload };
  }
  if (action.type === 'REDIRECT') {
    return { ...state, page: action.payload };
  }
  if (action.type === 'SUBMIT_SUCCESS') {
    return { ...state, formData: action.payload };
  }
  return state;
}

export default reducer;
