import API from ".";

const adminSignInAPI = (body) => API.post("/admin/login", body);

const   getAdminDetailsAPI = async () => {
  const response = await API.get("/admin/details");
  return response.data;
};

  const logoutAdminAPI  = () => {
    return API.post("/admin/logout");
  };

  const createSurveyAPI = (formData) => API.post('/create/survey', formData);

  const getSurveyAPI = () => API.get('/survey/details');

export {
    adminSignInAPI,
    getAdminDetailsAPI,
    logoutAdminAPI,
    createSurveyAPI,
    getSurveyAPI,
}