import { css } from '@emotion/css';
import React from 'react';
import OverlayContainer from '../../atoms/containers/overlay-container';

interface LoadingPageProps {
  active: boolean;
}

const LoadingPage = (props: LoadingPageProps) => {
  return props.active ? (
    <OverlayContainer
      className={css`
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
      `}>
      <svg
        className={css`
          height: 48px;
          width: 48px;
          color: white;
          animation: spin 1s linear infinite;
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle
          className={css`
            opacity: 0.25;
          `}
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"></circle>
        <path
          className={css`
            opacity: 0.75;
          `}
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </OverlayContainer>
  ) : null;
};

export default LoadingPage;
