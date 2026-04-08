import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Protected from './Protected';
import PrivateRoute from './PrivateRoute';

function App() {
  const handleLoginSuccess = () => {
    // লগইন সফল হলে Protected পেজে রিডাইরেক্ট করবে (optional)
    window.location.href = '/protected';
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/login">Login</Link> | <Link to="/protected">Protected</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLoginSuccess} />} />
          <Route path="/protected" element={
            <PrivateRoute>
              <Protected />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;