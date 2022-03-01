import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';
import Button from '../components/Button';
import AddCardModal from '../components/AddCardModal';
import ConfirmModal from '../components/ConfirmModal';

const CardDetailsPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [{ card, showModal }, setState] = useState({
    card: {},
    showModal: false,
  });

  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    const getCardData = () => {
      const data = JSON.parse(localStorage.getItem('cards')).find(
        (card) => card.id == params.id
      );

      if (!data) {
        navigate('/');
        return;
      }

      setState((currentState) => ({
        ...currentState,
        card: { ...data },
      }));
    };

    getCardData();
  }, []);

  const openModal = () => {
    setState((currentState) => ({
      ...currentState,
      showModal: true,
    }));
  };

  const closeModal = () => {
    setState((currentState) => ({
      ...currentState,
      showModal: false,
    }));
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

  const editCard = ({ id, title, description, status }) => {
    const editedCard = {
      ...card,
      title,
      description,
      status,
      timeCreated: new Date().toLocaleDateString('en-GB').split('/').join('-'),
    };

    const cards = JSON.parse(localStorage.getItem('cards'));

    const editedCards = cards.map((card) =>
      card.id == id ? { ...card, ...editedCard } : card
    );

    localStorage.setItem('cards', JSON.stringify(editedCards));

    setState(() => ({
      card: { ...editedCard },
      showModal: false,
    }));
  };

  const statusText = ['To Do', 'In Progress', 'Done'];

  let statusBgColor = 'bg-dark';

  if (card.status === 2) {
    statusBgColor = 'bg-yellow';
  } else if (card.status === 3) {
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
            <span className={statusBgColor}>{statusText[card.status - 1]}</span>
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
          editCard={editCard}
        />
      )}
      {deleteModal && (
        <ConfirmModal
          closeModal={closeDeleteModal}
          title='Delete Card'
          text='Are you sure you now what are you doing?'
          deleteCard={deleteCard}
        />
      )}
    </div>
  );
};

export default CardDetailsPage;
