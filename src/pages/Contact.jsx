import { useState } from 'react';
import './contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phNum, setPhone] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name || !email || !phNum) {
            setError("All fields are required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Invalid email');
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[^\s]{8,}$/.test(password)) {
            setError("Password must be at least 8 characters, contain letters and numbers, and have no spaces");
        } else if (!/^\d{10}$/.test(phNum)) {
            setError("Phone number must be exactly 10 digits");
        } else {
            setSuccess("Submitted successfully");
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Phone number:', phNum);

            setName('');
            setEmail('');
            setPassword('');
            setPhone('');
        }
    }

    return (
        <div className="container">
            <h2>Log In</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}

            <form onSubmit={handleSubmit}>
                <p>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <p>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </p>
                <p>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phNum}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
