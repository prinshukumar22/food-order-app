import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import React from "react";

// 2 Components in same file
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalEl = document.querySelector(".overlay");

const Modal = (props) => {
  return (
    <>
      {/* <Backdrop></Backdrop>
      <Overlay>{props.children}</Overlay> */}
      {/* Would have done this way if we aren not using portals */}

      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalEl)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalEl)}
    </>
  );
};

export default Modal;
