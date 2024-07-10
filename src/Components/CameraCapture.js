import React, { useRef } from 'react';
import { CiCamera } from "react-icons/ci";


function PhotoCapture({ index, size }) {
  const inputRef = useRef(null);

  const handleFileSelect = () => {
    inputRef.current.click(); // Simula o clique no input file
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    console.log('Foto capturada:', url);

    // Aqui você pode enviar a foto para o servidor ou processá-la conforme necessário
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <CiCamera  onClick={handleFileSelect} size={size} />
    </>
  );
}

export default PhotoCapture;
