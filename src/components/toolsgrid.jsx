import { Link } from 'react-router-dom'
import imagee from "../assets/imagee.jpg"

import {
  FileText,
  Scissors,
  Archive,
  FileImage,
  FileSpreadsheet,
  Presentation,
  RotateCw,
  Lock,
  Unlock,
  Droplets,
  Plus,
} from "lucide-react"

const tools = [
  {
    name: "Merge PDF",
    description: "Combine PDFs in the order you want with the easiest PDF merger available.",
    icon: Plus,
    href: "/merge",
    color: "bg-blue-500",
  },
  {
    name: "Split PDF",
    description: "Separate one page or a whole set for easy conversion into independent PDF files.",
    icon: Scissors,
    href: "/split",
    color: "bg-green-500",
  },
  {
    name: "Compress PDF",
    description: "Reduce file size while optimizing for maximal PDF quality.",
    icon: Archive,
    href: "/compress",
    color: "bg-orange-500",
  },
  {
    name: "PDF to Word",
    description: "Convert PDF to editable Word documents. Maintains formatting.",
    icon: FileText,
    href: "/pdf-to-word",
    color: "bg-blue-600",
  },
  {
    name: "Word to PDF",
    description: "Make DOC and DOCX files easy to read by converting them to PDF.",
    icon: FileText,
    href: "/word-to-pdf",
    color: "bg-blue-700",
  },
  {
    name: "PDF to Excel",
    description: "Convert PDF to Excel online. Extract tables from PDF files.",
    icon: FileSpreadsheet,
    href: "/pdf-to-excel",
    color: "bg-green-600",
  },
  {
    name: "PDF to PowerPoint",
    description: "Turn your PDF files into editable PowerPoint PPT and PPTX presentations.",
    icon: Presentation,
    href: "/pdf-to-ppt",
    color: "bg-red-600",
  },
  {
    name: "PDF to JPG",
    description: "Convert each PDF page into a JPG or extract all images contained in a PDF.",
    icon: FileImage,
    href: "/pdf-to-jpg",
    color: "bg-purple-500",
  },
  {
    name: "Rotate PDF",
    description: "Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!",
    icon: RotateCw,
    href: "/rotate",
    color: "bg-indigo-500",
  },
  {
    name: "Unlock PDF",
    description: "Remove PDF password security, giving you the freedom to use your PDFs as you want.",
    icon: Unlock,
    href: "/unlock",
    color: "bg-yellow-500",
  },
  {
    name: "Protect PDF",
    description: "Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.",
    icon: Lock,
    href: "/protect",
    color: "bg-gray-600",
  },
  {
    name: "Watermark PDF",
    description: "Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position.",
    icon: Droplets,
    href: "/watermark",
    color: "bg-cyan-500",
  },
]

export default function ToolsGrid() {
  return (
    <section className=" bg-gradient-to-t from-blue-100 to-gray-500">
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
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">All the tools you'll need</h2>
          <p className="text-lg text-gray-100">Choose from our comprehensive suite of PDF tools</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => {
            const IconComponent = tool.icon
            return (
              <Link
                key={tool.name}
                href={tool.href}
                className="group bg-gray-300 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:bg-white border hover:border-gray-900"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${tool.color} rounded-lg p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-800">{tool.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      </div>
    </section>
  )
}
