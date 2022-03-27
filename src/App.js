import React, { useState } from 'react';
import logo from './logo.svg';
import Nav from './components/Nav'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css';
import Projects from './Projects';
import Contact from './components/Contact';

function App() {
 
  return (
  <div>
  <Header />

<div> 

</div>
      <main>
        <About>

        </About>
        <Contact />
        <Projects>
          
        </Projects>
        <Footer>

        </Footer>
      </main>
    </div>
  )
}

export default App;

/* odule not found: Error: Can't resolve '/Users/admin/Documents/projects/assignments/project-20/perso  nal-pizza/public/index.html' in '/Users/admin/Documents/projects/assignments/project-20/personal-piz  za'
  
ModuleNotFoundError: Module not found: Error: Can't resolve '/Users/admin/Documents/projects/assignm  ents/project-20/personal-pizza/public/index.html' in '/Users/admin/Documents/projects/assignments/pr  oject-20/personal-pizza'*/