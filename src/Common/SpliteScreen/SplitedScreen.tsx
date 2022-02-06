import React, { ReactNode } from 'react';
import { Container, Pane } from './styles';

interface IProps {
    children: ReactNode[];
    firstSize: number;
    secondSize: number;
    withHeader?: boolean;
}

export const SplitScreen = ({children, secondSize, firstSize, withHeader}: IProps) => {
    const [firstChild, secondChild] = children;
    return (
        <Container isColumn={withHeader}>
            <Pane weight={firstSize}>
                {firstChild}
            </Pane>
            <Pane weight={secondSize}>
                {secondChild}
            </Pane>
        </Container>);
};