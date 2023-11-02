import "./Modal.css";
import { useEffect } from "react";
const Modal = ({ notifcontent, closeNotif }) => {
  useEffect(() => {
    setTimeout(() => {
      closeNotif();
    }, 2000);
  });
  return (
    <div>
      <div className="nitification">{notifcontent}</div>
    </div>
  );
};

export default Modal;
