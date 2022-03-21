import Modal from './Modal';
import AddCardForm from './AddCardForm';

const AddCardModal = ({
  closeModal,
  addCard,
  formData,
  editForm,
  editCard,
  show,
}) => {
  const title = editForm ? 'Edit Card' : 'Add New Card';

  return (
    <Modal
      title={title}
      subtitle='Fill in the required fields to create new card.'
      closeModal={closeModal}
      show={show}
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
