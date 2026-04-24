import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav style={{
      backgroundColor: '#ffffff',
      padding: '15px 30px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      display: 'flex',
      gap: '30px',
      alignItems: 'center'
    }}>
      <h2 style={{ color: '#2c3e50', margin: 0, marginRight: '20px' }}>📘 TOEIC Master</h2>
      <Link to="/" style={linkStyle}>Trang Chủ</Link>
      <Link to="/paragraph" style={linkStyle}>Luyện Đọc (Part 7)</Link>
    </nav>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: '#34495e',
  fontWeight: '600',
  fontSize: '16px',
  transition: 'color 0.3s'
};

export default NavigationBar;