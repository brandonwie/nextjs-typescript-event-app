import classes from './logistics-item.module.css';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { FC, ReactNode } from 'react';

interface LogisticsItemProps {
  icon: SvgIconProps;
  children: ReactNode;
}

const LogisticsItem: FC<LogisticsItemProps> = ({
  icon,
  children,
}: LogisticsItemProps): JSX.Element => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;
