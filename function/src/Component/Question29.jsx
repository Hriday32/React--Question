//Build a basic image gallery with useReducer to allow users to navigate between image and display the current image.

import React, { useReducer } from "react";

const initialState = {
  currentImageIndex: 0,
};

const imageReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex + 1,
      };
    case "PREVIOUS_IMAGE":
      return {
        currentImageIndex: state.currentImageIndex - 1,
      };
    default:
      return state;
  }
};

const images = [
  "https://imgs.search.brave.com/W83aCDKk7UeNDjI9x_qnyZAy8j3CGgObRQdK3GQ_IfI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93YWxscGFwZXIt/Zmxvd2Vyc18xMTc2/NjcxLTk1LmpwZz9z/aXplPTYyNiZleHQ9/anBn",
  "https://imgs.search.brave.com/QXjjmXnFE4bshsxPxhaLTx6uFzVsoyBUQFV99moXvIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ1MTAy/MzQuanBn",
  "https://imgs.search.brave.com/MbE7dsBbel5wzjSOZ5mcZBYqbKzZmulxYcH5NC5g2A0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mbG93ZXJzLWJh/Y2tncm91bmQtaW1h/Z2VfODUzNTU4LTM3/NzkxLmpwZz9zaXpl/PTYyNiZleHQ9anBn",
  "https://imgs.search.brave.com/L8FX2Vkw_stNr88JpGUsVtsAoiuUQjsQE4OgezKcITQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/ZWF1dGlmdWwtZmxv/d2VyLXdpdGgtcGlu/ay1iYWNrZ3JvdW5k/XzIzLTIxNDk0ODU3/MDAuanBnP3NpemU9/NjI2JmV4dD1qcGc",
];

const Question29 = () => {
  const [state, dispatch] = useReducer(imageReducer, initialState);

  const currentImage = images[state.currentImageIndex];

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        <img src={currentImage} alt="" />
      </div>
      <div>
        <button onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}>
          Previous
        </button>
        <button onClick={() => dispatch({ type: "NEXT_IMAGE" })}>Next</button>
      </div>
    </div>
  );
};

export default Question29;
