import styled, { css } from 'styled-components';

export const InputField = styled.input`
width: 100%;
box-sizing: border-box;
outline: none;
border: none;
background-color: inherit;
color: white;
padding: 0;
font-size: 18px;
margin-bottom: 4px;

`;

export const InputFieldDetails = styled.div`
width: 100%;
box-sizing: border-box;
outline: none;
border: none;
background-color: inherit;
color: white;
padding: 0;
font-size: 18px;
margin-bottom: 4px;
`;

export const InputLabel = styled.label`
display: block;
font-size: 14px;
margin-top: 4px;
`;
export const InputContainer = styled.div`
background-color: #212121;
border: 1px solid rgba(255, 255, 255, 0.1);
box-sizing: border-box;
color: white;
padding: 10px 20px;
border-radius:5px;
${(props)=> props.error && css`
border: 1px solid red;
`}
`;
export const InputError = styled.div`
font-size: 14px;
margin-top: 4px;
color: red
`;

export const Flex = styled.div`
display: flex;
justify-content: ${(props)=> props.justifyContent};
align-items: ${(props)=> props.alignItems};


`;

export const ApplicationRootStyles = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
background-color: #1b1b1b;
align-item:center;
.base-form{
    width: 650px;
}
`;

export const Button = styled.button`
padding: 12px 60px;
font-size:18px;
outline: none;
border: none;

cursor: pointer;
color: white;
border-radius: 5px;
background-color:#0057ff;
:hover{
    background-color: #1c68ff
}
:active{
  background-color: grey
}

${(props) => props.secondary && css` 

background-color: unset;
border: 1px solid #fff;
:hover, 
active{
    background-color: unset

}
`}
`;