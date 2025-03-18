import "./Modal.css";

const Modal = ({active, setActive, children }) => {

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button onClick={() => setActive(false)}>x</button>
      </div>
    </div>
  );
}

export default Modal;




// import "./Modal.css";

// const Modal = ({active, setActive, children }) => {

//   return (
//     <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         {children}
//         <button className="modal-close" onClick={onClose}>✖</button>
//       </div>
//     </div>
//   );
// }

// export default Modal;