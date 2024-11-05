import './Overlay.scss';
const Overlay = ({ showMenu, setShowMenu, setShowSubMenu }) => {
  return (
    <div
      className={!showMenu || 'overlay'}
      onClick={() => {
        setShowSubMenu(false);
        setShowMenu(false);
      }}
    ></div>
  );
};

export default Overlay;
