import Modal from './Modal';
import AddCardForm from './AddCardForm';

const AddCardModal = ({
  closeModal,
  addCard,
  formData,
  editForm,
  editCard,
}) => {
  return (
    <Modal
      title='Add New Card'
      subtitle='Fill in the required fields to create new card.'
      closeModal={closeModal}
      addCard={addCard}
    >
      <AddCardForm
        addCard={addCard}
        formData={formData}
        editForm={editForm}
        editCard={editCard}
      />
    </Modal>
  );
};

export default AddCardModal;
