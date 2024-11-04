import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header-top-right header-top g-3 d-flex justify-content-center">
        <div>
          <div className="btn btn-primary btn-sm mr-1">
            <i className="fa-duotone fa-user-headset"></i> Thời khoá biểu
          </div>
        </div>
        <Link to="/login" className="btn btn-success btn-sm">
          <i className="fa-duotone fa-lock"></i> Đăng nhập
        </Link>
      </div>
      <header className="header-bottom header-logo d-flex  justify-content-start">
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
      </header>
    </>
  );
};

export default Header;
