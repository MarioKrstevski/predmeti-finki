import React from 'react';
import Button from './components/Button';
import StyledButton from './components/Button.styled';

const App = () => {
    return (
        <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
            <h1>Super cool page</h1>
            <Button onClick={() => console.log('I was clicked')}>
                I am a button
            </Button>

            <button className="btn btn-blue btn-blue:hover">
                Magic button
            </button>

            <StyledButton />
        </div>
    );
};

export default App;
