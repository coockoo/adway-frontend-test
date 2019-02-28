export const actions = {
  fetchJob: () => {
    const jobData = {
      logo: 'TELE2',
      title: 'Front-End developer – Comviq Join squad',
      company: 'Tele 2',
      location: 'Sweeden',
      type: 'Full-time',
      description: 'As a Front-End developer within the Comviq Join squad you will be responsible for building great customer experiences. The squad support new cusomers...',
      benefits: [
        'We invest in our people',
        'Next gen telecom company',
        'State of the art IT stack',
      ],
    };
    return { type: 'FETCH_JOB_SUCCESS', payload: jobData };
  },
  redirect: (page) => {
    return { type: 'REDIRECT', payload: page };
  },
  submit: (formData) => {
    return (dispatch) => {
      dispatch({ type: 'SUBMIT_SUCCESS', payload: formData });
      dispatch(actions.redirect('confirmation'));
    };
  }
};

const initialState = {
  page: 'landing', // 'landing', 'form', 'confirmation'
  job: null,
  formData: {},
};

function reducer (state = initialState, action) {
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
