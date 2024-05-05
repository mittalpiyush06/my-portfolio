import * as React from 'react';
import styled from 'styled-components';
import List from './List';
import { myDetails } from '../constants/myDetails';
import { experience } from '../constants/experience';
import { projects } from '../constants/projects';


const RightSectionDiv = styled.div`
    display: flex;
    flex: 3;
    overflow: hidden;
    .component {
        padding: 5rem;
        color: #94A3B8;
        overflow: scroll;
        -ms-overflow-style: none;
    }
    .about{
        padding-top: 5rem;
    }
    ::-webkit-scrollbar { 
        display: none;
    }
`;

type RightSecionProps = {
    aboutRef: React.MutableRefObject<HTMLDivElement|null>;
    experienceRef: React.MutableRefObject<HTMLDivElement|null>;
    projectRef: React.MutableRefObject<HTMLDivElement|null>;
}

export const RightSection = ({aboutRef, experienceRef, projectRef}: RightSecionProps) => {
    return (
        <RightSectionDiv>
            <div className="component">
                <div className="about" ref={aboutRef} id="about">
                    {myDetails.about_right}
                </div>
                <List listType={experience} id="experience" innerRef={experienceRef}/>
                <List listType={projects} id="project" innerRef={projectRef}/>
            </div>
        </RightSectionDiv >
    );
}
