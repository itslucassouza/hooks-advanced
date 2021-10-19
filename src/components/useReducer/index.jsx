import { useReducer } from "react";

const globalState = {
  title: "O titulo do contexto",
  body: "o body do context",
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "muda":
      console.log("chamou mudar com", action.payload);
      return { ...state, title: action.payload };
    case "invert":
      const { title } = state;
      return { ...state, title: title.split("").reverse().join() };
  }
  return {
    ...state,
  };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <>
      <h1>{state.title}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "muda",
            payload: new Date().toLocaleString("pt-BR"),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: "invert" })}>Invert</button>
    </>
  );
};
