const defaultState = {
  length: 2,
  0: {
    id: 0,
    title: 'Dummy title0',
    body: 'dummy body0',
  },
  1: {
    id: 1,
    title: 'Dummy title1',
    body: 'dummy body1',
  },
};
const noteReducer = (state = defaultState, action) => {
  let newState = state;
  switch (action.type) {
    case 'NOTE_UPDATE':
      newState = {
        ...state,
        [action.payload.id]: action.payload,
      };
      break;
    case 'NOTE_ADD':
      newState = {
        ...state,
        [state.length]: { ...action.payload, id: state.length },
        length: state.length + 1,
      };
      break;
    default:
      break;
  }
  return newState;
};

export default noteReducer;
