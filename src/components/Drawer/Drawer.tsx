import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './Drawer.module.scss';

interface IDrawerProps {
  children: ReactNode;
}

const Drawer = ({ children }: IDrawerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.drawerWrapper}>
      <button
        type='button'
        aria-label='Toggle Drawer'
        className={classNames(styles.drawerToggle, {
          [styles.open]: isOpen,
        })}
        onClick={toggleDrawer}
      >
        <Image
          src='/images/menu.svg'
          alt='drawer menu icon'
          width={24}
          height={24}
        />
      </button>

      <div className={classNames(styles.drawer, { [styles.open]: isOpen })}>
        <button
          aria-label='Close Drawer'
          type='button'
          className={styles.drawerClose}
          onClick={toggleDrawer}
        >
          <Image
            src='/images/close.svg'
            alt='drawer menu icon'
            width={24}
            height={24}
          />
        </button>
        {children}
      </div>

      {isOpen && (
        <div
          className={styles.drawerOverlay}
          onClick={toggleDrawer}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              toggleDrawer();
            }
          }}
          tabIndex={0}
          role='button'
          aria-label='Close Drawer'
        />
      )}
    </div>
  );
};

export default Drawer;
