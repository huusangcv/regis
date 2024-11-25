import { IoClose, IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const Slidebar = ({ showMenu, showSubMenu, setShowMenu, setShowSubMenu }) => {
  return (
    <div class={(showMenu && 'slidebar show') || 'slidebar'}>
      <div class="mobile-wrap-menu">
        <div class="head">
          <span class="icon closeSidebar" onClick={() => setShowMenu(false)}>
            <IoClose />
          </span>
        </div>
        <div class="content">
          <ul class="nav-mobile">
            <li>
              <a title="Giới thiệu" href="javascript:void(0)" class="hassub" onClick={() => setShowSubMenu(true)}>
                Giới thiệu
              </a>
              <div class={(showSubMenu && 'sub-menu show') || 'sub-menu'}>
                <div class="head">
                  <span class="icon closeSub" onClick={() => setShowSubMenu(false)}>
                    <IoArrowBack />
                  </span>
                  <span class="head-text">Giới thiệu</span>
                </div>
                <ul>
                  <li>
                    <Link
                      title="Giới thiệu trường"
                      to="/introduce"
                      onClick={() => {
                        setShowSubMenu(false);
                        setShowMenu(false);
                      }}
                    >
                      Trường Đại học An Giang
                    </Link>
                  </li>
                  <li>
                    <a title="Cơ cấu tổ chức" href="https://sao.agu.edu.vn/user/organizational-structure">
                      Cơ cấu tổ chức
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a title="QUY ĐỊNH - BIỂU MẪU" href="javascript:void(0)" class="hassub">
                QUY ĐỊNH - BIỂU MẪU
              </a>
              <div class="sub-menu" visible="false">
                <div class="head">
                  <span class="icon closeSub">
                    <i class="fa-duotone fa-arrow-left"></i>
                  </span>
                  <span class="head-text">QUY ĐỊNH - BIỂU MẪU</span>
                </div>
                <ul>
                  <li>
                    <a title="Quy chế - Quy định" href="https://sao.agu.edu.vn/document/quy-che-quy-dinh">
                      Quy chế - Quy định
                    </a>
                  </li>
                  <li>
                    <a title="Quy trình" href="https://sao.agu.edu.vn/document/quy-trinh">
                      Quy trình
                    </a>
                  </li>
                  <li>
                    <a title="Biểu mẫu" href="https://sao.agu.edu.vn/document/bieu-mau">
                      Biểu mẫu
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a title="Thông báo" href="javascript:void(0)" class="hassub">
                Thông báo
              </a>
              <div class="sub-menu" visible="false">
                <div class="head">
                  <span class="icon closeSub">
                    <i class="fa-duotone fa-arrow-left"></i>
                  </span>
                  <span class="head-text">Thông báo</span>
                </div>
                <ul>
                  <li>
                    <a title="Thông báo của Phòng CTSV" href="https://sao.agu.edu.vn/category/thong-bao">
                      Thông báo của Phòng CTSV
                    </a>
                  </li>
                  <li>
                    <a title="Học Bổng" href="https://sao.agu.edu.vn/category/hoc-bong">
                      Học Bổng
                    </a>
                  </li>
                  <li>
                    <a title="Hoạt động tư vấn" href="https://sao.agu.edu.vn/category/hoat-dong-tu-van">
                      Hoạt động tư vấn
                    </a>
                  </li>
                  <li>
                    <a title="Hỗ trợ HSSV" href="https://sao.agu.edu.vn/category/ho-tro-hssv">
                      Hỗ trợ HSSV
                    </a>
                  </li>
                  <li>
                    <a title="Chế độ chính sách" href="https://sao.agu.edu.vn/category/che-do-chinh-sach">
                      Chế độ chính sách
                    </a>
                  </li>
                  <li>
                    <a title="Nghị định 116" href="https://sao.agu.edu.vn/category/nghi-dinh-116">
                      Nghị định 116
                    </a>
                  </li>
                  <li>
                    <a title="Khen thưởng" href="https://sao.agu.edu.vn/category/khen-thuong">
                      Khen thưởng
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link title="Đăng ký học phần" to="/regis" onClick={() => setShowMenu(false)}>
                Đăng ký học phần
              </Link>
            </li>
            <li>
              <a title="Tin tuyển dụng" href="https://jobs.agu.edu.vn">
                Tin tuyển dụng
              </a>
            </li>
            <li>
              <a title="Đoàn Thanh niên" href="https://youth.agu.edu.vn">
                Đoàn Thanh niên
              </a>
            </li>
            <li>
              <a title="Câu lạc bộ" href="https://sao.agu.edu.vn/student/clubs">
                Câu lạc bộ
              </a>
            </li>
            <li>
              <a title="Liên hệ" href="https://sao.agu.edu.vn/contact">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
