import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Download() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items center'>
        <h3 className='fs=1'>Download Resume History</h3>
        <Link to={'resume-details'} className='fs-5'>Back <FaArrowLeft /></Link>
      </div>

      <div className='row my-5'>
        {/* Duplicate the row according to the resuyme count */}
        <div className='col-lg-4'>
          <div style={{ height: '350px' }} className='rounded shadow p-3'>
            <h6>Review at : Time stamp</h6>
            <div className='mt-4 text-ceneter'>
              <Link to={'/resume/:id'}> <img className='w-50' src="https://cdn-images.zety.com/pages/resume-layout-ztus-cta-02.webp" alt="resume" /></Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Download
