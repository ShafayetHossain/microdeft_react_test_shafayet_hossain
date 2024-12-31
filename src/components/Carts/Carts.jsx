import React, { useContext, useEffect } from "react";
import { ContextProvider } from "../../Provider/Provider";

const Carts = () => {
  const { user, courses, setCourses } = useContext(ContextProvider);

  useEffect(() => {
    const fetchCourses = async () => {
      const { token } = user?.data;

      if (!token) {
        alert("Authorization token not found. Please log in.");
        return;
      }

      try {
        const response = await fetch(
          "https://react-interview.crd4lc.easypanel.host/api/course",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setCourses(data?.data?.data || []);
          console.log(courses);
        } else {
          alert("Failed to fetch courses");
        }
      } catch (err) {
        alert("Error fetching courses");
      }
    };

    fetchCourses();
  }, []);

  return <div></div>;
};

export default Carts;
