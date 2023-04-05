// import React from "react";
// import "./Input.css";
//
// const Input = (handleChange, handleClick ) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//
//
//   return (
//     <div className="input-container">
//       <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
//         <input
//           type="text"
//           placeholder="Enter your text here"
//           className="input-text"
//           id="input"
//           onChange={(e) => handleChange(e.target.value)}
//         />
//         <button className="input-button" type="submit" onClick={handleClick}></button>
//       </form>
//     </div>
//   );
// };
//
// export default Input;
import React from "react";
import "./Input.css";

const Input = ({ handleChange, handleClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
      <div className="input-container">
        <form className="form-container" onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Enter your text here"
              className="input-text"
              id="input"
              onChange={(e) => handleChange(e.target.value)}
          />
          <button className="input-button" type="submit" onClick={handleClick}></button>
        </form>
      </div>
  );
};

export default Input;
// const Input = ({ handleChange, handleClick }) => {
//     const handleSubmit = (e) => {
//         e && e.preventDefault();
//         handleClick(); // add this line to call handleClick on form submission
//     };
//
//     return (
//         <div className="input-container">
//             <form className="form-container" onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Enter your text here"
//                     className="input-text"
//                     id="input"
//                     onChange={(e) => handleChange(e.target.value)}
//                 />
//                 <button className="input-button" type="submit"></button>
//             </form>
//         </div>
//     );
// };
