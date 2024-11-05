// Tạo một phần tử link để liên kết với tập tin CSS
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'styles.css'; // Đường dẫn đến tập tin CSS

// Thêm phần tử link vào phần head của trang
document.head.appendChild(link);
