import { BiX } from 'react-icons/bi';

const Modal = ({ closeModal, show, children, title, subtitle }) => {
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
            <BiX onClick={closeModal}>Close</BiX>
          </span>
        </div>
        <div className='modal-content'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
