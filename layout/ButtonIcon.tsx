import Link from 'next/link';
import { Button } from '@material-ui/core';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  link: string;
}

const ButtonIcon: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  return (
    <Link href={props.link}>
      <Button
        variant='contained'
        size='medium'
        color='primary'
        style={{ fontSize: 16, fontWeight: 'bold' }}
      >
        {props.children}
      </Button>
    </Link>
  );
};

export default ButtonIcon;
