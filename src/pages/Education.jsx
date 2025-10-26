import React from 'react';
import './Education.css'; // Make sure this path is correct

function Education() {
    return (
        <div className="about-container">
            <h1 className="main-heading">Studies:</h1>

            <div className="project-card">
                <h3>SSLC</h3>
                <p>
                    I completed my 10th grade in Hithayathul Islam Higher secondary School with 100%
                </p>
            </div>

            <div className="project-card">
                <h3>HSE</h3>
                <p> 
                    I completed my 11th and 12th grade in Hithayathul Islam Higher Secondary School with 93%
                     </p>
            </div>

            <div className="project-card">
                <h3>Degree</h3>
                <p>
                    I am currently pursueing my bachelor's degree in Information Technology at JP college of Engineering.I maintained my CGPA with 9. 
                     </p>
            </div>
        </div>
    );
}

export default Education;
