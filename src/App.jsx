// App.jsx
import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  // const [HomePage, setHomePage] = useState(null);
  // const [AboutPage, setAboutPage] = useState(null);
  // const [ContactPage, setContactPage] = useState(null);
  const HomePage = lazy(() => import("./components/Home"));
  const AboutPage = lazy(() => import("./components/About"));
  const ContactPage = lazy(() => import("./components/Contact"));

  /* useEffect(() => {
    // Preload HomePage component
    import("./components/Home").then((module) =>
      setHomePage(() => module.default)
    );
  }, []);
  const loadHomePage = () => {
    import("./components/Home").then((module) =>
      setHomePage(() => module.default)
    );
  };
  const loadAboutPage = () => {
    import("./components/About").then((module) =>
      setAboutPage(() => module.default)
    );
  };
  const loadContactPage = () => {
    import("./components/Contact").then((module) =>
      setContactPage(() => module.default)
    );
  }; */
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* <Link to="/" onClick={loadHomePage}>
                Home
              </Link> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/*} <Link to="/about" onClick={loadAboutPage}>
                About
              </Link> */}
              <Link to="/about">About</Link>
            </li>
            <li>
              {/* <Link to="/contact" onClick={loadContactPage}>
                Contact
              </Link> */}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>{" "}
        {/* <Routes>
          <Route
            path="/"
            element={HomePage ? <HomePage /> : <div>Loading...</div>}
          />
          <Route
            path="/about"
            element={AboutPage ? <AboutPage /> : <div>Loading...</div>}
          />
          <Route
            path="/contact"
            element={ContactPage ? <ContactPage /> : <div>Loading...</div>}
          /> 
        </Routes> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};
export default App;
