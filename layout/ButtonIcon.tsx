import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  link?: string;
  onClick?: () => {};
}

const ButtonIcon: FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          style={{ fontSize: 16, fontWeight: 'bold' }}
        >
          {props.children}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      onClick={props.onClick}
      variant="contained"
      size="medium"
      color="primary"
      style={{ fontSize: 16 }}
    >
      {props.children}
    </Button>
  );
};

export default ButtonIcon;
