import React from "react";

type Props = { error: number };

export default function Error({ error }: Props) {
    let label: string = "";
    if (error === 404) {
        label = "User not found";
    } else if (error === 400) {
        label = "Incorrect data entered";
    }

    return (
        <div className="error">
            <h2 className="error__header">{label}</h2>
        </div>
    );
}
