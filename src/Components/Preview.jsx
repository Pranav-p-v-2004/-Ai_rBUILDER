// import { Button, Divider } from '@mui/material'
// import React from 'react'

// function Preview({resumeDetails}) {
//   return (
//     <div className='w-100'>
//       <h2>{resumeDetails?.fullname}</h2>
//       <p className='fs-5.5 lh-1'>Phone :{resumeDetails?.phone}</p>
//       <p className='fs-5.5 lh-1'>Email :{resumeDetails?.email}</p>
//       <p className='fs-5.5 lh-1'>LinkedIn :{resumeDetails?.linkedin}</p>
//       <p className='fs-5.5 lh-1'>Github :{resumeDetails?.github}</p>
//       <p className='fs-5.5 lh-1'>Location :{resumeDetails?.location}</p>
//       <Divider className='bg-dark mb-3' />
//       <h2>Professional Summary</h2>
//       <p>Summary:{resumeDetails?.summary}</p>
//       <Divider className='bg-dark mb-3'/>
//       <h2>Technical Skills</h2>
//    {/* duplicate accordingf to the skill number */}

//    {
//     resumeDetails?.skills?.map(skill =>(
//       <span> <Button key={skill} variant='text' className='bg-dark text-light rounded my-2 mx-2'>{skill}</Button> </span>
//     ))
//    }

//        <Divider className='bg-dark mt-3 mb-3'/>
//        <p>Bachelor's Degree in :{resumeDetails?.degree}</p>
//        <p>University/Collage Name :{resumeDetails?.collage}</p>
//        <p>year of Graduation :{resumeDetails?.year}</p>

//     </div>
//   )
// }

// export default Preview
import React from 'react';
import { Button, Divider } from '@mui/material';

function Preview({ resumeDetails }) {
  if (!resumeDetails) {
    return <p>Loading resume details...</p>;
  }

  return (
    <div className="w-100">
      <h2>{resumeDetails.fullname}</h2>

      <p>Phone: {resumeDetails.phone}</p>
      <p>Email: {resumeDetails.email}</p>
      <p>LinkedIn: {resumeDetails.linkedin}</p>
      <p>Github: {resumeDetails.github}</p>
      <p>Location: {resumeDetails.location}</p>

      <Divider className="bg-dark mb-3" />

      <h2>Professional Summary</h2>
      <p>Summary: {resumeDetails.summary}</p>

      <Divider className="bg-dark mb-3" />

      <h2>Technical Skills</h2>

      {Array.isArray(resumeDetails.skills) &&
        resumeDetails.skills.map((skill, index) => (
          <Button
            key={`${skill}-${index}`}
            variant="text"
            className="bg-dark text-light rounded my-2 mx-2"
          >
            {skill}
          </Button>
        ))}

      <Divider className="bg-dark mt-3 mb-3" />

      <p>Bachelor's Degree in: {resumeDetails.degree}</p>
      <p>University/College Name: {resumeDetails.collage}</p>
      <p>Year of Graduation: {resumeDetails.year}</p>
    </div>
  );
}

export default Preview;
