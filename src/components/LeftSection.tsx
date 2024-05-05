import * as React from 'react';
import { useEffect, useState } from  'react';
import styled from 'styled-components';
import { myDetails } from '../constants/myDetails';
import { sections } from '../constants/sections';  

const LeftSectionDiv = styled.div`
    display: flex;
    flex: 2;
    .container{
        padding: 10rem 1rem 0rem 10rem;
    }
    .name {
        font-size: 80px;
        margin: 0rem 0rem 2rem 0rem;
    }
    .title {
        font-size: 24px;
        margin: 2rem 0rem;
    }
    .about {
        font-size: 18px;
        color: #94A3B8;
        margin: 2rem 0rem;
    }

    a {
        text-decoration: none;
        color: #94A3B8;
    }

    .sections {
        font-size: 18px;
        weight: normal;
    }

    .sections.selected {
        font-size: 18px;
        font-weight: 600;
        margin: 0.5rem;
    }

    .sections::before {
        text-align : center;
        font-size : 20px;
        color: #fff;
        margin-right: 20px;
        content: "—";
    }

    .sections.selected::before {
        text-align : center;
        font-size : 25px;
        font-weight: 400;
        color: #fff;
        mragin-right: 20px;
        content: "-";
    }
`;

type LeftSectionType = {
    isAboutVisible: boolean;
    isExperienceVisible: boolean;
    isProjectsVisible: boolean;
}

export const LeftSection = ({ isAboutVisible, isExperienceVisible, isProjectsVisible }: LeftSectionType) => {
    const [visible, setVisible] = useState(0);

    useEffect(() => {
        if(isAboutVisible){
            setVisible(0);
        }else if(isExperienceVisible){
            setVisible(1);
        }else if(isProjectsVisible){
            setVisible(2);
        }
    }, [isAboutVisible, isExperienceVisible, isProjectsVisible]);

    return (
        <LeftSectionDiv>
            <div className='container'>
                <div className='name'>
                    {myDetails.name}
                </div>
                <div className='title'>
                    {myDetails.title}
                </div>
                <div className='about'>
                    {myDetails.about_left}
                </div>
                <div className="navigation">
                    {
                        sections.map((value, key) => {
                            return (
                                <div 
                                    className={`sections ${visible === key ? 'selected' : ''}`} 
                                    key={key}
                                >
                                    <a href={`#${value.toLowerCase()}`}>
                                        {value}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </LeftSectionDiv>
    );
};
