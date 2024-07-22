import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login } from '../store/authslice';
import authService from '../appwrite/auth';
import Input from './Input';
import Buttons from './Buttons';
import service from '../appwrite/major_config'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const create = async (data) => {
    setError('');
    setLoading(true);
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          console.log(currentUser);
          dispatch(login(currentUser));
          navigate('/');
          // Save the user data to the database
          const { studentPicture, ...studentData } = data;
          const pictureFile = studentPicture[0];
          const uploadedFile = await service.uploadFile(pictureFile);
          studentData.studentPicture = uploadedFile.$id;
          await service.createCard({
            ...studentData,
            id: currentUser.$id
          });
        }
      }
    } catch (error) {
      setError(error.message);
      navigate('/login');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(create)} className="w-full max-w-5xl p-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-md mt-4">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">Register</h2>
        <p className='mb-5'>
          Already have an account?&nbsp;
          <Link to="/login" className='font-medium text-black transition-all duration-200 hover:underline'>Login</Link>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input placeholder="Name" type="text" {...register("name", {
              required: "Name is required",
              validate: {
                matchPattern: (value) => /^[A-Z][a-zA-Z]*$/.test(value) || "Invalid name"
              }
            })} />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          
          <div>
            <Input placeholder="Username" type="text" {...register("username", {
              required: "Username is required",
              validate: {
                matchPattern: (value) => /^[a-zA-Z0-9._-]+$/.test(value) || "Invalid username"
              }
            })} />
            {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
          </div>

          <div>
            <Input placeholder="Email" type="email" {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email"
              }
            })} />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <Input placeholder="Password" type="password" {...register('password', {
              required: "Password is required",
              validate: {
                matchPattern: (value) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(value) || "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a number"
              }
            })} />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          <div>
            <Input placeholder="Institute" type="text" {...register("institute", { required: "Institute is required" })} />
            {errors.institute && <span className="text-red-500 text-sm">{errors.institute.message}</span>}
          </div>
          
          <div>
            <Input placeholder="Course" type="text" {...register("course", { required: "Course is required" })} />
            {errors.course && <span className="text-red-500 text-sm">{errors.course.message}</span>}
          </div>
          
          <div>
            <Input placeholder="Class" type="text" {...register("studentClass", { required: "Class is required" })} />
            {errors.studentClass && <span className="text-red-500 text-sm">{errors.studentClass.message}</span>}
          </div>

          <div>
            <Input placeholder="Section" type="text" {...register("section", { required: "Section is required" })} />
            {errors.section && <span className="text-red-500 text-sm">{errors.section.message}</span>}
          </div>

          <div>
            <Input placeholder="Roll No" type="text" {...register("rollNo", { required: "Roll No is required" })} />
            {errors.rollNo && <span className="text-red-500 text-sm">{errors.rollNo.message}</span>}
          </div>
          
          <div>
            <Input placeholder="Semester" type="text" {...register("semester", { required: "Semester is required" })} />
            {errors.semester && <span className="text-red-500 text-sm">{errors.semester.message}</span>}
          </div>

          <div>
            <Input placeholder="Starting Year" type="text" {...register("startingYear", { required: "Starting Year is required" })} />
            {errors.startingYear && <span className="text-red-500 text-sm">{errors.startingYear.message}</span>}
          </div>

          <div>
            <Input placeholder="Ending Year" type="text" {...register("endingYear", { required: "Ending Year is required" })} />
            {errors.endingYear && <span className="text-red-500 text-sm">{errors.endingYear.message}</span>}
          </div>

          <div>
            <Input placeholder="Mother's Name" type="text" {...register("motherName", { required: "Mother's Name is required" })} />
            {errors.motherName && <span className="text-red-500 text-sm">{errors.motherName.message}</span>}
          </div>

          <div>
            <Input placeholder="Father's Name" type="text" {...register("fatherName", { required: "Father's Name is required" })} />
            {errors.fatherName && <span className="text-red-500 text-sm">{errors.fatherName.message}</span>}
          </div>

          <div>
            <Input placeholder="Student Phone" type="text" {...register("studentPhone", { required: "Student Phone is required" })} />
            {errors.studentPhone && <span className="text-red-500 text-sm">{errors.studentPhone.message}</span>}
          </div>

          <div>
            <Input placeholder="Parents Phone" type="text" {...register("parentsPhone", { required: "Parents Phone is required" })} />
            {errors.parentsPhone && <span className="text-red-500 text-sm">{errors.parentsPhone.message}</span>}
          </div>

          <div>
            <Input placeholder="Birth Date" type="date" {...register("birth", { required: "Birth Date is required" })} />
            {errors.birth && <span className="text-red-500 text-sm">{errors.birth.message}</span>}
          </div>

          <div>
            <Input placeholder="State" type="text" {...register("studentState", { required: "State is required" })} />
            {errors.studentState && <span className="text-red-500 text-sm">{errors.studentState.message}</span>}
          </div>

          <div>
            <Input placeholder="District" type="text" {...register("studentDistrict", { required: "District is required" })} />
            {errors.studentDistrict && <span className="text-red-500 text-sm">{errors.studentDistrict.message}</span>}
          </div>

          <div>
            <Input placeholder="Town" type="text" {...register("studentTown", { required: "Town is required" })} />
            {errors.studentTown && <span className="text-red-500 text-sm">{errors.studentTown.message}</span>}
          </div>

          <div>
            <Input placeholder="Address" type="text" {...register("studentAdress", { required: "Address is required" })} />
            {errors.studentAdress && <span className="text-red-500 text-sm">{errors.studentAdress.message}</span>}
          </div>

          <div>
            <input type="file" {...register("studentPicture", { required: "Student Picture is required" })} />
            {errors.studentPicture && <span className="text-red-500 text-sm">{errors.studentPicture.message}</span>}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <Buttons type='submit' disabled={loading} children={loading ? "Registering..." : "Register"} />
        </div>
        {error && <span className="text-red-500 mt-4">{error}</span>}
      </form>
    </div>
  );
}

export default Register;
