import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import OverlayContainer from '../../atoms/containers/overlay-container';
import { css } from '@emotion/css';
import BottomMarker from '../../atoms/markers/bottom-markers';
import { isBrowser } from '../../../helpers/common-helper';

interface BottomSheetProps {
  isActive: boolean;
  deactive: () => void;
  children: React.ReactNode;
  handlerColor?: string;
  bottomSheetCallback?: any;
}

const BottomSheet = (props: BottomSheetProps) => {
  const FillerBottomsheet = styled.div({
    width: '100%',
    maxWidth: '720px',
    backgroundColor: 'transparent',
    zIndex: 30,
    height: '50vh',
  });

  const ContentBottomSheet = styled.div({
    position: 'relative',
    width: '100%',
    maxWidth: '720px',
    backgroundColor: 'white',
    zIndex: 30,
    height: '95vh',
    overflowY: 'scroll',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  });

  const onCloseClick = () => {
    document.getElementById('second')?.scrollTo(0, 0);
    const timeoutClose = window.setTimeout(() => {
      props.deactive && props.deactive();
    }, 200);
    return () => window.clearTimeout(timeoutClose);
  };

  const touchEnd = () => {
    if (typeof window !== 'undefined') {
      const scrollPos = document.getElementById('second')!.scrollTop;
      if (scrollPos < ((window.innerHeight / 2) * 9.5) / 10 - 75) {
        onCloseClick();
      } else {
        document.getElementById('second')?.scrollTo(0, ((window.innerHeight / 2) * 9.5) / 10);
      }
    }
  };

  useEffect(() => {
    if (props.isActive && typeof document !== 'undefined' && typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      document.getElementById('second')?.scrollTo(0, ((window.innerHeight / 2) * 9.5) / 10);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [props.isActive]);

  return props.isActive ? (
    <>
      <OverlayContainer onClick={props.deactive} />
      <div
        id="second"
        onTouchEnd={touchEnd}
        onScroll={() => {
          if (isBrowser()) {
            if (document.getElementById('second')!.scrollTop + window.innerHeight == document.getElementById('second')!.scrollHeight) {
              document.getElementById('content')!.style.overflow = 'scroll';
            } else {
              document.getElementById('content')!.style.overflow = 'hidden';
            }
          }
        }}
        className={css`
          z-index: 30;
          position: fixed;
          top: 0;
          height: 100%;
          width: 100%;
          overflow: scroll;
          scroll-behavior: smooth;
        `}>
        <FillerBottomsheet onClick={onCloseClick} />
        <ContentBottomSheet
          id="content"
          onScroll={() => {
            if (isBrowser()) {
              props.bottomSheetCallback && props.bottomSheetCallback(document.getElementById('content')!.scrollTop)
              if (document.getElementById('content')!.scrollTop !== 0) {
                document.getElementById('second')!.style.overflow = 'hidden';
              } else {
                document.getElementById('second')!.style.overflow = 'scroll';
              }
            }
          }}>
          <div
            className={css`
              position: sticky;
              top: 0;
              background: ${props.handlerColor || 'white'};
              height: 48px;
              display: flex;
              justify-content: center;
              z-index: 30;
            `}>
            <div
              className={css`
                width: 60px;
                height: 4px;
                background: ${props.handlerColor !== 'white' ? 'white' : 'grey'};
                margin-top: 16px;
                border-radius: 9999px;
              `}
            />
          </div>
          {props.children}
        </ContentBottomSheet>
      </div>
    </>
  ) : null;
};

BottomSheet.defaultProps = {
  isActive: false,
};
export default BottomSheet;
