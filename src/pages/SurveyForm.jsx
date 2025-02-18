import React, {useState} from 'react'
import { createSurveyAPI } from '../api/admin';

const SurveyForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        nationality: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });

    const [errors, setErrors] = useState({});
    const [feedback, setFeedback] = useState({ message: '', type: '', show: false });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      // Form validation function
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.nationality.trim()) newErrors.nationality = "Nationality is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email format";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Phone number must be 10 digits";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm())
             return; 
        try {
          const response = await createSurveyAPI(formData);
          setFeedback({ message: 'Thank you for completing the survey! Your response has been recorded successfully.', type: 'success', show: true });
          setFormData({
            name: "",
            gender: "",
            nationality: "",
            email: "",
            phone: "",
            address: "",
            message: "",
          });
        } catch (error) {
            setFeedback({ message: 'Error submitting survey. Try again.', type: 'error', show: true });
        }
      };

      const closeModal = () => {
        setFeedback({ ...feedback, show: false });
      };
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Survey Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} 
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Gender */}
          <div>
            <select name="gender" value={formData.gender} onChange={handleChange} 
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>

          {/* Nationality */}
          <div>
            <input type="text" name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} 
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.nationality && <p className="text-red-500 text-sm">{errors.nationality}</p>}
          </div>

          {/* Email */}
          <div>
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} 
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <input type="tel" name="phone" placeholder="Phone Number (10 digits)" value={formData.phone} onChange={handleChange} 
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div>
            <input type="text" name="address" placeholder="Full Address" value={formData.address} onChange={handleChange} 
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Message */}
          <div>
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} 
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none h-24"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
   
        
      {/* Feedback Modal */}
      {feedback.show && (
    
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg border w-80 z-10">
            <h3 className="text-xl font-semibold text-gray-700">
              {feedback.type === 'success' ? 'Success 🎉' : 'Error ❌'}
            </h3>
            <p className="mt-2 text-gray-600">{feedback.message}</p>
            <button onClick={closeModal} className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
              OK
            </button>
          </div>
      
      )}
    </div>
    </div>
  )
}

export default SurveyForm
