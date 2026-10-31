import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { getAllDownloadResumeApi } from '../service/apiService';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};






function Download() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  


const [downloadList,setDownloadList] = useState([])
const [label,setLabel] = useState([])
const [value,setValue] = useState([])
const colorPallete = ['#1078ad','#d5c2a4','#e05625','#c5eceb','#711f0a','#fccd85','#f1f0f6']
const backgroundColor = label.map((value,index)=>colorPallete[index%colorPallete.length])
// console.log(downloadList);


const data = {
  labels : label,
  datasets:[
    {
      label : 'Download Count',
      data : value,
      backgroundColor
    }
  ]
}



useEffect(()=>{
  getAllDownloads()
},[])

const getAllDownloads = async ()=>{
  const result = await getAllDownloadResumeApi()
  setDownloadList(result.data)
  const output = {}
  result.data.forEach(item=>{
    const currentJob = item.jobRole
    if(currentJob in output){
      output[currentJob] +=1

    }else{
       output[currentJob] = 1
    }
  })
  setLabel(Object.keys(output))
  setValue(Object.values(output))
}



  return (
    <div className='container my-5'>
           <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className='fs=3'>Download Resume History</h3>
        <Button onClick={handleOpen} className='btn text-light rounded' style={{background:'#D2B48C'}}>View in chart </Button>
      </div>

      <p className='mt-3 fs-4 fw-semibold text-primary'>Total Download Resume From Our Site Is : <span className='fw-bolder'>{downloadList.length}</span> </p>

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
      /* Modal */
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{background:'#D2B48C',width:"100%",padding:"10px"}}>
     CV Count by the role
    </Typography>
    <div className='text-center'>
      <Pie data={data}/>
    </div>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     This chart provide an overview of the number of CV DOWNLOADS associated with different jobs on the website. It helps visualize the demand and engagement for CV's accross various carrer categories,making it easier to identify which job roles attract the highest number of downloads.By comparing downloads counts accross roles,the count cn provide useful insight in to users preference and the popularity of different carrer oppurtunities on the platform
    </Typography>
  </Box>
</Modal>

    </div>
  )
}

export default Download
