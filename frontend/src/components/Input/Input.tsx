import React from "react";

type Props = {
    label: string;
};

export default function Input({ label }: Props) {
    return (
        <div className="input">
            <label className="input__label">{label}</label>
            <input className="input__input"></input>
        </div>
    );
}
