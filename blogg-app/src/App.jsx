import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/header/NavBar';
import AboutSection from './components/home/AboutSection';
import ContactSection from './components/home/ContactSection';
import HeroSection from './components/home/Hero'; 
import Animation from './components/Animation';
import CaseStudySlider from './components/home/CaseSlider';
import Footer from './components/Footer';
import BlogList from "./blogg/BlogList";
import BlogPost from "./blogg/BlogPost";
import AddBlogPost from "./blogg/AddBlogPost";
import SignIn from "./blogg/SignIn";
import ProtectedRoute from "./blogg/ProtectedRoute";
import { UserProvider } from "./blogg/UserContext";
import { BlogProvider } from "./blogg/BlogContext";


import 'tailwindcss/tailwind.css';
import './components/styling/home.css';



const App = () => {
  const { userLoggedIn } = useAuth();
  return (
    <UserProvider>
      <BlogProvider>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BlogList" element={<BlogList />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/ContactSection" element={<ContactSection />} />
            <Route
              path="/add"
              element={
                <ProtectedRoute>
                  <AddBlogPost />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </BlogProvider>
    </UserProvider>
  );
};

const Home = () => { 
  return (
    <div>
      <Animation />
      <div>
        <HeroSection />
      </div>
      <div>
        <CaseStudySlider />
      </div>
      <div>
        <AboutSection />
      </div>

      <div>
        <SkillsCredentials />
      </div>
      <div>
        <SideProjects />
      </div>
      <div id="contact-section">
        <ContactSection />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default App;
