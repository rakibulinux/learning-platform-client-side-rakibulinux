import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LeftSide from "./LeftSide";
// import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
// import ExportToPDF from "./ExportToPDF";
// import { BrowserRouter as Router } from "react-router-dom";
import { html2canvas } from "html2canvas";
import ExportToPDF from "./ExportToPDF";

const CourseDetails = () => {
  const courseInfo = useLoaderData();
  console.log(courseInfo);
  const { title, image_url, details } = courseInfo;
  // const print = () => {
  //   const string = renderToString(
  //     <Router>
  //       <ExportToPDF courseInfo={courseInfo} />
  //     </Router>
  //   );
  //   const pdf = new jsPDF("p", "mm", "a4");
  //   // pdf.html2canvas(string);
  //   pdf.save(`${title}`);
  // };

  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <div className="courses">
      <div className="">
        <LeftSide />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <button
          onClick={printDocument}
          className="bg-cyan-900 text-cyan-50 font-semibold py-2 w-32 mx-auto rounded-md"
        >
          Export to PDF
        </button>
        <ExportToPDF courseInfo={courseInfo} />
        {/* <div
          id="divToPrint"
          ref={inputRef}
          className="flex justify-center flex-col"
        >
          <img src={image_url} alt="" />
          <div>
            <h2 className="text-3xl my-5">{title}</h2>
            <p>{details}</p>
            <Link className="text-center" to={`/courses`}>
              <button className="bg-cyan-900 text-cyan-50 p-2 rounded-md my-5">
                View All Courses
              </button>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CourseDetails;
