import React from "react";
import './App.css';
import { RightSection } from "./components/RightSection";
import { LeftSection } from "./components/LeftSection";
import styled from "styled-components";
import useVisibility from './customHooks/useVisibility';

const Main = styled.div`
  background: linear-gradient(135deg, #191714, #2234AE);
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex: 5;
  font-size: 20px;
  text-align: left;
`;

function App() {
  const [isAboutVisible, aboutRef] = useVisibility(0);
  const [isExperienceVisible, experienceRef] = useVisibility(0);
  const [isProjectsVisible, projectRef] = useVisibility(0);

  return (
    <Main>
      {/* Left Section */}
      <LeftSection isAboutVisible={isAboutVisible} isExperienceVisible={isExperienceVisible} isProjectsVisible={isProjectsVisible} />
      <RightSection aboutRef={aboutRef} experienceRef={experienceRef} projectRef={projectRef} />
      {/* Right Section */}
    </Main>
  );
}

export default App;
