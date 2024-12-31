import React, { useContext } from "react";
import { ContextProvider } from "../../Provider/Provider";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const { user, courses, setCourses } = useContext(ContextProvider);
  const navigate = useNavigate();

  const handlePostData = async (event) => {
    const { token } = user.data;
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const badge_text = form.badge_text.value;
    const badge_color = form.badge_color.value;
    const instructor_name = form.instructor_name.value;
    const postData = {
      title,
      description,
      badge_text,
      badge_color,
      instructor_name,
    };

    try {
      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        alert("Course added successfully!");
        setCourses([...courses,data]);
        navigate("/");
      } else {
        alert("Failed to add course");
      }
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 outline outline-1 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Post your Course
        </h2>

        <form onSubmit={handlePostData}>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="title">
              Course Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Enter course title."
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="description">
              Course Description
            </label>
            <input
              name="description"
              type="text"
              placeholder="Enter post description."
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
              required
            />
          </div>


          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="badge_text">
              Badge Name
            </label>
            <input
              name="badge_text"
              type="text"
              placeholder="Enter badge name."
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="badge_color">
              Badge color
            </label>
            <input
              name="badge_color"
              type="text"
              placeholder="Enter badge color(e.g., red, green, yellow)."
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium"
              htmlFor="instructor_name"
            >
              Instructor Name
            </label>
            <input
              name="instructor_name"
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Courses;
