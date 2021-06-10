import { css } from '@emotion/css';
import { COLOR_PALETTE } from '../../../helpers/styling-helper';
import OverlayContainer from '../../atoms/containers/overlay-container';
import ButtonInput from '../inputs/button-input';

interface NamingDialogProps {
  active: boolean;
  primaryOnClick: () => void;
  secondaryOnClick: () => void;
  value: string;
  onChange: (e: any) => void;
}

const NamingDialog = (props: NamingDialogProps) => {
  return props.active ? (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        max-width: 720px;
        padding-right: 16px;
        padding-left: 16px;
        z-index: 20;
      `}>
      <div
        className={css`
          background-color: white;
          opacity: 1;
          padding: 16px;
          border-radius: 16px;
          width: 100%;
        `}>
        <div
          className={css`
            font-size: 18px;
            line-height: 24px;
            font-weight: 700;
          `}>
          Give Your Pokémon Name
          <div
            className={css`
              margin-top: 8px;
            `}>
            <input
              className={css`
                width: 100%;
                border-bottom: 1px solid ${COLOR_PALETTE.GREY_2};
                outline: 2px solid transparent;
                outline-offset: 2px;
                padding-top: 4px;
                padding-bottom: 4px;
                font-size: 16px;
                border-top: none;
                border-left: none;
                border-right: none;
                line-height: 24px;
              `}
              type="text"
              value={props.value}
              placeholder="Input here"
              onChange={props.onChange}
            />
          </div>
          <div
            className={css`
              display: grid;
              grid-auto-flow: column;
              grid-column-gap: 8px;
              margin-top: 16px;
            `}>
            <ButtonInput type="secondary" onClick={props.secondaryOnClick} label="Cancel" />
            <ButtonInput type="primary" onClick={props.primaryOnClick} label="Done" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default NamingDialog;
