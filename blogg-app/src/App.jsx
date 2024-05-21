import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './assets/components/header/NavBar';
import AboutSection from './assets/components/home/AboutSection';
import ContactSection from './assets/components/home/ContactSection';
import HeroSection from './assets/components/home/Hero'; 
import Animation from './assets/components/Animation';
import SkillsCredentials from './assets/components/Skills';
import SideProjects from './assets/components/Sideprojects';
import CaseStudySlider from './assets/components/home/CaseSlider';
import Footer from './assets/components/Footer';
import BlogList from "./assets/components/blogg/BlogList";
import BlogPost from "./assets/components/blogg/BlogPost";
import AddBlogPost from "./assets/components/blogg/AddBlogPost";
import SignIn from "./assets/components/blogg/SignIn";
import ProtectedRoute from "./assets/components/blogg/ProtectedRoute";
import { UserProvider } from "./assets/components/blogg/UserContext";
import { BlogProvider } from "./assets/components/blogg/BlogContext";
import BlogWrapper from "./assets/components/blogg/BloggWrapper"; 

import 'tailwindcss/tailwind.css';
import './assets/styling/home.css';

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
