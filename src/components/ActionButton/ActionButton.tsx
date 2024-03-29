import styles from './ActionButton.module.scss';
import { FaPlus } from 'react-icons/fa';
import { CSSProperties } from 'react';
import clsx from 'clsx';

interface Props {
  style?: CSSProperties;
  type?: 'circle' | 'rectangle';
  onClick: () => void;
}

export const ActionButton = ({ style, type, ...rest }: Props): JSX.Element => {
  return (
    <button
      className={clsx(
        styles.button,
        type === 'circle' ? styles.circle : styles.rectangle
      )}
      {...rest}
      style={style}
    >
      <FaPlus />
    </button>
  );
};
