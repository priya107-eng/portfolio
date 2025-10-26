
import profilePic from '../assets/profile.png'; // Replace with your image path
import './Profile.css'; // Optional: for styling

function Profile() {
  const skills = [
    'web design',
    'python basics',
    'C basics',
    'react js',
    'OOPS DSA concepts'
  ];

  return (
    <div className="profile-container">
      <img src={profilePic} alt="My Profile" className="profile-pic" />
      <h1>Hi, I’m Priyadharshini 👋</h1>
      <p>
        I’m a passionate web developer with experience in building modern and responsive web applications.
      </p>
      <h2>Skills 📝</h2>
      <ul className="skills-list">
        {skills.map(skill => (
          <li key={skill} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
