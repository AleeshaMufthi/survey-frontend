import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, React } from 'react'
import { getAdminDetailsAPI } from '../../api/admin'
import { logoutAdmin } from '../../feautures/adminSlice'
import { useNavigate } from 'react-router-dom'
import { getSurveyAPI } from '../../api/admin'

const AdminDashboard = () => {

  const [surveys, setSurveys] = useState([]);
  const admin = useSelector((state) => state.admin.admin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await getSurveyAPI();
        setSurveys(response.data); // Store fetched survey data
      } catch (error) {
        console.error("Error fetching surveys:", error);
      }
    };

    fetchSurveys();
  }, []);

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate("/admin/signin");
  };

  return (
<div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <p>Email: {admin?.email}</p>
        
        {/* Logout Button */}
        <button onClick={handleLogout} className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md">
          Logout
        </button>

        {/* Surveys List */}
        <h3 className="text-lg font-semibold mt-6">All Survey Responses</h3>
        <div className="mt-2">
          {surveys.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">Nationality</th>
                  <th className="border p-2">Message</th>
                </tr>
              </thead>
              <tbody>
                {surveys.map((survey) => (
                  <tr key={survey._id} className="text-center">
                    <td className="border p-2">{survey.name}</td>
                    <td className="border p-2">{survey.email}</td>
                    <td className="border p-2">{survey.phone}</td>
                    <td className="border p-2">{survey.nationality}</td>
                    <td className="border p-2">{survey.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No surveys found.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
