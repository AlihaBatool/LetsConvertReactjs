import { useRef, useState } from "react"
import Footer from "../components/footer"
import Button from "../components/ui/button"
import { Upload, FileText, Download, CheckCircle } from "lucide-react"

export default function PdfToPptPage() {
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
    setIsConverting(true)
    setTimeout(() => {
      setIsConverting(false)
      setIsComplete(true)
    }, 3000)
  }

  const resetForm = () => {
    setFiles([])
    setIsComplete(false)
    setIsConverting(false)
  }

  return (
    <div className="min-h-screen">
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Navbar */}
          <div className="text-center mb-12">
            <div className="bg-rose-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <FileText className="h-10 w-10 text-rose-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">PDF to PowerPoint Converter</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Easily transform your PDFs into editable, presentation-ready PowerPoint slides.
            </p>
          </div>

          {/* Upload Section */}
          {!isComplete && (
            <div className="bg-rose-100 rounded-lg shadow-lg p-8 mb-8">
              {files.length === 0 ? (
                <div className="border-2 border-dashed border-rose-300 rounded-lg p-12 text-center hover:border-pink-400 transition-colors">
                  <Upload className="h-16 w-16 text-rose-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Select PDF files</h3>
                  <p className="text-gray-600 mb-6">or drop them here</p>
                  <input
                    type="file"
                    accept=".pdf"
                    multiple
                    onChange={handleFileUpload}
                    ref={fileInputRef}
                    className="hidden"
                  />
                  <Button className="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white" onClick={handleButtonClick}>
                    Select PDF files
                  </Button>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Selected Files ({files.length})</h3>
                  <div className="space-y-3 mb-6">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center">
                          <FileText className="h-8 w-8 text-pink-600 mr-3" />
                          <div>
                            <p className="font-medium text-gray-900">{file.name}</p>
                            <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        {isConverting && (
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-rose-600"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleConvert}
                      disabled={isConverting}
                      className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3"
                    >
                      {isConverting ? "Converting..." : "Convert to PPT"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Conversion Complete Section */}
          {isComplete && (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <CheckCircle className="h-16 w-16 text-rose-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conversion Complete!</h3>
              <p className="text-gray-600 mb-6">Your files have been successfully converted to PowerPoint presentations.</p>
              <div className="space-y-3 mb-6">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <FileText className="h-8 w-8 text-rose-600 mr-3" />
                      <div className="text-left">
                        <p className="font-medium text-gray-900">{file.name.replace(".pdf", ".pptx")}</p>
                        <p className="text-sm text-gray-500">PowerPoint File</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
              <Button onClick={resetForm} className="bg-rose-600 hover:bg-rose-700 text-white">
                Convert More Files
              </Button>
            </div>
          )}

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-pink-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Editable Slides</h3>
              <p className="text-gray-600 text-sm">Easily edit your converted slides in PowerPoint</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Process</h3>
              <p className="text-gray-600 text-sm">Takes just seconds to convert and download</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Free</h3>
              <p className="text-gray-600 text-sm">No signup or fees required</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
