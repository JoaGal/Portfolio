import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
export const ButtonTheme = ({ toggled, setToggled }) => {
  const changeTheme = () => {
    setToggled(!toggled);
  };

  return (
      <div onClick={changeTheme} className="btn">
        <div className="btn__indicator">
          <div className="btn__icon-container">
            {toggled ? (
              <BsFillMoonFill className="btn__icon" />
            ) : (
              <BsFillSunFill className="btn__icon" />
            )}
          </div>
        </div>
      </div>
  );
};
