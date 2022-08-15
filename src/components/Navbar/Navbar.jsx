import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useStateContext } from '../../contexts/ContextProvider';
import klashaFullLogo from '../../assets/logo/klasha__logo.svg';

import DateToday from './date';
import Languge from './Languge';
import ToggleSwitch from './ToggleSwitch';
import UserDropDown from './UserDropDown';
import { Box, Link } from '@mui/material';

const Navbar = () => {
  const mobile = useMediaQuery('(max-width:640px)');
  const tablet = useMediaQuery('(max-width:720px)');

  const { setMobileMenu } = useStateContext();

  return (
    <div className='flex justify-between py-4 relative'>
      {mobile && (
        <Box sx={{ display: 'flex' }}>
          <button
            type='button'
            onClick={() => setMobileMenu(true)}
            className='mx-3 mr-4'
          >
            <AiOutlineMenu />
          </button>

          <Link to='/' className='flex justify-center item-center mt-4 '>
            <img src={klashaFullLogo} alt='klasha logo' />
          </Link>
        </Box>
      )}

      {!mobile && (
        <div className='flex items-center '>
          Today: <DateToday />
        </div>
      )}
      <div className='flex justify-between py-4'>
        <div className='flex justify-end items-center flex-grow '>
          {!mobile && !tablet && (
            <div className='mx-6 '>
              <ToggleSwitch />
            </div>
          )}
          <div>
            <span>Welcome back,</span>
            <UserDropDown />
          </div>
          {!mobile && (
            <div className='mx-6 '>
              <Languge />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;