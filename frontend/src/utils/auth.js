// frontend/src/utils/auth.js

// ✅ Save token to localStorage
export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

// ✅ Get token from localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// ✅ Remove token from localStorage
export const removeToken = () => {
  localStorage.removeItem('token');
};

// ✅ Check if user is authenticated
export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};
