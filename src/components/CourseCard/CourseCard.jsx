import React from "react";
import { FaUserAlt } from "react-icons/fa";

const CourseCard = ({ course }) => {
  return (
    <div className="card w-80 bg-base-100 mx-4 shadow-xl relative">
      <figure>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
      </figure>

      <div
        className="absolute top-44 left-4 px-3 py-2 text-white text-sm font-semibold "
        style={{ backgroundColor: course.badge_color || "orange"}}
      >
        {course.badge_text}
      </div>

      <p className="text-sm font-bold mt-2 flex justify-center items-center">
        <span className="mr-2"><FaUserAlt /></span> {course.instructor_name}
      </p>

      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>
        <p className="text-sm text-gray-600">{course.description}</p>

        <div className="card-actions justify-center mt-4">
          <button className="btn btn-primary w-full">View Detail</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
