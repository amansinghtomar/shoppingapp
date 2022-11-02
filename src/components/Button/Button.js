import styled from "styled-components";

const ButtonStyle = styled.button`
   width: ${(props) => (props.fullWidth ? "100%" : "150px")};
   height: ${(props) => (props.height ? props.height : "2.7rem")};
   font-size: 1em;
   border: none;
   background-color: ${(props) =>
      props.background ? props.theme.colors[props.background] : props.theme.colors.primary};
   color: ${(props) =>
      props.color ? props.theme.colors[props.color] : props.theme.colors.secondary};
   box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : props.theme.boxShadow.light)};
   border-radius: ${(props) => (props.rounded ? "25px" : "8px")};
   transition: 0.5s;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 5px;

   &:hover {
      cursor: pointer;
      box-shadow: ${(props) => props.theme.boxShadow.dark};
      background: ${(props) =>
         props.text ? props.theme.colors.light : !props.background && props.theme.colors.dark};
   }

   &:disabled {
      cursor: default;
      box-shadow: ${(props) => props.theme.boxShadow.light};
      background: ${(props) => props.theme.colors.disabled};
   }
`;

export const Button = (props) => {
   const { children, startIcon, endIcon, background, text, color } = props;
   return (
      <ButtonStyle
         {...props}
         background={text ? "secondary" : background}
         color={text ? "primary" : color}
         boxShadow={text && "none"}
      >
         {startIcon && <img src={startIcon} alt="startIcon" height="25px" />}
         {children}
         {endIcon && <img src={endIcon} alt="startIcon" height="25px" />}
      </ButtonStyle>
   );
};
