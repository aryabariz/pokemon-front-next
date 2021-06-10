import { css } from '@emotion/css';
import React, { useEffect } from 'react';
import { useTransition, a } from 'react-spring';
import { COLOR_PALETTE } from '../../../helpers/styling-helper';

interface SnackbarProps {
  label: string;
  active: boolean;
  deactive: () => void;
  actionLabel: string;
  actionOnClick: () => void;
}

const Snackbar = (props: SnackbarProps): React.ReactElement => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (props.deactive) {
        props.deactive && props.deactive();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [props.active]);

  const transition = useTransition(props.active, {
    from: { transform: 'translate3d(0px, -100%, 0px)' },
    enter: { transform: 'translate3d(0px, 0%, 0px)' },
    leave: { transform: 'translate3d(0px, -300%, 0px)' },
  });

  return transition((style, item) =>
    item ? (
      <a.div
        style={style}
        className={css`
          padding-left: 16px;
          padding-right: 16px;
          margin-top: 64px;
          top: 0;
          position: fixed;
          width: 100%;
          max-width: 720;
          z-index: 100;
        `}>
        <div
          className={css`
            background-color: black;
            color: white;
            width: 100%;
            border-radius: 16px;
            padding: 16px;
            display: flex;
            justify-content: space-between;
          `}>
          <div>{props.label}</div>
          <div
            onClick={props.actionOnClick}
            className={css`
              color: ${COLOR_PALETTE.ORANGE_1};
            `}>
            {props.actionLabel}
          </div>
        </div>
      </a.div>
    ) : null
  );
};

export default Snackbar;
