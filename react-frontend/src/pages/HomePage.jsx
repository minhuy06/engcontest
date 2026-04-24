import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '60px' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5rem', marginBottom: '20px' }}>
        Chào mừng đến với TOEIC Master 🚀
      </h1>
      
      <p style={{ color: '#7f8c8d', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 40px auto' }}>
        Hệ thống luyện thi TOEIC thông minh. Hãy bắt đầu cải thiện kỹ năng đọc hiểu (Part 7) của bạn mỗi ngày với các bài tập được lấy trực tiếp từ cơ sở dữ liệu.
      </p>

      <Link to="/paragraph" style={{
        backgroundColor: '#3498db',
        color: 'white',
        padding: '15px 35px',
        borderRadius: '30px',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        boxShadow: '0 4px 15px rgba(52, 152, 219, 0.4)',
        display: 'inline-block'
      }}>
        Bắt đầu luyện Đọc ngay ➔
      </Link>
    </div>
  );
}

export default HomePage;