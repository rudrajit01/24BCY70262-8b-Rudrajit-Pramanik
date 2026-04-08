import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Protected() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get('http://localhost:5000/api/protected', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setMessage(response.data.message);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      localStorage.removeItem('token'); // টোকেন ইনভ্যালিড হলে ডিলিট করুন
      navigate('/login');
    });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Protected Dashboard</h2>
      <p>{message}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Protected;