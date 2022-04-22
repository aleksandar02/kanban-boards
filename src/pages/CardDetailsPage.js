import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCardById } from '../redux/cards/card.reducer';

import { BiArrowBack } from 'react-icons/bi';
import Button from '../components/Button';
import AddCardModal from '../components/AddCardModal';
import ConfirmModal from '../components/ConfirmModal';
import { useSelector } from 'react-redux';

const CardDetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  // If card is undefined navigate to '/kanban-boards/'
  const card = useSelector((state) => selectCardById(state.cards, params.id));
  const [deleteModal, setDeleteModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const deleteCard = () => {
    const cards = JSON.parse(localStorage.getItem('cards'));

    const filteredCards = cards.filter((c) => c.id !== card.id);

    localStorage.setItem('cards', JSON.stringify(filteredCards));

    navigate('/kanban-boards');
  };

  const statusText = ['To Do', 'In Progress', 'Done'];

  let statusBgColor = 'bg-dark';

  if (card.cardStatus === 2) {
    statusBgColor = 'bg-yellow';
  } else if (card.cardStatus === 3) {
    statusBgColor = 'bg-green';
  }

  return (
    <div className='container'>
      <p className='go-back' onClick={() => navigate('/kanban-boards')}>
        <BiArrowBack />
        Go Back
      </p>

      <div className='card-details-content'>
        <div className='main-details'>
          <div className='main-details-header'>
            <h1>{card.title}</h1>
            <p className='time-created'>Time created: {card.timeCreated}</p>
          </div>
          <span>Description: </span>
          <p className='desc'>{card.description}</p>
          <Button
            buttonText='Edit Details'
            handleOnClick={openModal}
            cssStyle='button btn-default'
          />
          <Button
            buttonText='Delete'
            handleOnClick={openDeleteModal}
            cssStyle='button btn-default outlined'
          />
        </div>
        <div className='side-details'>
          <div className='status'>
            <h2>Status:</h2>
            <span className={statusBgColor}>
              {statusText[card.cardStatus - 1]}
            </span>
          </div>
          <div className='labels column'>
            <h2>Labels:</h2>

            {card.labels &&
              card.labels.map((label, index) => (
                <span key={index}>{label}</span>
              ))}
          </div>
        </div>
      </div>
      {showModal && (
        <AddCardModal
          closeModal={closeModal}
          formData={card}
          editForm={true}
          show={showModal}
        />
      )}
      {deleteModal && (
        <ConfirmModal
          closeModal={closeDeleteModal}
          title='Delete Card'
          text='Are you sure you now what are you doing?'
          deleteCard={deleteCard}
          show={deleteModal}
        />
      )}
    </div>
  );
};

export default CardDetailsPage;
