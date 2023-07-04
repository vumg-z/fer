import React from 'react';

type HeaderProps = {
  text: string;
  style?: React.CSSProperties;
};

const Header: React.FC<HeaderProps> = ({ text, style }) => {
  return <h2 style={style}>{text}</h2>;
};

export default Header;
