import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { COLOR_PALETTE, font_color, font_leading, font_size } from '../../../helpers/styling-helper';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  type: ButtonVariant;
  label: string;
  onClick: () => void;
  className?: string;
}

const ButtonInput = (props: ButtonProps) => {
  const Button = styled.button({
    width: '100%',
    height: '40px',
    backgroundColor: props.type == 'primary'? COLOR_PALETTE.ORANGE_1 : 'white',
    border: props.type == 'primary'? 'none' : `1px solid ${COLOR_PALETTE.ORANGE_1}`,
    borderRadius: '8px',
  });
  return (
    <Button className={props.className} onClick={props.onClick}>
      <div
        className={css`
          font-weight: 700;
          font-size: ${font_size.S};
          line-height: ${font_leading.S};
          color: ${props.type !== 'primary'? COLOR_PALETTE.ORANGE_1 : 'white'};
        `}>
        {props.label}
      </div>
    </Button>
  );
};

export default ButtonInput;
