import React from "react";

type Props = {
    label: string;
    handleSubmit: Function;
};

export default function Button({ label, handleSubmit }: Props) {
    const handleButtonSubmit = () => {
        handleSubmit();
    };

    return (
        <button onClick={handleButtonSubmit} className="button">
            {label}
        </button>
    );
}
