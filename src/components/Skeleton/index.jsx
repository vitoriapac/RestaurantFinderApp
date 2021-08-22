import React from 'react';
import styled, { keyframes } from 'styled-components'

const KeyFramesLoading = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1.0;
  }
`;

const LoadingSkeleton = styled.div`
  background-color: #00000014;
  border-radius: 6px;
  margin-top: 10px;
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${KeyFramesLoading} 500ms infinite alternate;
`;

export default ({ width, height }) => <LoadingSkeleton width={width} height={height} />;