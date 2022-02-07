import React from 'react';
import { SplitScreen } from './Common';
import Header from "./Common/Header/Header";
import { MainRoute } from "./Common";


function App() {

    return (
        <>
            <SplitScreen secondSize={1} firstSize={2} withHeader>
                <Header/>
                <MainRoute/>
            </SplitScreen>
        </>
    );

}

export default App;
