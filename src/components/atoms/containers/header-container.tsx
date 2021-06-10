import styled from "@emotion/styled";
import { font_leading, font_size } from "../../../helpers/styling-helper";


interface HeaderProps {
    backgroundColor?: string;
    justifyContent?: string;
    textColor?: string;
}

const HeaderContainer = styled.div(
  {
    width: "100%",
    height: "64px",
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: font_size.L,
    lineHeight: font_leading.L,
    paddingLeft: '16px',
    paddingRight: '16px'
    
  },
  (props: HeaderProps) => ({ background: props.backgroundColor, justifyContent: props.justifyContent, color: props.textColor })
);

HeaderContainer.defaultProps = {
    backgroundColor: 'white',
    justifyContent: 'center',
    textColor: 'black',
}

export default HeaderContainer;
