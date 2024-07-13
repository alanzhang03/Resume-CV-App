import React, { useState, useRef } from "react";
import "../componentStyles/Education.css";

export default function Education({
	school,
	degree,
	startDate,
	endDate,
	location,
	handleChange,
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
						onChange={handleChange}
						placeholder="Enter school/university name"
						required
					/>

					<label htmlFor="degree">Degree</label>
					<input
						type="text"
						id="degree"
						name="degree"
						value={degree}
						onChange={handleChange}
						placeholder="Enter Degree / Field of study"
					/>

					<label htmlFor="startDate">Start Date</label>
					<input
						type="text"
						id="startDate"
						name="startDate"
						value={startDate}
						onChange={handleChange}
						placeholder="Enter Start Date"
					/>

					<label htmlFor="endDate">End Date</label>
					<input
						type="text"
						id="endDate"
						name="endDate"
						value={endDate}
						onChange={handleChange}
						placeholder="Enter End Date"
					/>

					<label htmlFor="location">Location</label>
					<input
						type="text"
						id="location"
						name="location"
						value={location}
						onChange={handleChange}
					/>
				</form>
			</div>
		</div>
	);
}
