import Modal from "./components/Modal";
import movies from "./Data";
import data from "./Data";
import { useState, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "ADD_MOVIE") {
    const newMovies = [...state.movies, action.payload];
    return {
      ...state,
      movies: newMovies,
      showNotification: true,
      NotificationContent: "film bil pridan",
    };
  }
  if (action.type === "NO_MOVIE_NAME") {
    return {
      ...state,
      showNotification: true,
      NotificationContent: "pridaj film",
    };
  }
  if (action.type === "CLOSE_NOTIFICATION") {
    return {
      ...state,
      showNotification: false,
    };
  }
  if(action.type==="REMOVE_MOVIE"){
    const filteredMovies=state.movies.filter((oneMovie)=>{
      return oneMovie.id !== action.payload
    })
    return {
      ...state,
      movies:filteredMovies
    }
  }
  return new Error("chyba");
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
      const newMovie = { id: new Date().getTime(), name: movieName };
      dispatch({ type: "ADD_MOVIE", payload: newMovie });
    } else {
      dispatch({ type: "NO_MOVIE_NAME" });
    }
    setMovieName("")
  };
  const closeNotification = () => {
    dispatch({ type: "CLOSE_NOTIFICATION" });
  };
  return (
    <section>
      {state.showNotification && (
        <Modal
          notifcontent={state.NotificationContent}
          closeNotif={closeNotification}
        />
      )}
      <form onSubmit={submitFrom}>
        <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
        <input type="submit" value="pridat" />
      </form>
      <div>
        {state.movies.map((oneMovie) => {
          return (
            <div key={oneMovie.id}>
              <p>{oneMovie.name}</p>
              <button type="button" onClick={()=>dispatch({type:"REMOVE_MOVIE",payload:oneMovie.id})}>smazat</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default App;
