import React from 'react';
import StartDefault from './components/StartDefault';
import { useDispatch,useSelector } from "react-redux";
// import "./App.css"

const App = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)

    console.log(selector);

    return (
        <div>
            <StartDefault/>
        </div>
);
}

export default App;