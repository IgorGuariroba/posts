import styles from './Avatar.module.css';

export function Avatar({hasBroder = true, src}) {
  return (
    <img
      className={hasBroder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}