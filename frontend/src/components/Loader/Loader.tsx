import React from "react";
import { BarLoader } from "react-spinners";

type Props = {};

export default function Loader({}: Props) {
    return (
        <div style={{ marginTop: "32px" }}>
            <BarLoader color="#646aff" />
        </div>
    );
}
