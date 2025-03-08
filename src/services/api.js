import axios from "axios";

const API_URL = "http://localhost:5001/api";

export const getTeam = () => axios.get(`${API_URL}/team`);

export const addTeamMember = (data) => axios.post(`${API_URL}/team`, data, {
  headers: { "Content-Type": "multipart/form-data" }
});

export const deleteTeamMember = (id) => axios.delete(`${API_URL}/team/${id}`);
export const updateTeamMember = (id, data) => axios.put(`${API_URL}/team/${id}`, data);


export const getProjects = () => axios.get(`${API_URL}/projects`);
export const addProject = (data) => axios.post(`${API_URL}/projects`, data);
export const updateProject = (id, data) => axios.put(`${API_URL}/projects/${id}`, data);
export const deleteProject = (id) => axios.delete(`${API_URL}/projects/${id}`);

export const getCompanyInfo = () => axios.get(`${API_URL}/company`);
export const updateCompanyInfo = (id, data) => axios.put(`${API_URL}/company/${id}`, data);
