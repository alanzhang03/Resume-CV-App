import React, { useState, useRef } from "react";
import "../componentStyles/Experience.css";

export default function Experience({
	company,
	position,
	startDateExp,
	endDateExp,
	locationExp,
	jobDescription,
	handleChange,
}) {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const formRef = useRef(null);

	const toggleFormVisibility = () => {
		setIsFormVisible(!isFormVisible);
	};

	return (
		<div className="experience">
			<div className="experience-header" onClick={toggleFormVisibility}>
				<h1 className="experience-header-form-text">
					<span role="img" aria-label="experience-icon">
						💼
					</span>{" "}
					Experience
				</h1>
				<button
					type="button"
					className={`toggle-button ${isFormVisible ? "rotate" : ""}`}
				>
					▼
				</button>
			</div>
			<div
				className={`experience-details-form-container ${
					isFormVisible ? "visible" : "hidden"
				}`}
				style={{
					maxHeight: isFormVisible
						? `${formRef.current.scrollHeight}px`
						: "0px",
				}}
			>
				<form ref={formRef} className="experience-details-form">
					<label htmlFor="company">Company</label>
					<input
						type="text"
						id="company"
						name="company"
						value={company}
						onChange={handleChange}
						placeholder="Enter Company Name"
					/>

					<label htmlFor="position">Position</label>
					<input
						type="text"
						id="position"
						name="position"
						value={position}
						onChange={handleChange}
						placeholder="Enter Position Title"
					/>

					<label htmlFor="startDateExp">Start Date</label>
					<input
						type="text"
						id="startDateExp"
						name="startDateExp"
						value={startDateExp}
						onChange={handleChange}
						placeholder="Enter Start Date"
					/>

					<label htmlFor="endDateExp">End Date</label>
					<input
						type="text"
						id="endDateExp"
						name="endDateExp"
						value={endDateExp}
						onChange={handleChange}
						placeholder="Enter End Date"
					/>

					<label htmlFor="locationExp">Location</label>
					<input
						type="text"
						id="locationExp"
						name="locationExp"
						value={locationExp}
						onChange={handleChange}
						placeholder="Enter Location"
					/>

					<label htmlFor="jobDescription">Job Description</label>
					<textarea
						className="job-description-box"
						id="jobDescription"
						name="jobDescription"
						value={jobDescription}
						onChange={handleChange}
						placeholder="Enter description"
					/>
				</form>
			</div>
		</div>
	);
}
