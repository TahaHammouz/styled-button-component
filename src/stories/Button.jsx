import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `
          background: ${props.color};
          border: 2px solid ${props.color};
          color: white;
        `;
      case "secondary":
        return `
          background: white;
          border: 2px solid ${props.color};
          color: ${props.color};
        `;
      case "text":
        return `
          background: transparent;
          border: none;
          color: ${props.color};
          &:hover {
            text-decoration: underline;
          }
        `;
      default:
        return `
          background: ${props.color};
          border: 2px solid ${props.color};
          color: white;
        `;
    }
  }};
  ${(props) => {
    switch (props.size) {
      case "small":
        return `
          font-size: 14px;
          padding: 5px 10px;
        `;
      case "large":
        return `
          font-size: 20px;
          padding: 15px 30px;
        `;
      default:
        return `
          font-size: 16px;
          padding: 10px 20px;
        `;
    }
  }};
`;

const Button = ({ children, variant, color, size, ...props }) => {
  let bgColor;

  switch (color) {
    case "primary":
      bgColor = "#0074D9";
      break;
    case "secondary":
      bgColor = "#7FDBFF";
      break;
    case "tertiary":
      bgColor = "#39CCCC";
      break;
    default:
      bgColor = "#0074D9";
  }

  return (
    <StyledButton variant={variant} color={bgColor} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
