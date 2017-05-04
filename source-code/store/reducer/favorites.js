export default function favorites(state = [], action) {
  switch(action.type) {
    case "SAVED_FAVORITE_SHOW":
      {
        if(state[0] == null) {
          return [action.data]
        }
        else {
          return [...state, action.data]
        }
        BREAK;
      }
    case "GET_FAVORITE_SHOW":
      {
        return action.data
        BREAK;
      }
  }
  return state
}
