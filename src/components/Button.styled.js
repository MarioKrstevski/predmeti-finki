import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

// use tailwind classes the styled way
const StyledButton = styled.header`
    ${tw`
    bg-black 
    p-2
    rounded-lg
    m-2
    border
    text-gray-500
    hover:cursor-pointer
    active:bg-blue-200
    `};
`;
const Button = () => {
    return <StyledButton css={tw`bg-white`}>Styled Button</StyledButton>;
};

export default Button;
