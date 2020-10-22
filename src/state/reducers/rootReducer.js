const initialState = {
  mainPageGreeting: "Hello from MainPage",
  secondPageGreeting: {
    title: "Hello Second Page",
    body: "I think this is ridiculous"
  }
}

const rootReducer = (state = initialState) => {
  return state
}

export default rootReducer