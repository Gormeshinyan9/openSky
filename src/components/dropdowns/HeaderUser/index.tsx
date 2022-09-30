import React, {useRef} from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import usePortal from 'react-useportal';
import Cookies from 'universal-cookie';

import {Route} from '~/constants';
import {useOnClickOutside} from '~/hooks';
import {LogoutIcon, DownIcon} from '~/assets';

import styles from './HeaderUser.module.scss';

const Avatar = dynamic(() => import('react-avatar'), {
  ssr: false,
});

const HeaderUser: React.FC = () => {
  const cookies = new Cookies();

  const userRef = useRef(null);
  const {openPortal, closePortal, isOpen, Portal} = usePortal();

  useOnClickOutside(userRef, closePortal, true);

  const handleLogoutClick = async () => {
    cookies.remove('token');
    await Router.push(Route.SignIn);
  };

  return (
    <React.Fragment>
      <div
        role="button"
        ref={userRef}
        data-dropdown="true"
        className={styles.user}
        onClick={!isOpen ? openPortal : closePortal}>
        <Avatar name="User" size="44" round="50%" color="#048f92" />
        <DownIcon
          className={styles.user__arrow}
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
          }}
        />
      </div>

      {isOpen && (
        <Portal>
          <div className={styles.box}>
            <div className={styles.box__content}>
              <div className={styles.box__content__header}>
                Log out
                <div
                  role="button"
                  onClick={handleLogoutClick}
                  className={styles.box__content__header__logout}>
                  <LogoutIcon />
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

export default HeaderUser;
