import styled from 'styled-components';
import { isPropertySignature } from 'typescript';

export const Container = styled.div<{ left: number, top: number, size: number }>`
  width: ${props => props.size}px;
  height: ${props=> props.size}px;
  position: absolute;
  left:${props=> props.left}px; 
  top: ${props=> props.top}px;
  background-color: blue;
`;