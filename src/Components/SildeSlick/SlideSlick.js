import React from 'react';
import Slider from 'react-slick';
const SlideSlick = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 5000,
    autoplaySeed: 10000,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="d-flex justify-content-between">
          <div className="slider-text">
            <h2 className="slider-heading fadeInUp animated" data-animation-in="fadeInUp">
              <a
                className="text-primary"
                href="https://sao.agu.edu.vn/article/thong-bao-ve-viec-thuc-hien-ke-khai-thong-tin-va-nop-giay-xac-nhan-cu-tru-nam-hoc-2024-2025.html"
                tabindex="-1"
              >
                <span className="slider-type">Thông báo của Phòng Đào Tạo</span> <br />
                Thông báo về việc rà soát kết quả đăng ký học phần và số tiền học phí, nộp học phí học kỳ I năm học
                2024-2025 các lớp chính quy
              </a>
            </h2>
            <div className="slider-description fadeInUp animated" data-animation-in="fadeInUp" data-delay-in="0.5">
              Thông báo về việc thực hiện kê khai thông tin và nộp giấy xác nhận cư trú năm học 2024-2025
            </div>
            <a
              href="https://sao.agu.edu.vn/article/thong-bao-ve-viec-thuc-hien-ke-khai-thong-tin-va-nop-giay-xac-nhan-cu-tru-nam-hoc-2024-2025.html"
              className="btn btn-slider fadeInUp animated"
              data-animation-in="fadeInUp"
              data-delay-in="1"
              tabindex="-1"
            >
              Xem thêm <i className="fa-light fa-chevrons-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h2 className="slider-heading fadeInUp animated" data-animation-in="fadeInUp">
          <a
            className="text-primary"
            href="https://sao.agu.edu.vn/article/thong-bao-ve-viec-thuc-hien-ke-khai-thong-tin-va-nop-giay-xac-nhan-cu-tru-nam-hoc-2024-2025.html"
            tabindex="-1"
          >
            Thông báo về việc thu học phí đào tạo chính quy, hướng dẫn nộp học phí và mức thu học phí học kỳ I năm học
            2024-2025, sinh viên xem tại đây.
          </a>
        </h2>
      </div>
      <div>
        <h2 className="slider-heading fadeInUp animated" data-animation-in="fadeInUp">
          <a
            className="text-primary"
            href="https://sao.agu.edu.vn/article/thong-bao-ve-viec-thuc-hien-ke-khai-thong-tin-va-nop-giay-xac-nhan-cu-tru-nam-hoc-2024-2025.html"
            tabindex="-1"
          >
            Sinh viên rà soát lại kết quả đăng ký học phần, số tiền học phí (học kỳ, nợ học kỳ cũ, đã đóng, phải đóng)
            tại website này (https://regis.agu.edu.vn).
          </a>
        </h2>
      </div>
      <div>
        <h2 className="slider-heading fadeInUp animated" data-animation-in="fadeInUp">
          <a
            className="text-primary"
            href="https://sao.agu.edu.vn/article/thong-bao-ve-viec-thuc-hien-ke-khai-thong-tin-va-nop-giay-xac-nhan-cu-tru-nam-hoc-2024-2025.html"
            tabindex="-1"
          >
            Sinh viên đối chiếu, lưu kết quả đăng ký học phần và số tiền học phí học kỳ I năm học 2024-2025, download
            tại đây.
          </a>
        </h2>
      </div>
      <div>
        <h2 className="slider-heading fadeInUp animated" data-animation-in="fadeInUp">
          <a
            className="text-primary"
            href="https://sao.agu.edu.vn/article/thong-bao-ve-viec-thuc-hien-ke-khai-thong-tin-va-nop-giay-xac-nhan-cu-tru-nam-hoc-2024-2025.html"
            tabindex="-1"
          >
            Nếu có thắc mắc về kết quả đăng ký học phần và số tiền học phí trên phiếu, sinh viên liên hệ Phòng Đào tạo
            (ĐT 04) để được hỗ trợ kiểm tra và xử lý.
          </a>
        </h2>
      </div>
    </Slider>
  );
};

export default SlideSlick;
