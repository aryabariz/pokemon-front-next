import { css } from '@emotion/css';
import React, { Children, useState, useEffect, useRef } from 'react';
import { useDrag } from 'react-use-gesture';

interface CarouselProps {
  selected: number;
  children: React.ReactNode;
  selectCallback: any;
}

const CarouselContainer = (props: CarouselProps): React.ReactElement => {
  const slide = useRef<HTMLDivElement>(null);
  const children = Children.toArray(props.children);
  const [selected, setSelected] = useState(props.selected);
  const [slideWidth, setSlideWidth] = useState(0);
  const [active, setActive] = useState(false);
  const [move, setMove] = useState(0);
  // set initial ref for drag event

  useEffect(() => {
    if (props.selected < 0 || props.selected > children.length - 1) {
      setSelected(selected);
      props.selectCallback(selected);
    } else {
      setSelected(props.selected);
    }
    setSlideWidth(-slide.current!.offsetWidth);
  }, [props.selected]);

  useEffect(() => {
    setSelected(selected);
    props.selectCallback(selected);
  }, [selected]);

  const bind = useDrag(({ active, last, movement: [mx] }) => {
    setActive(active);
    setMove(selected * slideWidth + mx);
    if (last) {
      if (children.length == 1 || children.length == 0) {
        if (mx / window.innerWidth < -0.03 || mx / window.innerWidth > 0.03) {
          setSelected(0);
        }
      } else {
        if (selected == 0) {
          if (mx / window.innerWidth < -0.03) {
            setSelected(selected + 1);
          }
        } else if (selected == children.length - 1) {
          if (mx / window.innerWidth > 0.03) {
            setSelected(selected - 1);
          }
        } else {
          if (mx / window.innerWidth < -0.03) {
            setSelected(selected + 1);
          }
          if (mx / window.innerWidth > 0.03) {
            setSelected(selected - 1);
          }
        }
      }
    }
  });
  return (
    <div
      className={css`
        overflow: hidden;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        height: 100%;
      `}
      {...bind()}
      ref={slide}>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          white-space: nowrap;
          width: 100%;
          height: 100%;
        `}>
        <div
          style={{
            width: `${100 * children.length}%`,
            transform: `translateX(${active ? move : selected * slideWidth}px)`,
            touchAction: 'none',
            transition: `${active ? '' : 'transform 0.5s'}`,
          }}
          className={css`
            display: flex;
            flex: none;
            flex-direction: row;
            white-space: nowrap;
            width: 100%;
            height: 100%;
          `}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CarouselContainer;
