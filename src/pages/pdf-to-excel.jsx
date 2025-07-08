import { useRef, useState } from "react"
import Footer from "../components/footer"
import Button from "../components/ui/button"
import { Upload, FileText, Download, CheckCircle } from "lucide-react"

export default function PdfToExcelPage() {
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
    <div className="min-h-screen bg-slate-50">

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <div className="bg-amber-200 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <FileText className="h-10 w-10 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">PDF to Excel Converter</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extract tables and structured data from your PDF files and convert them into editable Excel spreadsheets.
            </p>
          </div>

          {/* Upload Section */}
          {!isComplete && (
            <div className="bg-amber-200 rounded-lg shadow-lg  mb-8">
              {files.length === 0 ? (
                <div className="border-2 border-dashed border-orange-300 rounded-lg p-12 text-center hover:border-amber-500 transition-colors ">
                  <Upload className="h-16 w-16 text-orange-400 mx-auto mb-4 " />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 ">Select PDF files</h3>
                  <p className="text-gray-600 mb-6">or drag & drop them here</p>
                  <input
                    type="file"
                    accept=".pdf"
                    multiple
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button
                    className="bg-orange-600 hover:bg-orange-700 text-white cursor-pointer px-8 py-3"
                    onClick={handleButtonClick}
                  >
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
                          <FileText className="h-8 w-8 text-amber-600 mr-3" />
                          <div>
                            <p className="font-medium text-gray-900">{file.name}</p>
                            <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        {isConverting && (
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-600"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleConvert}
                      disabled={isConverting}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
                    >
                      {isConverting ? "Converting..." : "Convert to Excel"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Completion Section */}
          {isComplete && (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conversion Successful!</h3>
              <p className="text-gray-600 mb-6">Your files have been converted to Excel spreadsheets.</p>
              <div className="space-y-3 mb-6">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <FileText className="h-8 w-8 text-orange-600 mr-3" />
                      <div className="text-left">
                        <p className="font-medium text-gray-900">{file.name.replace(".pdf", ".xlsx")}</p>
                        <p className="text-sm text-gray-500">Excel Spreadsheet</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
              <Button onClick={resetForm} className="bg-orange-600 hover:bg-orange-700 text-white">
                Convert More Files
              </Button>
            </div>
          )}

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-amber-200 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Table Recognition</h3>
              <p className="text-gray-600 text-sm">Smart extraction of rows and columns from PDFs</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-200 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Registration</h3>
              <p className="text-gray-600 text-sm">Free and easy to use, no sign-up required</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-200 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accurate Conversion</h3>
              <p className="text-gray-600 text-sm">Maintains data integrity and spreadsheet structure</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
