import Button from './Button';
import Modal from './Modal';

const ConfirmModal = ({ title, text, closeModal, deleteCard }) => {
  return (
    <Modal title={title} closeModal={closeModal}>
      <div className='confirm-modal'>
        <p>{text}</p>
      </div>
      <div className='pull-right full-width'>
        <Button
          handleOnClick={deleteCard}
          buttonText='Delete Card'
          cssStyle='button btn-delete'
        />
      </div>
    </Modal>
  );
};

export default ConfirmModal;
