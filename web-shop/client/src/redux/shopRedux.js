const initialState = {
  logo: { src: './images/logo192.png', alt: 'App' }
};

// Selectors
export const getLogo = ({ shop }) => shop.logo;

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
