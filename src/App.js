import Modal from "./components/Modal";
import data from "./Data";
import { useState, useReducer } from "react";

const reducer = (state,action) => {

  if(action.type==="ADD_MOVIE"){
    const newMovies=[...state.movies,action.payload]
    return{
      ...state,
      movies:newMovies,
      showNotification:true,
      NotificationContent:"film bil pridan"
    }
  }
    if(action.type==="NO_MOVIE_NAME"){
      return{
        ...state,
        showNotification:true,
        NotificationContent:"pridaj film"
      }
    }
  return new Error("chyba")
};

const defaultState = {
  movies: [],
  showNotification: false,
  NotificationContent: "",
};

const App = () => {
  const [movieName, setMovieName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitFrom = (e) => { 
    e.preventDefault();

    if (movieName) {
      const newMovie={id:new Date().getTime(),name:movieName}
      dispatch({type: "ADD_MOVIE",payload:newMovie})
    } else {
      dispatch({type:"NO_MOVIE_NAME"})
    }
  };
  return (
    <section>
      {state.showNotification && (
        <Modal notifcontent={state.NotificationContent} />
      )}
      <form onSubmit={submitFrom}>
        <input type="text" onChange={(e) => setMovieName(e.target.value)} />
        <input type="submit" value="pridat" />
      </form>
      <div>
        {state.movies.map((oneMovie) => {
          return (
            <div key={oneMovie.id}>
              <p>{oneMovie.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default App;
