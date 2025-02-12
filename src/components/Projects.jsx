import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "Project Management System (React and FastAPI)",
      description:
        "A comprehensive tool for managing tasks, tracking progress, and collaborating on projects. Built with React and FastAPI, it features role-based access control and real-time updates.",
      image: "/project.jpg",
    },
    {
      title: "Point of Sales (React and AWS Services)",
      description:
        "A cloud-based POS system enabling businesses to manage sales, inventory, and customer transactions seamlessly. Developed using React and AWS services for scalability and security.",
      image: "/pos.jpg",
    },
    {
      title: "Cattle Feed Automation System (React and Express JS)",
      description:
        "An IoT-enabled system for automating cattle feeding schedules and monitoring nutritional intake. Built with React and Express.js, integrating real-time data analytics.",
      image: "/cattle.jpg",
    },
  ];

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 md:px-12 relative bg-gray-950">
      <h1 className="text-4xl md:text-5xl font-bold mt-20 mb-8 text-blue-400">
        Projects
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-blue-400">
              {project.title}
            </h2>
            <p className="text-lg text-gray-300 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
