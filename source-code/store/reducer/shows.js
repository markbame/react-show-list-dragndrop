export default function shows(state = [], action) {
  switch(action.type) {
    case "FETCHED_SHOWS":
      {
        return action.data
        BREAK;
      }
    case "FETCHED_SHOW":
      {
        return action.data
        BREAK;
      }

  }
  return state
}
