import React, { useState, useRef } from "react";
import "../componentStyles/Education.css";

export default function Education({
	school,
	handleSchoolChange,
	degree,
	handleDegreeChange,
	startDate,
	handleStartDateChange,
	endDate,
	handleEndDateChange,
	location,
	handleLocationChange,
}) {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const formRef = useRef(null);

	const toggleFormVisibility = () => {
		setIsFormVisible(!isFormVisible);
	};

	return (
		<div className="education">
			<div className="education-header" onClick={toggleFormVisibility}>
				<h1 className="education-header-form-text">
					<span role="img" aria-label="education-icon">
						🎓
					</span>{" "}
					Education
				</h1>
				<button
					type="button"
					className={`toggle-button ${isFormVisible ? "rotate" : ""}`}
				>
					▼
				</button>
			</div>
			<div
				className={`education-details-form-container ${
					isFormVisible ? "visible" : "hidden"
				}`}
				style={{
					maxHeight: isFormVisible
						? `${formRef.current.scrollHeight}px`
						: "0px",
				}}
			>
				<form ref={formRef} className="education-details-form">
					<label htmlFor="school">School</label>
					<input
						type="text"
						id="school"
						name="school"
						value={school}
						onChange={handleSchoolChange}
						placeholder="Enter school/university name"
						required
					/>

					<label htmlFor="degree">Degree</label>
					<input
						type="text"
						id="degree"
						name="degree"
						value={degree}
						onChange={handleDegreeChange}
						placeholder="Enter Degree / Field of study"
					/>

					<label htmlFor="startDate">Start Date</label>
					<input
						type="text"
						id="startDate"
						name="startDate"
						value={startDate}
						onChange={handleStartDateChange}
						placeholder="Enter Start Date"
					/>

					<label htmlFor="endDate">End Date</label>
					<input
						type="text"
						id="endDate"
						name="endDate"
						value={endDate}
						onChange={handleEndDateChange}
						placeholder="Enter End Date"
					/>

					<label htmlFor="location">Location</label>
					<input
						type="location"
						id="location"
						name="location"
						value={location}
						onChange={handleLocationChange}
					/>
				</form>
			</div>
		</div>
	);
}
