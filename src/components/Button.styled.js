import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

// use tailwind classes the styled way
const StyledButton = styled.header`
    ${tw`
    bg-black 
    text-white
    p-2
    rounded-lg
    m-2
    `};
`;
const Button = () => {
    return <StyledButton css={tw`bg-white`}>Styled Button</StyledButton>;
};

export default Button;
