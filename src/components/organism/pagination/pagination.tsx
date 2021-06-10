import { css } from '@emotion/css';
import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { COLOR_PALETTE } from '../../../helpers/styling-helper';

interface PaginationProps {
  max: number;
  selected: number;
  firstOnClick: () => void;
  lastOnClick: () => void;
  nextOnClick: () => void;
  prevOnClick: () => void;
}

const Pagination = (props: PaginationProps) => {
  return (
    <div
      className={css`
        position: fixed;
        bottom: 0;
        width: 100%;
        max-width: 720px;
        padding-right: 16px;
        padding-left: 16px;
        margin-bottom: 32px;
      `}>
      <div
        className={css`
          background-color: ${COLOR_PALETTE.BLUE_3};
          height: 48px;
          border-radius: 9999px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 16px;
          padding-left: 16px;
          box-shadow: 0px 2px 4px rgba(217, 235, 242, 0.15);
        `}>
        <div
          className={css`
            justify-content: center;
            align-items: center;
            display: flex;
          `}>
          <div
            onClick={props.firstOnClick}
            className={css`
              justify-content: center;
              align-items: center;
              display: flex;
              width: 32px;
              height: 32px;
            `}>
            <MdKeyboardArrowLeft
              className={css`
                margin-right: -20px;
              `}
              size="24px"
            />
            <MdKeyboardArrowLeft size="24px" />
          </div>
          <div
            onClick={props.prevOnClick}
            className={css`
              justify-content: center;
              align-items: center;
              display: flex;
              width: 32px;
              height: 32px;
            `}>
            <MdKeyboardArrowLeft size="24px" />
          </div>
        </div>

        <div
          className={css`
            color: black;
            border-radius: 999px;
            width: 32px;
            height: 32px;
            justify-content: center;
            align-items: center;
            display: flex;
          `}>
          {props.selected + 1}/{props.max}
        </div>

        <div
          className={css`
            justify-content: center;
            align-items: center;
            display: flex;
          `}>
          <div
            onClick={props.nextOnClick}
            className={css`
              justify-content: center;
              align-items: center;
              display: flex;
              width: 32px;
              height: 32px;
            `}>
            <MdKeyboardArrowRight size="24px" />
          </div>
          <div
            onClick={props.lastOnClick}
            className={css`
              justify-content: center;
              align-items: center;
              display: flex;
              width: 32px;
              height: 32px;
            `}>
            <MdKeyboardArrowRight size="24px" />
            <MdKeyboardArrowRight
              size="24px"
              className={css`
                margin-left: -20px;
              `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
