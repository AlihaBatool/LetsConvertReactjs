import { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async () => {
    if (!selectedFile) return alert('Please select a file');

    const formData = new FormData();
    formData.append('file', selectedFile);

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/convert', {
        method: 'POST',
        body: formData,
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'converted.zip';
      link.click();
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setSelectedFile(e.target.files[0])}
        className="text-sm"
      />
      <button
        onClick={handleUpload}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {isLoading ? 'Converting...' : 'Convert PDF'}
      </button>
    </div>
  );
};

export default FileUpload;
