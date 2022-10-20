import { Route, Routes } from "react-router";
import { Address } from "../enums";
import ExpensiveChild from "../../ExpensiveChild/ExpensiveChild";
import ExampleAppendToDom from "../../AttachToDom/AttachToDom";
import WithContext from "../../WithProvider";
import React from "react";
import { ButtonUseCallbackTest, WithProps } from "../../ExampleWIthMemoization";
import Lists from "../../ExampleWIthMemoization/Lists/Lists";
import { FastContextContent } from "../../FastContext";

export const MainRoute = () => {
    return (
        <Routes>
            <Route path={Address.Home} element={<ExpensiveChild/>}/>
            <Route path={Address.UseCallback} element={<ButtonUseCallbackTest/>}/>
            <Route path={Address.Lists} element={<Lists/>}/>
            <Route path={Address.WithProps} element={<WithProps/>}/>
            <Route path={Address.Append} element={<ExampleAppendToDom/>}/>
            <Route path={Address.Context} element={<WithContext/>}/>
            <Route path={Address.FastCtx} element={<FastContextContent/>}/>
        </Routes>
    );
};

