// eslint-disable-next-line react/prop-types
const Popup = ({ showPopup }) => {
  return (
    showPopup && (
      <div className="popup">
        <h1>This Task already exists.</h1>
        <p>Please try another task!</p>
      </div>
    )
  );
};

export default Popup;
