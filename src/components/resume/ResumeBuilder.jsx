import React, { useState, useEffect } from "react";
import Education from "../formInfo/Education";
import Experience from "../formInfo/Experience";
import Personal from "../formInfo/Personal";
import ResumePreview from "./ResumePreview";
import FormHeader from "../formInfo/FormHeader";
import Skills from "../formInfo/Skills";
import Projects from "../formInfo/Projects";
import "../componentStyles/ResumeBuilder.css";

export default function ResumeBuilder() {
	const initialState = {
		fullName: "Alan Zhang",
		email: "alan.s.zhang@gmail.com",
		phone: "+1 484-860-0997",
		address: "Philadelphia, PA",
		school: "University of Maryland, College Park",
		degree: "Bachelors in Computer Science",
		startDate: "08/2022",
		endDate: "present",
		location: "College Park, MD",
		company: "MindHome",
		position: "Software Developer Intern",
		startDateExp: "04/2024",
		endDateExp: "present",
		locationExp: "Remote",
		jobDescription:
			"Worked on updates and enhancements to the company website, leveraging React for web application portions and React Native for mobile optimizations. Contributed personal insights and recommendations for leveraging React to enhance aesthetics and functionality of our web application.",
		programmingLanguages: "JavaScript, Python, Java, C, C#, Rust, Ocaml",
		webTech: "React.js, Node.js, HTML, CSS, Hooks API",
		softwareTool: "MATLAB, RStudio, Github, Microsoft Office, Excel",
		concepts: "Data Structures, Algorithms, Object-Oriented Programming",
		projectName: "Personal Portfolio",
		projectLink: "https://alanzhang.onrender.com/",
		projectLanguage: "React, Node, Javascript, HTML, CSS",
		projectDescription:
			"Crafted an online portfolio to showcase my full stack development projects, technical skills, and personal life. Implemented dynamic routing in a React.js single-page application. Leveraged advanced JavaScript for interactive elements and enhanced functionality. Developed a Node.js backend for the contact form, with form validation middleware and a secure email API, improving message processing, reliability, and user experience.",
	};

	const [formData, setFormData] = useState(initialState);

	function clearResume() {
		setFormData({
			fullName: "",
			email: "",
			phone: "",
			address: "",
			school: "",
			degree: "",
			startDate: "",
			endDate: "",
			location: "",
			company: "",
			position: "",
			startDateExp: "",
			endDateExp: "",
			locationExp: "",
			jobDescription: "",
			programmingLanguages: "",
			webTech: "",
			softwareTool: "",
			concepts: "",
			projectName: "",
			projectLink: "",
			projectLanguage: "",
			projectDescription: "",
		});
	}

	function loadExample() {
		setFormData(initialState);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className="resume-builder">
			<div className="form-section">
				<FormHeader clearResume={clearResume} loadExample={loadExample} />
				<Personal
					fullName={formData.fullName}
					email={formData.email}
					phone={formData.phone}
					address={formData.address}
					handleChange={handleChange}
				/>
				<Education
					school={formData.school}
					degree={formData.degree}
					startDate={formData.startDate}
					endDate={formData.endDate}
					location={formData.location}
					handleChange={handleChange}
				/>
				<Experience
					company={formData.company}
					position={formData.position}
					startDateExp={formData.startDateExp}
					endDateExp={formData.endDateExp}
					locationExp={formData.locationExp}
					jobDescription={formData.jobDescription}
					handleChange={handleChange}
				/>
				<Skills
					programmingLanguages={formData.programmingLanguages}
					webTech={formData.webTech}
					softwareTool={formData.softwareTool}
					concepts={formData.concepts}
					handleChange={handleChange}
				/>
				<Projects
					projectName={formData.projectName}
					projectLink={formData.projectLink}
					projectLanguage={formData.projectLanguage}
					projectDescription={formData.projectDescription}
					handleChange={handleChange}
				/>
			</div>
			<div className="resume-preview">
				<ResumePreview data={formData} />
			</div>
		</div>
	);
}
