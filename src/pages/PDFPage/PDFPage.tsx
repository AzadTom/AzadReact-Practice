import { useState, useEffect, useRef } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
import { ShimmerShape } from "../../components/ui/Skeleton/SkeletonLayout";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFPage = () => {
  const pdfUrl =
    "https://img1.parentune.com/images/ads-brands/Parentune_2025_Case%201_%20Nutrion%20(1)_compressed.pdf";

  const [numPages, setNumPages] = useState<number | null>(null);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      updateWidth();
    }

    return () => resizeObserver.disconnect();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div ref={containerRef} className="w-full bg-white shadow-md p-2">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex justify-center items-center h-20">
              <ShimmerShape width="100%" height="100vh" shape="rect" />
            </div>
          }
        >
          {numPages &&
            Array.from({ length: numPages }, (_, index) => (
              <div key={index} className="mb-2 flex justify-center">
                <Page
                  pageNumber={index + 1}
                  width={width}
                  loading={
                    <div className="flex justify-center items-center h-20">
                      <ShimmerShape width="100%" height="100vh" shape="rect" />
                    </div>
                  }
                />
              </div>
            ))}
        </Document>
      </div>
    </div>
  );
};

export default PDFPage;
