import { createContext, useContext, useReducer } from "react";

//DATA.JS
export const globalState = {
  title: "O titulo do contexto",
  body: "o body do context",
  counter: 0,
};

//ACTIONS
export const actions = {
  CHANGE_TITLE: "CHANGE_TITLE",
};

//REDUCERS
export const Reducer = (state, action) => {
  return { ...state };
};

export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, ...globalState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

//COMPONENT

export const H1 = () => {
  const context = useContext(Context);

  return <h1>{context.state.title}</h1>;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const inputRef = useRef();

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <AppContext>
      <H1 />
      <button onClick={() => context.dispatch(inputRef)}>Click</button>
      <input type="text" ref={inputRef} />
    </AppContext>
  );
};
