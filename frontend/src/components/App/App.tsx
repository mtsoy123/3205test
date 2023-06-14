import React from "react";
// import "./App.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

function App() {
    return (
        <div className="app">
            <form className="app__form">
                <div className="app__wrapper">
                    <Input label="Email" />
                    <Input label="Number" />
                </div>
                <Button label="Submit" />
            </form>
        </div>
    );
}

export default App;
