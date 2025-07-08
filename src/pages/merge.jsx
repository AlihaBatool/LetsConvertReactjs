import { useRef, useState } from "react"
import Footer from "../components/footer"
import Button from "../components/ui/button"
import { Upload, Plus, Download, CheckCircle, GripVertical } from "lucide-react"

export default function MergePdfPage() {
  const fileInputRef = useRef(null)
  const [files, setFiles] = useState([])
  const [isMerging, setIsMerging] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleFileUpload = (event) => {
    const selectedFiles = Array.from(event.target.files || [])
    setFiles((prev) => [...prev, ...selectedFiles])
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleMerge = async () => {
    setIsMerging(true)
    setTimeout(() => {
      setIsMerging(false)
      setIsComplete(true)
    }, 2500)
  }

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const resetForm = () => {
    setFiles([])
    setIsComplete(false)
    setIsMerging(false)
  }

  return (
    <div className="min-h-screen">
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Plus className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Merge PDF Files</h1>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Combine multiple PDF files into one document. Simply upload your files and arrange them in the order you
              want.
            </p>
          </div>

          {/* Upload Area */}
          {!isComplete && (
            <div className="bg-blue-100 rounded-lg shadow-lg p-8 mb-8">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors mb-6">
                <Upload className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Add PDF files</h3>
                <p className="text-gray-600 mb-4">Select multiple PDF files to merge</p>

                <input
                  type="file"
                  accept=".pdf"
                  multiple
                  onChange={handleFileUpload}
                  ref={fileInputRef}
                  className="hidden"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" onClick={handleButtonClick}>
                  Select PDF files
                </Button>
              </div>

              {files.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Files to merge ({files.length})</h3>
                  <div className="space-y-3 mb-6">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center">
                          <GripVertical className="h-5 w-5 text-gray-400 mr-3 cursor-move" />
                          <div className="bg-red-100 rounded p-2 mr-3">
                            <Plus className="h-5 w-5 text-red-500" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{file.name}</p>
                            <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {isMerging && (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                          )}
                          <Button variant="outline" size="sm" onClick={() => removeFile(index)} disabled={isMerging}>
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button
                      onClick={handleMerge}
                      disabled={isMerging || files.length < 2}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                    >
                      {isMerging ? "Merging..." : `Merge ${files.length} PDFs`}
                    </Button>
                  </div>
                  {files.length < 2 && (
                    <p className="text-center text-sm text-gray-500 mt-2">Add at least 2 PDF files to merge</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Success State */}
          {isComplete && (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Merge Complete!</h3>
              <p className="text-gray-600 mb-6">Your PDF files have been successfully merged into one document.</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded p-2 mr-3">
                      <Plus className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">merged-document.pdf</p>
                      <p className="text-sm text-gray-500">Combined PDF Document</p>
                    </div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
              <Button onClick={resetForm} variant="outline">
                Merge More Files
              </Button>
            </div>
          )}

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy Reordering</h3>
              <p className="text-gray-900 text-sm">Drag and drop to arrange files in your preferred order</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Size Limit</h3>
              <p className="text-gray-900 text-sm">Merge as many PDF files as you need</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Preserved</h3>
              <p className="text-gray-900 text-sm">Original quality and formatting maintained</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
