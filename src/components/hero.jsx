import { Upload, FileText, Download } from "lucide-react"
import Button from "../components/ui/button"
import imagee from "../assets/imagee.jpg"
import { useRef } from "react"

export default function Hero() {
  const fileInputRef = useRef(null)

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event) => {
    const files = event.target.files
    if (files && files.length > 0) {
      console.log("Selected file:", files[0])
      // You can send it to backend here
    }
  }

  return (
    <section className="sm:px-0 lg:px-0">
      <div
        className="min-h-screen bg-fixed py-8 bg-gray-80"
        style={{
          backgroundImage:
            `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${imagee})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-gray-100 mb-6">
            Every tool you need to work with PDFs in one place
          </h1>
          <p className="text-xl text-gray-100 font-serif mb-12 max-w-3xl mx-auto">
            Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split,
            compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
          </p>

          {/* Upload Area */}
          <div className="bg-gradient-to-t from-blue-100 to-blue-200 rounded-lg shadow-lg p-8 mb-12 border-2 border-dashed border-gray-300 hover:border-gray-900 transition-colors cursor-pointer">
            <div className="flex flex-col items-center">
              <Upload className="h-16 w-16 text-gray-800 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Select PDF files</h3>
              <p className="text-gray-800 mb-4">or drop PDFs here</p>
              <Button
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3"
                onClick={handleButtonClick}
              >
                Select PDF files
              </Button>
              <input
                type="file"
                accept=".pdf"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-200 rounded-full p-4 mb-4">
                <Upload className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">1. Upload</h3>
              <p className="text-gray-100">Select your PDF files from your device</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-200 rounded-full p-4 mb-4">
                <FileText className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">2. Process</h3>
              <p className="text-gray-100">Choose your conversion or editing tool</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-200 rounded-full p-4 mb-4">
                <Download className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">3. Download</h3>
              <p className="text-gray-100">Get your processed file instantly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
