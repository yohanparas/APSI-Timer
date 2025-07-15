import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
  Outlet
} from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

function NotFound() {
  return <h2>404 - Not Found</h2>;
}

// Nested Route Parent
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

// Nested Route Children
function Profile() {
  return <h3>Dashboard: Profile Page</h3>;
}

function Settings() {
  return <h3>Dashboard: Settings Page</h3>;
}

function SinglePageArc() {
  return (
    <Router>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/user/123">User 123</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/old-path">Redirect</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/old-path" element={<Navigate to="/about" replace />} />
       
        {/* Nested Routes Example */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Catch-all 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default SinglePageArc;