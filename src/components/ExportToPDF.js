import { useRef } from "react";
import { html2canvas } from "html2canvas";
import { jsPDF } from "jspdf";
// Added this
const ExportToPDF = () => {
  const inputRef = useRef(null);
  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div className="mb5">
          <button onClick={() => printDocument()}>Print</button>
        </div>
        <div id="divToPrint" ref={inputRef}>
          <div>Note: Here the dimensions of div are same as A4</div>
          <div>You Can add any component here</div>
        </div>
      </div>
    </>
  );
};
export default ExportToPDF;
