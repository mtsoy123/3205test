import React from "react";

type Props = {};

export default function ({}: Props) {
    return (
        <section className="results">
            <ul className="results__wrapper">
                <h2 className="results__header">Email</h2>
                <li className="results__result">someemail</li>
                <li className="results__result">someemail</li>
            </ul>
            <ul className="results__wrapper">
                <h2 className="results__header">Number</h2>
                <li className="results__result">somenumber</li>
                <li className="results__result">somenumber</li>
            </ul>
        </section>
    );
}
