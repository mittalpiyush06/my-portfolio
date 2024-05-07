import React from "react";
import styled from "styled-components";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { myDetails } from "../constants/myDetails";


const FooterSection = styled.div`   
    position: absolute;
    background: linear-gradient(135deg, black, red);
    display: flex;
    width: 100%;
    bottom: 0;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    .my-resume {
        text-decoration: none;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

function Footer() {

  return (
    <FooterSection>
        <a className="my-resume" href={myDetails.resume_url} target='_blank' rel="noopener noreferrer">My Resume <FaArrowUpRightFromSquare style={{"marginLeft": "1rem"}}/></a>
    </FooterSection>
  );
}

export default Footer;
