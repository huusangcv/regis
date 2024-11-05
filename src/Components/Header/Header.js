import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaLock, FaCalendarTimes } from 'react-icons/fa';
import ModalDialog from '../Modal/Modal';
import Slidebar from '../SlideBar';
import Overlay from '../Overlay';

const Header = () => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [studentCode, setStudentCode] = useState('');
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate(`/timeTable/${studentCode}`);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="header-top-right header-top g-3 d-flex justify-content-center">
        <div>
          <div className="btn btn-primary btn-sm mr-1  d-flex align-items-center" onClick={handleShow}>
            <FaCalendarTimes className="mx-1" /> Thời khoá biểu
          </div>
        </div>
        <Link to="/login" className="btn btn-success btn-sm d-flex align-items-center">
          <FaLock className="mx-1" /> Đăng nhập
        </Link>
      </div>
      <header className="header-bottom align-items-center header-logo d-flex  justify-content-start">
        <div className="header-logo align-items-center d-flex justify-content-start">
          <div className="header-logo-left">
            <Link to="/">
              <img
                src="https://sao.agu.edu.vn/themes/frontend/images/logo.svg?v=44487"
                alt="PHÒNG CÔNG TÁC SINH VIÊN"
              />
            </Link>
          </div>
          <div className="header-logo-right">
            <div className="header-logo-right-top">
              <Link to="/">TRƯỜNG ĐẠI HỌC AN GIANG</Link>
            </div>
            <h1 className="header-logo-right-bottom">
              <Link to="/">ĐĂNG KÝ HỌC PHẦN TRỰC TUYẾN</Link>
            </h1>
          </div>
        </div>
        <div class="js-menu-mobile ms-auto" onClick={() => setShowMenu(true)}>
          <div class="trigger-menu">
            <span class="three-bars-icon"></span>
          </div>
        </div>
      </header>

      <Slidebar
        showMenu={showMenu}
        showSubMenu={showSubMenu}
        setShowMenu={setShowMenu}
        setShowSubMenu={setShowSubMenu}
      />
      <Overlay
        showMenu={showMenu}
        showSubMenu={showSubMenu}
        setShowMenu={setShowMenu}
        setShowSubMenu={setShowSubMenu}
      />
      <ModalDialog onShow={show} onClose={handleClose} studentCode={studentCode} setStudentCode={setStudentCode} />
    </>
  );
};

export default Header;
