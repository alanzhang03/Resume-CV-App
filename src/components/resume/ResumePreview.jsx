import React from "react";
import "../componentStyles/ResumePreview.css";

export default function ResumePreview({ data }) {
	return (
		<div className="resume-preview">
			<div className="resume-preview-container">
				<div className="resume-personal-container">
					<h1 className="full-name">{data.fullName}</h1>
					<div className="personal-info-container">
						<li>✉️ {data.email}</li>
						<li>📞 {data.phone}</li>
						<li>📍 {data.address}</li>
					</div>
				</div>

				<div className="resume-other-container">
					<div className="education-section-resume">
						<h1 className="education-header-resume-preview">Education</h1>
						<div className="education-info-container">
							<div className="education-dates-and-location">
								<div className="dates">
									{data.startDate} - {data.endDate}
								</div>
								<div>{data.location}</div>
							</div>
							<div className="education-school-and-degree">
								<div className="education-school"> {data.school}</div>
								<div> {data.degree}</div>
							</div>
						</div>
					</div>

					<div className="experience-section-resume">
						<h1 className="experience-header-resume-preview">Experience</h1>
						<div className="experience-info-container">
							<div className="experience-dates-and-location">
								<div className="dates">
									{data.startDateExp} - {data.endDateExp}
								</div>
								<div>{data.locationExp}</div>
							</div>
							<div className="experience-company-position-jobDescription">
								<div className="experience-company">{data.company}</div>
								<div className="experience-position">{data.position}</div>
								<div className="experience-jobDescription">
									{data.jobDescription}
								</div>
							</div>
						</div>
					</div>

					<div className="projects-section-resume">
						<h1 className="projects-header-resume-preview">Projects</h1>
						<div className="projects-info-container">
							<div className="projects-name-and-languages">
								<div className="links">
									<a
										href={data.projectLink}
										target="_blank"
										rel="noopener noreferrer"
										className="links-text"
									>
										{data.projectName}
									</a>
								</div>
								<div className="divider">|</div>
								<div>{data.projectLanguage}</div>
							</div>

							<div className="project-description">
								{data.projectDescription}
							</div>
						</div>
					</div>

					<div className="skills-section-resume">
						<h1 className="skills-header-resume-preview">Technical Skills</h1>

						<div className="skills-section-info-container">
							<div className="programLanguage">
								<label className="programLanguage-label">
									Programming Languages:
								</label>
								<div>{data.programmingLanguages}</div>
							</div>

							<div className="webtech">
								<label className="webTech-label">WebTech:</label>
								<div>{data.webTech} </div>
							</div>

							<div className="softwareTool">
								<label className="softwareTool-label">Software Tools:</label>
								<div>{data.softwareTool}</div>
							</div>

							<div className="concepts">
								<label className="concepts-label">Concepts:</label>
								<div>{data.concepts}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
