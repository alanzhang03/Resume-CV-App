import React, { useState } from "react";
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

	const [fullName, setFullName] = useState("Alan Zhang");
	const [email, setEmail] = useState("alan.s.zhang@gmail.com");
	const [phone, setPhone] = useState("+1 484-860-0997");
	const [address, setAddress] = useState("Philadelphia, PA");

	function handleChangeFullName(e) {
		setFullName(e.target.value);
	}

	function handleChangeEmail(e) {
		setEmail(e.target.value);
	}
	function handleChangePhone(e) {
		setPhone(e.target.value);
	}

	function handleChangeAddress(e) {
		setAddress(e.target.value);
	}

	const [school, setSchool] = useState("University of Maryland, College Park");
	const [degree, setDegree] = useState("Bachelors in Computer Science");
	const [startDate, setStartDate] = useState("08/2022");
	const [endDate, setEndDate] = useState("present");
	const [location, setLocation] = useState("College Park, MD");

	function handleSchoolChange(e) {
		setSchool(e.target.value);
	}

	function handleDegreeChange(e) {
		setDegree(e.target.value);
	}

	function handleStartDateChange(e) {
		setStartDate(e.target.value);
	}

	function handleEndDateChange(e) {
		setEndDate(e.target.value);
	}

	function handleLocationChange(e) {
		setLocation(e.target.value);
	}

	const [company, setCompany] = useState("MindHome");
	const [position, setPosition] = useState("Software Developer Intern");
	const [startDateExp, setStartDateExp] = useState("04/2024");
	const [endDateExp, setEndDateExp] = useState("present");
	const [locationExp, setLocationExp] = useState("Remote");
	const [jobDescription, setJobDescription] = useState(
		"Worked on updates and enhancements to the company website, leveraging React for web application portions and React Native for mobile optimizations. Contributed personal insights and recommendations for leveraging React to enhance aesthetics and functionality of our web application."
	);

	function handleCompanyChange(e) {
		setCompany(e.target.value);
	}

	function handlePositionChange(e) {
		setPosition(e.target.value);
	}

	function handleStartDateExpChange(e) {
		setStartDateExp(e.target.value);
	}

	function handleEndDateExpChange(e) {
		setEndDateExp(e.target.value);
	}

	function handleLocationExpChange(e) {
		setLocationExp(e.target.value);
	}

	function handleJobDescriptionChange(e) {
		setJobDescription(e.target.value);
	}

	const [programmingLanguages, setProgrammingLanguages] = useState(
		"JavaScript, Python, Java, C, C#, Rust, Ocaml"
	);
	const [webTech, setWebTech] = useState(
		"React.js, Node.js, HTML, CSS, Hooks API"
	);
	const [softwareTool, setSoftwareTool] = useState(
		"MATLAB, RStudio, Github, Microsoft Office, Excel"
	);
	const [concepts, setConcepts] = useState(
		"Data Structures, Algorithms, Object-Oriented Programming"
	);

	function handleProgrammingLanguagesChange(e) {
		setProgrammingLanguages(e.target.value);
	}

	function handleWebTechChange(e) {
		setWebTech(e.target.value);
	}

	function handleSoftwareToolChange(e) {
		setSoftwareTool(e.target.value);
	}

	function handleConceptsChange(e) {
		setConcepts(e.target.value);
	}

	const [projectName, setProjectName] = useState("Personal Portfolio");
	const [projectLink, setProjectLink] = useState(
		"https://alanzhang.onrender.com/"
	);
	const [projectLanguage, setProjectLanguage] = useState(
		"React, Node, Javascript, HTML, CSS"
	);
	const [projectDescription, setProjectDescription] = useState(
		"Crafted an online portfolio to showcase my full stack development projects, technical skills, and personal life. Implemented dynamic routing in a React.js single-page application. Leveraged advanced JavaScript for interactive elements and enhanced functionality. Developed a Node.js backend for the contact form, with form validation middleware and a secure email API, improving message processing, reliability, and user experience."
	);

	function handleChangeProjectName(e) {
		setProjectName(e.target.value);
	}

	function handleChangeProjectLink(e) {
		setProjectLink(e.target.value);
	}

	function handleChangeProjectLanguage(e) {
		setProjectLanguage(e.target.value);
	}
	function handleChangeProjectDescription(e) {
		setProjectDescription(e.target.value);
	}

	return (
		<div className="resume-builder">
			<div className="form-section">
				<FormHeader clearResume={clearResume} loadExample={loadExample} />

				<Personal
					fullName={fullName}
					email={email}
					phone={phone}
					address={address}
					handleChangeFullName={handleChangeFullName}
					handleChangeEmail={handleChangeEmail}
					handleChangePhone={handleChangePhone}
					handleChangeAddress={handleChangeAddress}
				/>
				<Education
					school={school}
					degree={degree}
					startDate={startDate}
					endDate={endDate}
					location={location}
					handleSchoolChange={handleSchoolChange}
					handleDegreeChange={handleDegreeChange}
					handleStartDateChange={handleStartDateChange}
					handleEndDateChange={handleEndDateChange}
					handleLocationChange={handleLocationChange}
				/>
				<Experience
					company={company}
					position={position}
					startDateExp={startDateExp}
					endDateExp={endDateExp}
					locationExp={locationExp}
					jobDescription={jobDescription}
					handleCompanyChange={handleCompanyChange}
					handlePositionChange={handlePositionChange}
					handleStartDateExpChange={handleStartDateExpChange}
					handleEndDateExpChange={handleEndDateExpChange}
					handleLocationExpChange={handleLocationExpChange}
					handleJobDescriptionChange={handleJobDescriptionChange}
				/>
				<Skills
					programmingLanguages={programmingLanguages}
					webTech={webTech}
					softwareTool={softwareTool}
					concepts={concepts}
					handleProgrammingLanguagesChange={handleProgrammingLanguagesChange}
					handleWebTechChange={handleWebTechChange}
					handleSoftwareToolChange={handleSoftwareToolChange}
					handleConceptsChange={handleConceptsChange}
				/>
				<Projects
					projectName={projectName}
					projectLink={projectLink}
					projectLanguage={projectLanguage}
					projectDescription={projectDescription}
					handleChangeProjectName={handleChangeProjectName}
					handleChangeProjectLink={handleChangeProjectLink}
					handleChangeProjectLanguage={handleChangeProjectLanguage}
					handleChangeProjectDescription={handleChangeProjectDescription}
				/>
			</div>
			<div className="resume-preview">
				<ResumePreview data={formData} />
			</div>
		</div>
	);
}
