import Modal from './Modal';
import AddCardForm from './AddCardForm';

import { useSelector } from 'react-redux';

const AddCardModal = () => {
  const populateModal = useSelector((state) => state.modal.populateModal);

  const title = populateModal ? 'Edit Card' : 'Add New Card';

  return (
    <Modal
      title={title}
      subtitle='Fill in the required fields to create new card.'
    >
      <AddCardForm />
    </Modal>
  );
};

export default AddCardModal;
