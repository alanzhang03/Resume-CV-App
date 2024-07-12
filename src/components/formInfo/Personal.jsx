import React, { useState, useRef } from "react";
import "../componentStyles/Personal.css";

export default function Personal({
	fullName,
	email,
	phone,
	address,
	handleChangeFullName,
	handleChangeEmail,
	handleChangeAddress,
	handleChangePhone,
}) {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const formRef = useRef(null);

	const toggleFormVisibility = () => {
		setIsFormVisible(!isFormVisible);
	};

	return (
		<div className="personal">
			<div className="personal-header" onClick={toggleFormVisibility}>
				<h1>
					<span role="img" aria-label="personal-icon">
						👤
					</span>{" "}
					Personal Details
				</h1>
				<button
					type="button"
					className={`toggle-button ${isFormVisible ? "rotate" : ""}`}
				>
					▼
				</button>
			</div>
			<div
				className={`personal-details-form-container ${
					isFormVisible ? "visible" : "hidden"
				}`}
				style={{
					maxHeight: isFormVisible
						? `${formRef.current.scrollHeight}px`
						: "0px",
				}}
			>
				<form ref={formRef} className="personal-details-form">
					<label htmlFor="fullName">Full Name</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						value={fullName}
						onChange={handleChangeFullName}
						placeholder="Enter first and last name"
						required
					/>

					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={handleChangeEmail}
						placeholder="Enter Email Address"
					/>

					<label htmlFor="phone">Phone Number</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={phone}
						onChange={handleChangePhone}
						placeholder="Enter Phone number"
					/>

					<label htmlFor="address">Address</label>
					<input
						className="address-input"
						type="text"
						id="address"
						name="address"
						value={address}
						onChange={handleChangeAddress}
						placeholder="City, State"
					/>
				</form>
			</div>
		</div>
	);
}
