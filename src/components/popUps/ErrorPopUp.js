import ReactDOM from "react-dom";
import Card from "../Card";
import "../css_files/PopUps_css/errorPopUp.css";
import React from "react";
function ErrorPopUp(props) {
  function Backdrop(props) {
    return <div className="backdrop" onClick={buttonClicked}></div>;
  }

  function MainDiv(props) {
    return (
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <button type="button" onClick={buttonClicked}>
            Okay
          </button>
        </footer>
      </Card>
    );
  }

  function buttonClicked() {
    props.onclicked();
  }
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdropDiv")
      )}
      {ReactDOM.createPortal(
        <MainDiv title={props.title} message={props.message} />,
        document.getElementById("mainPopUpDiv")
      )}
    </div>
  );
}

export default ErrorPopUp;
