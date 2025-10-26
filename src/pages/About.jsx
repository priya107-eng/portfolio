import React from 'react';
import './About.css'; // Make sure this path is correct

function About() {
    return (
        <div className="about-container">
            <h1 className="main-heading">My Projects:</h1>

            <div className="project-card">
                <h3>1. Object Detection</h3>
                <p>
                    Developed using Python and the COCO model. It detects objects in images and real-time video streams using deep learning.
                </p>
            </div>

            <div className="project-card">
                <h3>2. Student Result Management System</h3>
                <p>
                    Built using PHP and MySQL. Helps manage student marks, GPA calculations, and analysis reports department-wise.
                </p>
            </div>

            <div className="project-card">
                <h3>3. To-Do List App</h3>
                <p>
                    A task tracker built with React JS that lets users add, delete, and manage daily tasks interactively.
                </p>
            </div>
        </div>
    );
}

export default About;
