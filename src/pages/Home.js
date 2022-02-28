import { useState, useEffect } from 'react';
import Boards from '../components/Boards';
import Header from '../components/Header';
import AddCardModal from '../components/AddCardModal';

const initialModalData = {
  title: '',
  status: '',
  description: '',
};

const cardsData = [
  {
    id: 1,
    title: 'Fix the Bug',
    description: 'This is the description.',
    status: 3,
    timeCreated: '02-27-2022',
    labels: ['HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Create new feature',
    description: 'This is the description.',
    status: 2,
    timeCreated: '02-27-2020',
    labels: ['Javascript'],
  },
  {
    id: 3,
    title: 'Refactor code',
    description: 'This is the description.',
    status: 1,
    timeCreated: '02-27-2022',
    labels: ['Javascript'],
  },
  {
    id: 4,
    title: 'Change header background.',
    description: 'This is the description.',
    status: 3,
    timeCreated: '02-27-2022',
    labels: ['HTML', 'CSS'],
  },
  {
    id: 5,
    title: 'Remove description in card.',
    description: 'This is the description.',
    status: 1,
    timeCreated: '02-27-2022',
    labels: ['HTML', 'CSS'],
  },
  {
    id: 6,
    title: 'Add new functionality.',
    description: 'This is the description.',
    status: 1,
    timeCreated: '02-27-2022',
    labels: ['Javascript', 'React'],
  },
  {
    id: 7,
    title: 'Add popup to ask users for app store review.',
    description: 'This is the description.',
    status: 2,
    timeCreated: '02-27-2022',
    labels: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: 8,
    title: 'Develop new Api checkout experience.',
    description: 'This is the description.',
    status: 1,
    timeCreated: '02-27-2020',
    labels: ['Javascript', 'React'],
  },
  {
    id: 9,
    title: 'Add new logos to shopping screens',
    description: 'This is the description.',
    status: 1,
    timeCreated: '02-27-2021',
    labels: ['HTML', 'CSS'],
  },
];

const Home = () => {
  const [{ cards, modal }, setState] = useState({
    cards: localStorage.getItem('cards')
      ? JSON.parse(localStorage.getItem('cards'))
      : [],
    modal: {
      show: false,
      data: initialModalData,
      editForm: false,
    },
  });

  useEffect(() => {
    console.log('Use effect called!');

    const getData = () => {
      if (localStorage.getItem('cards') === null) {
        console.log('Setting up local storage!');

        // Api call
        const apiResult = cardsData;

        localStorage.setItem('cards', JSON.stringify(apiResult));
        setState((currentState) => ({
          ...currentState,
          cards: [...apiResult],
        }));

        return;
      }
    };

    getData();
  }, []);

  const openModal = () => {
    setState((currentState) => ({
      ...currentState,
      modal: {
        ...currentState.modal,
        show: true,
      },
    }));
  };

  const closeModal = () => {
    setState((currentState) => ({
      ...currentState,
      modal: {
        ...currentState.modal,
        show: false,
      },
    }));
  };

  const addCard = ({ title, description, status }) => {
    const card = {
      id: cards.length + 1,
      title,
      description,
      status,
      timeCreated: new Date().toLocaleDateString('en-GB').split('/').join('-'),
      labels: ['Javascript'],
    };

    localStorage.setItem('cards', JSON.stringify([...cards, card]));

    setState((currentState) => ({
      ...currentState,
      cards: [...currentState.cards, card],
      modal: {
        ...currentState.modal,
        show: false,
      },
    }));
  };

  const populateModalData = (card) => {
    setState((currentState) => ({
      ...currentState,
      modal: {
        show: true,
        data: { ...card },
        editForm: true,
      },
    }));
  };

  const deleteCard = ({ id }) => {
    const filteredCards = cards.filter((c) => c.id !== id);

    localStorage.setItem('cards', JSON.stringify(filteredCards));

    setState((currentState) => ({
      ...currentState,
      cards: [...filteredCards],
    }));
  };

  const editCard = ({ id, title, description, status }) => {
    const editedCard = {
      title,
      description,
      status,
      timeCreated: new Date().toLocaleDateString('en-GB').split('/').join('-'),
    };

    const editedCards = cards.map((card) =>
      card.id == id ? { ...card, ...editedCard } : card
    );

    localStorage.setItem('cards', JSON.stringify(editedCards));

    setState((currentState) => ({
      ...currentState,
      cards: [...editedCards],
      modal: {
        show: false,
        data: initialModalData,
        editForm: false,
      },
    }));
  };

  return (
    <div className='home-content'>
      <Header handleOnClick={openModal} />
      <Boards
        cards={cards}
        openModal={openModal}
        populateModalData={populateModalData}
        deleteCard={deleteCard}
      />
      {modal.show && (
        <AddCardModal
          addCard={addCard}
          closeModal={closeModal}
          formData={modal.data}
          editForm={modal.editForm}
          editCard={editCard}
        />
      )}
    </div>
  );
};

export default Home;
