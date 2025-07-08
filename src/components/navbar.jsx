import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu, ChevronDown } from "lucide-react";
import Button from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const pdfTools = [
    { name: "Merge PDF", href: "/merge" },
    { name: "Split PDF", href: "/split" },
    { name: "Compress PDF", href: "/compress" },
    { name: "PDF to Word", href: "/pdf-to-word" },
    { name: "Word to PDF", href: "/word-to-pdf" },
    { name: "PDF to Excel", href: "/pdf-to-excel" },
    { name: "PDF to PowerPoint", href: "/pdf-to-ppt" },
    { name: "PDF to JPG", href: "/pdf-to-jpg" },
  ];

  const convertPaths = [
    "/pdf-to-word",
    "/word-to-pdf",
    "/pdf-to-excel",
    "/pdf-to-ppt",
  ];
  const isConvertActive = convertPaths.includes(pathname);

  return (
    <nav className="bg-gradient-to-r from-blue-100 to-gray-200 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center font-serif space-x-2">
            <div className="text-2xl font-bold text-gray-500">
              Lets<span className="text-gray-800">Convert</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/merge"
              className={`font-bold transition-colors ${
                pathname === "/merge"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              MERGE PDF
            </Link>

            <Link
              to="/split"
              className={`font-bold transition-colors ${
                pathname === "/split"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              SPLIT PDF
            </Link>

            <Link
              to="/compress"
              className={`font-bold transition-colors ${
                pathname === "/compress"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              COMPRESS PDF
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center font-bold transition-colors ${
                    isConvertActive
                      ? "text-black border-b-2 border-black"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  CONVERT PDF <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-md rounded-md">
                 {pdfTools.slice(3, 7).map((tool) => (
                 <DropdownMenuItem key={tool.name} asChild>
                 <Link
                 to={tool.href}
                className={`w-full block px-3 py-2 text-sm rounded-md transition-colors ${
                 pathname === tool.href
            ? "bg-gray-100 text-black font-semibold underline"
            : "text-gray-700 hover:bg-gray-200 hover:text-black"
        }`}
      >
        {tool.name}
      </Link>
    </DropdownMenuItem>
  ))}
</DropdownMenuContent>

            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-md rounded-md">
  {pdfTools.map((tool) => (
    <DropdownMenuItem key={tool.name} asChild>
      <Link
        to={tool.href}
        className={`w-full block px-3 py-2 text-sm rounded-md transition-colors ${
          pathname === tool.href
            ? "bg-gray-100 text-black font-semibold underline"
            : "text-gray-700 hover:bg-gray-100 hover:text-black"
        }`}
      >
        {tool.name}
      </Link>
    </DropdownMenuItem>
  ))}
</DropdownMenuContent>

            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-gray-200 p-4 shadow-lg">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/merge"
                  className={`text-lg font-medium ${
                    pathname === "/merge"
                      ? "text-black font-bold underline"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Merge PDF
                </Link>
                <Link
                  to="/split"
                  className={`text-lg font-medium ${
                    pathname === "/split"
                      ? "text-black font-bold underline"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Split PDF
                </Link>
                <Link
                  to="/compress"
                  className={`text-lg font-medium ${
                    pathname === "/compress"
                      ? "text-black font-bold underline"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Compress PDF
                </Link>

                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Convert PDF
                  </h3>
                  {pdfTools.slice(3, 7).map((tool) => (
                    <Link
                      key={tool.name}
                      to={tool.href}
                      className={`block py-2 text-base ${
                        pathname === tool.href
                          ? "text-black font-bold underline"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
