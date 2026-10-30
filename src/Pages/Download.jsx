import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { getAllDownloadResumeApi } from '../service/apiService';

function Download() {


const [downloadList,setDownloadList] = useState([])
console.log(downloadList);



useEffect(()=>{
  getAllDownloads()
},[])

const getAllDownloads = async ()=>{
  const result = await getAllDownloadResumeApi()
  setDownloadList(result.data)
}



  return (
    <div className='container my-5'>
           <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className='fs=3'>Download Resume History</h3>
        <Link to={'/resume-details'} className='fs-5'>Back <FaArrowLeft /></Link>
      </div>

      <div className='row my-5 g-4'>
        {/* Duplicate the row according to the resuyme count */}
      {
        downloadList?.length>0?
        downloadList?.map(resume => (
            <div className='col-lg-4 col-md-6'>
          <div style={{ height: '350px' }} className='rounded shadow p-3 h-100'>
            <h6>Review at : {resume?.timestamp}</h6>
            <div className='mt-4 text-center'>
              <Link to={`/resume/${resume?.resumeId}`}> <img className='w-50'style={{height:"300px"}} src={resume?.resumeImg} alt="resume" /></Link>
            </div>
          </div>

        </div>

        ))
        :
        <div className='text-center'>NO RESUME</div> 
      }

      </div>

    </div>
  )
}

export default Download
