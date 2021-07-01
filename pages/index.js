import React from 'react';
import WithLayout from "../src/views/WithLayout";
import Lending from "../src/views/Lending";
import {Main} from "../src/layouts";


export default function Home() {
    return (
        <WithLayout
            component={Lending}
            layout={Main}
        />
    )
}
