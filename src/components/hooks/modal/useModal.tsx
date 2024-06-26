import {MouseEventHandler, ReactNode, useEffect, useState} from 'react';
import styles from './Modal.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalButtonArgs {
  onClick: () => void;
  label?: string;
  icon?: string;
  showOnBottom?: () => void;
}

interface Args {
  children: ReactNode;
  size?: string;
  title?: string;
  buttons?: {
    confirm?: ModalButtonArgs;
    close?: ModalButtonArgs;
    showOnBottom?: boolean;
  };
  isOpen: boolean;
  className?: string;
}

const Backdrop = ({ children, onClick }: any) => {
  return (
    <motion.div
      onClick={onClick}
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default function Modal({ children, title, buttons, isOpen }: Args) {
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      y: '100vh',
      opacity: 0
    }
  };

  useEffect((): any => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  return (
    <Backdrop onClick={buttons && buttons.close?.onClick}>
      <motion.div
        onClick={e => e.stopPropagation()}
        className={styles.popup}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        key="modal"
      >
        <AnimatePresence mode="wait">
          <div>
            <h2>{title}</h2>
            <span className={styles.close} onClick={buttons?.close?.onClick}>
              &times;
            </span>

            <div className={styles.content}>
              {children}

              <div>
                {buttons && (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      margin: '2rem 0 1rem 0'
                    }}
                  >
                    {buttons.close && buttons.close.showOnBottom && (
                      <button
                        onClick={buttons.close.onClick}
                        style={{
                          backgroundColor: '#ffad0d',
                          padding: '0.8rem 1.6rem',
                          border: 'none',
                          color: '#fff',
                          borderRadius: '3px',
                          fontSize: '1rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {buttons.close.label ?? 'Cancel'}
                      </button>
                    )}
                    {buttons.confirm && (
                      <button
                        onClick={buttons.confirm.onClick}
                        style={{
                          backgroundColor: '#ffad0d',
                          padding: '0.8rem 1.6rem',
                          border: 'none',
                          color: '#fff',
                          borderRadius: '3px',
                          fontSize: '1rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {buttons.confirm.label ?? 'Save'}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimatePresence>
      </motion.div>
    </Backdrop>
  );
}

export interface ModalOperations<T> {
  data: T | undefined;
  isOpen(): boolean;
  close(data?: T): void;
  open(data?: T): void;
}

/**
 * if generic is not provided, then with proper use ```onClick={useModal.open|close}```
 * default will be MouseEventHandler
 * <pre>
 *     const useModal = useModal();
 *     return <ActionButton text={'ddd'} onClick={useModal.open}/>
 * </pre>
 * @param openDefault
 * @param dataDefault
 */
export function useModal<T = MouseEventHandler<any>>(
  openDefault = false,
  dataDefault = undefined
): ModalOperations<T> {
  const [isModalOpen, setIsModalOpen] = useState(openDefault);
  const [data, setData] = useState<T | undefined>(dataDefault);
  return {
    data,
    isOpen(): boolean {
      return isModalOpen;
    },
    close(data?: T) {
      // IMPORTANT: DO NOT CHANGE first we need to close, next change data
      setIsModalOpen(false);
      setData(data);
    },
    open(data?: T) {
      // IMPORTANT: THERE WE NEED TO SET DATA FIRST, because reactivity works there and outer component can
      // be dependent on '.isOpen()' function and data inside of it can render stuff using 'data' variable
      setData(data);
      setIsModalOpen(true);
    }
  };
}
