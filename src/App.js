import Modal from "./components/Modal";
import data from "./Data";
import { useState, useReducer } from "react";

const reducer = () => {

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

    } else {

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
