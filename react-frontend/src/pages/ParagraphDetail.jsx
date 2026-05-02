import React from 'react'
import 'regenerator-runtime/runtime' // Import thư viện để hỗ trợ async/await
import {useParams} from 'react-router-dom'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import styled from 'styled-components'
import Button from "@atlaskit/button"

// CSS
const KhungGiaoDien = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const HopHienThiChu = styled.div`
  border: 2px dashed #0052cc;
  padding: 20px;
  margin-top: 20px;
  min-height: 150px;
  border-radius: 8px;
  background-color: #f4f5f7;
  font-size: 18px;
  line-height: 1.6;
`;


export default function ParagraphDetail(){
    const {para_id} = useParams(); // Lấy para_id từ URL
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    // Trường hợp trình duyệt không hỗ trợ Speech Recognition
    if (!browserSupportsSpeechRecognition){
        return <span>Trình duyệt của bạn không hỗ trợ nhận diện giọng nói.</span>
    }

    // UI
    return (
        <KhungGiaoDien>
        <h2>Đang luyện đọc đoạn văn số: <span style={{ color: 'red' }}>{para_id}</span></h2>
        <p>Hãy nhấn "Bắt đầu đọc" và nói vào micro bằng tiếng Anh nhé.</p>
        
        {/* Cụm nút điều khiển */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <Button 
            appearance="primary" 
            onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'en-US' })}
            >
            🎙️ Bắt đầu đọc
            </Button>
            
            <Button appearance="danger" onClick={SpeechRecognition.stopListening}>
            Dừng lại
            </Button>
            
            <Button appearance="subtle" onClick={resetTranscript}>
            Làm lại từ đầu
            </Button>
        </div>

        {/* Hiển thị trạng thái */}
        <p style={{ color: listening ? 'green' : 'gray', fontWeight: 'bold' }}>
            Trạng thái Micro: {listening ? 'Đang nghe...' : 'Đã tắt'}
        </p>

        {/* Cái hộp hiển thị chữ */}
        <HopHienThiChu>
            {/* Nếu có chữ (transcript) thì in ra, nếu không thì in ra câu nhắc nhở */}
            {transcript ? transcript : <span style={{ color: '#888' }}>Chữ bạn đọc sẽ hiện ra ở đây...</span>}
        </HopHienThiChu>
        </KhungGiaoDien>
    );
}