import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Results from "../Results/Results";
import { api } from "../../utils/api";
import Loader from "../Loader/Loader";
import {
    cleanNumberRegex,
    emailRegex,
    inputRegex,
    numberRegex,
} from "../../utils/regExp";

function App() {
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [isFound, setIsFound] = useState(true);
    const [apiRes, setApiRes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [firstRender, setFirstRender] = useState(true);
    const [error, setError] = useState<number>(123);

    const submitForm = () => {
        setFirstRender(false);
        setIsLoading(true);
        api.submit({ email, number: number.replace(cleanNumberRegex, "") })
            .then((res) => {
                setIsLoading(false);
                setApiRes(res);
                setIsFound(true);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
                setIsFound(false);
                setError(err);
            });
    };

    const preventRefresh = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const handleNumberChange = (value: string) => {
        const input = value.replace(cleanNumberRegex, "");
        const formattedInput = input.replace(inputRegex, "$1-");
        setNumber(formattedInput);
    };

    return (
        <main className="app">
            <form
                className="app__form"
                onSubmit={(event) => preventRefresh(event)}
            >
                <div className="app__wrapper">
                    <Input
                        label="Email"
                        handleChange={setEmail}
                        val={email}
                        isRequired={true}
                        regEx={emailRegex}
                        errorMessage="Incorrect email format"
                    />
                    <Input
                        label="Number"
                        handleChange={handleNumberChange}
                        val={number}
                        isRequired={false}
                        regEx={numberRegex}
                        errorMessage="Incorrect number format"
                    />
                </div>
                <Button label="Submit" handleSubmit={submitForm} />
            </form>
            {!firstRender &&
                (isLoading ? (
                    <Loader />
                ) : (
                    <Results error={error} isFound={isFound} data={apiRes} />
                ))}
        </main>
    );
}

export default App;
