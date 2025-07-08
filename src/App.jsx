import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from './pages/HomePage';
import CompressPdfPage from './pages/compress';
import MergePdfPage from './pages/merge';
import PdfToExcelPage from './pages/pdf-to-excel';
import PdfToJpgPage from './pages/pdf-to-jpg';
import PdfToPptPage from './pages/pdf-to-ppt';
import PdfToWordPage from './pages/pdf-to-word';
import WordToPdfPage from './pages/word-to-pdf';
import SplitPdfPage from './pages/split';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/compress" element={<CompressPdfPage />} />
            <Route path="/merge" element={<MergePdfPage />} />
            <Route path="/pdf-to-excel" element={<PdfToExcelPage />} />
            <Route path="/pdf-to-word" element={<PdfToWordPage />} />
            <Route path="/pdf-to-jpg" element={<PdfToJpgPage />} />
            <Route path="/pdf-to-ppt" element={<PdfToPptPage />} />
            <Route path="/word-to-pdf" element={<WordToPdfPage />} />
            <Route path="/split" element={<SplitPdfPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
