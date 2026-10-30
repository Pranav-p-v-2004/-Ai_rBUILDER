import { resume } from "react-dom/server";
import axiosService from "../api/axiosService";

// Save resume
export const saveResumeApi = async (resumeDetails) => {
  return await axiosService("POST", "/resumes", resumeDetails);
};

// Fetch resume by ID
export const viewResumeApi = async (resumeId) => {
  return await axiosService("GET", `/resumes/${resumeId}`, {});
};


// view all resume API : called by view Saved component when the page loads in browser

export const getAllResumeApi = async () => {
  return await axiosService("GET", `/resumes/`, {});
};


//remove resume API : called by saved component when delete button clicked
export const deleteAllResumeApi = async (resumeId) => {
  return await axiosService("DELETE", `/resumes/${resumeId}`, {});
};

//update resume API : called by edit component when update button clicked
export const editAllResumeApi = async (resumeId,resumeDetails) => {
  return await axiosService("PUT", `/resumes/${resumeId}`,resumeDetails);
};


//update resume API : called by edit component when update button clicked
export const downloadResumeApi = async (resumeDetails) => {
  return await axiosService("POST", `/downloads/`,resumeDetails);
};



//GEt download resume API : called by edit component when update button clicked
export const getAllDownloadResumeApi = async () => {
  return await axiosService("GET", `/downloads/`,{});
};