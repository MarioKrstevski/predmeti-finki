import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';

import React, { useState } from 'react';
import Button from './components/Button';
import StyledButton from './components/Button.styled';
setConfig({
    reloadHooks: true,
});

const App = () => {

  const [modalShow, setModalShow] = useState(false);
    return (
        <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
            <h1>Super cool page</h1>
            <Button onClick={() => console.log('I was clicked')}>
                I am a button 
            </Button>

            <button className="btn btn-blue btn-blue:hover"
            onClick={()=>setModalShow(!modalShow)}
            >
                Magic button
            </button>

            <StyledButton />
        </div>
    );
};

export default process.env.NODE_ENV === "development" ? hot(App) : App;
