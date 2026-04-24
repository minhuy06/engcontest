import { useState, useEffect } from 'react';

function ParagraphPage() {
  const [paragraphs, setParagraphs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/paragraphs')
      .then(response => response.json())
      .then(data => {
        setParagraphs(data);
        setLoading(false); // Tắt trạng thái tải sau khi có dữ liệu
      })
      .catch(error => {
        console.error("Lỗi:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Danh sách Đoạn văn Luyện Đọc</h2>
      
      {loading ? (
        <p style={{ fontStyle: 'italic', color: '#7f8c8d' }}>Đang tải dữ liệu từ máy chủ...</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {paragraphs.map((item) => (
            <div key={item.id} style={{
              backgroundColor: '#fff',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              borderLeft: '5px solid #3498db'
            }}>
              <span style={{ 
                display: 'inline-block', 
                backgroundColor: '#ecf0f1', 
                padding: '4px 10px', 
                borderRadius: '20px', 
                fontSize: '12px', 
                fontWeight: 'bold',
                color: '#7f8c8d',
                marginBottom: '10px'
              }}>
                Paragraph #{item.id}
              </span>
              <p style={{ 
                fontSize: '18px', 
                lineHeight: '1.7', 
                color: '#2c3e50' 
              }}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ParagraphPage;