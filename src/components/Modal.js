import { BiX } from 'react-icons/bi';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleModal } from '../redux/modal/modal.actions';

const Modal = ({ children, title, subtitle }) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modal.show);

  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <div className='modal-container'>
        <div className='modal-header'>
          <div>
            <h3>{title}</h3>
            <p>{subtitle && subtitle}</p>
          </div>
          <span>
            <BiX onClick={() => dispatch(toggleModal(false))}>Close</BiX>
          </span>
        </div>
        <div className='modal-content'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
