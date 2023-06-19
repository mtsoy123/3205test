import React from "react";
import Error from "../Error/Error";

type User = {
    email: string;
    number: string;
};

type Props = {
    data: User[];
    isFound: boolean;
    error: number;
};

export default function ({ data, isFound, error }: Props) {
    const renderData = (data: User[]) => {
        return data.map((item) => {
            return (
                <React.Fragment key={item.number}>
                    <li key={item.number + 1} className="results__result">
                        {item.email}
                    </li>
                    <li key={item.number + 2} className="results__result">
                        {item.number}
                    </li>
                </React.Fragment>
            );
        });
    };
    return (
        <>
            {isFound ? (
                <section className="results">
                    <ul className="results__wrapper">
                        <h2 className="results__header">Email</h2>
                        <h2 className="results__header">Number</h2>
                        {renderData(data)}
                    </ul>
                </section>
            ) : (
                <Error error={error}></Error>
            )}
        </>
    );
}
