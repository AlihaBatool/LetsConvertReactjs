import { useRef, useState } from "react"
import Footer from "../components/footer"
import Button from "../components/ui/button"
import { Upload, FileText, Download, CheckCircle } from "lucide-react"

export default function WordToPdfPage() {
  const fileInputRef = useRef(null)
  const [files, setFiles] = useState([])
  const [isConverting, setIsConverting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleFileUpload = (event) => {
    const selectedFiles = Array.from(event.target.files || [])
    setFiles(selectedFiles)
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleConvert = async () => {
    if (files.length === 0) return;

    setIsConverting(true);

    try {
      const formData = new FormData();
      formData.append('file', files[0]); // use only 1 file

      const response = await fetch('http://localhost:8000/api/convert', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Conversion failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = files[0].name.replace(/\.(doc|docx)$/i, '.pdf');
      link.click();

      setIsComplete(true);
    } catch (error) {
      console.error('Error during conversion:', error);
      alert('Failed to convert file. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const resetForm = () => {
    setFiles([]);
    setIsComplete(false);
    setIsConverting(false);
  };

  return (
    <div className="min-h-screen bg-warm-gray-50">

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Navbar */}
          <div className="text-center mb-12">
            <div className="bg-emerald-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <FileText className="h-10 w-10 text-teal-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Word to PDF Converter</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quickly convert your Word documents into high-quality PDF files.
            </p>
          </div>

          {/* Upload Area */}
          {!isComplete && (
            <div className="bg-emerald-100 rounded-lg shadow-lg p-8 mb-8">
              {files.length === 0 ? (
                <div className="border-2 border-dashed border-emerald-300 rounded-lg p-12 text-center hover:border-teal-500 transition-colors">
                  <Upload className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Select Word files</h3>
                  <p className="text-gray-600 mb-6">or drop Word files here</p>
                  <input
                    type="file"
                    accept=".doc,.docx"
                    multiple
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3" onClick={handleButtonClick}>
                    Select Word files
                  </Button>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Selected Files ({files.length})</h3>
                  <div className="space-y-3 mb-6">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center">
                          <FileText className="h-8 w-8 text-emerald-600 mr-3" />
                          <div>
                            <p className="font-medium text-gray-800">{file.name}</p>
                            <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        {isConverting && (
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-teal-600"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleConvert}
                      disabled={isConverting}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3"
                    >
                      {isConverting ? "Converting..." : "Convert to PDF"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Success State */}
          {isComplete && (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Conversion Complete!</h3>
              <p className="text-gray-600 mb-6">Your Word file has been converted to PDF.</p>
              <Button onClick={resetForm} className="bg-teal-600 hover:bg-teal-700 text-white">
                Convert More Files
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
