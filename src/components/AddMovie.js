import React, { useRef } from "react";
import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const movie = {
        title : titleRef.current.value,
        openingText : openingTextRef.current.value,
        releaseDate : releaseDateRef.current.value

    }
    props.addMovie(movie);
    titleRef.current.value = "";
    openingTextRef.current.value = "";
    releaseDateRef.current.value = "";
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="">Title</label>
        <input type="text" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Opening Text</label>
        <input type="text" ref={openingTextRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Release Date</label>
        <input type="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}
export default AddMovie;
