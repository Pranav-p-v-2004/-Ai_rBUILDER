import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import Edit from '../Components/Edit';
import { Link } from 'react-router-dom';
import { IoDocumentText } from "react-icons/io5";
import { IoMdRefresh  } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import Preview from '../Components/Preview';

function View() {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* Navigation Icons */}

    <div className='d-flex justify-content-center align-item-center '>
            {/* Download */}
            <button style={{color:"black"}} className='btn '><FaFileDownload />Download Cv</button>
            {/* Edit */}
            <Edit/>
            {/* Saved */}
            <Link style={{color:'black'}} to={'/all-resume'} className='btn mx-2 '> <IoDocumentText />All Resume</Link>
            {/* Download History */}
             <Link style={{color:'black'}} to={'/downloads'} className='btn mx-2 '> <IoMdRefresh /> Download History</Link>

            {/* Back */}
             <Link style={{color:'black'}} to={'/resume-details'} className='btn mx-2 '> <FaBackward /> Preview </Link>

    </div>
    <div className='p-5'>
      <Preview/>

    </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
     
    </div>
  )
}

export default View
