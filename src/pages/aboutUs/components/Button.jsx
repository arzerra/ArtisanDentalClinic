import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="cta">
        <span className="hover-underline-animation"> Meet Our Dentist </span>
        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width={30} height={10} viewBox="0 0 46 16">
          <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30, 0)" />
        </svg>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
.cta {
  border: none;
  background: none;
  cursor: pointer;
  display: flex;        
  align-items: center;    
  gap: 8px;        
}

.cta span {
  letter-spacing: 4px;
  font-size: 1.5rem;
  font-family: "Darker Grotesque"
  text-transform: uppercase;
  padding-bottom: 0; 
  color: #374151;   
}

.cta svg {
  transform: translateX(0); /* optional, or adjust for hover */
}

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active svg {
    transform: scale(0.9);
  }

  .hover-underline-animation {
    position: relative;
    color: black;
    padding-bottom: 20px;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .cta:hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }`;

export default Button;
