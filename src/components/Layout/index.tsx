import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar';
import { Container } from './styles';




interface LayoutBaseProps {
    children: ReactNode; // Defina a propriedade children como ReactNode
}

const LayoutBase: React.FC<LayoutBaseProps> = ({ children }) => {
    return (
        <Sidebar>
            <Container>
                {children}
            </Container>
        </Sidebar>
    );
};

export default LayoutBase;
