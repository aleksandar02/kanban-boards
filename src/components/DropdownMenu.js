import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const DropdownMenu = ({ options, handleClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);

    const action = e.target.getAttribute('value');

    if (action != null) {
      handleClick(action);
    }
  };

  return (
    <span>
      <BiDotsVerticalRounded
        aria-label='more'
        id='long-button'
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup='true'
        onClick={handleOpen}
      />
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '16ch',
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={handleClose} value={option}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </span>
  );
};

export default DropdownMenu;
