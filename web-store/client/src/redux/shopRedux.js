const initialState = {

  };

//// Actions
// action name creator
// const reducerName = 'shop';
// const createActionName = name => `app/${reducerName}/${name}`;

// action exports
// export const ACTION_NAME = createActionName('ACTION_NAME');

// export const actionName = payload => ({ payload, type: ACTION_NAME });


//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
 //   case ACTION_NAME:
 //     return { ...statePart, /*data: action.payload*/ };
    default:
      return statePart;
  }
}