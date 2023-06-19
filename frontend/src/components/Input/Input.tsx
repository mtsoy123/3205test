import React, { useState } from "react";

type Props = {
    label: string;
    handleChange: Function;
    val: string;
    isRequired: boolean;
    regEx: RegExp;
    errorMessage: string;
};

export default function Input({
    label,
    handleChange,
    val,
    isRequired,
    regEx,
    errorMessage,
}: Props) {
    const [error, setError] = useState("");

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (!regEx.test(val)) {
            setError(errorMessage);
        } else {
            setError("");
        }

        handleChange(event.currentTarget.value);
    };

    return (
        <div className="input">
            <label className="input__label">{label}</label>
            <input
                required={isRequired}
                value={val}
                className="input__input"
                onChange={(event) => handleInputChange(event)}
            ></input>
            {error && <span className="input__error">{errorMessage}</span>}
        </div>
    );
}
