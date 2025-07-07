import axios from 'axios';

// Base API URL - adjust as per your backend server
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true
});

// Submit Requirement Form
export const submitRequirement = async (formData, token) => {
  try {
    const res = await API.post('/form/submit', formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: 'Form submission failed' };
  }
};

// (Optional) Fetch Web or Security Services (from DB, if needed)
export const fetchServices = async () => {
  try {
    const res = await API.get('/services'); // Add endpoint in backend later
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: 'Could not fetch services' };
  }
};
