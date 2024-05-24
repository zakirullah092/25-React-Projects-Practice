import React, { useState } from 'react';
import './QRCodeGenerator.css';

function QRCodeGenerator() {
    const [inputValue, setInputValue] = useState('');
    const [qrUrl, setQrUrl] = useState('');
    const [show, setShow] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const generateQRCode = () => {
        if (inputValue.trim() !== '') {
            setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`);
        }
    };

    return (
        <div className="QRCodeGenerator">
            <h1>Project 5: QR Code Generator</h1>
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Project</button>
            {show && (
                <>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter text to generate QR code"
                    />
                    <button onClick={generateQRCode}>Generate QR Code</button>
                    {qrUrl && (
                        <div className="qr-code">
                            <img src={qrUrl} alt="Generated QR Code" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default QRCodeGenerator;
