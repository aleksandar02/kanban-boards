import { useState, useEffect } from 'react';
import Boards from '../components/Boards';
import Header from '../components/Header';
import AddCardModal from '../components/AddCardModal';
import { v4 as uuid } from 'uuid';

const initialModalData = {
  title: '',
  status: '',
  description: '',
};

const cardsData = [
  {
    id: uuid(),
    title: 'Fix the Bug',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    status: 3,
    timeCreated: '02-27-2022',
    labels: ['HTML', 'CSS'],
  },
  {
    id: uuid(),
    title: 'Create new feature',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    status: 2,
    timeCreated: '02-27-2020',
    labels: ['Javascript'],
  },
  {
    id: uuid(),
    title: 'Refactor code',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    status: 1,
    timeCreated: '02-27-2022',
    labels: ['Javascript'],
  },
  {
    id: uuid(),
    title: 'Change header background.',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    status: 3,
    timeCreated: '02-27-2022',
    labels: ['HTML', 'CSS'],
  },
  {
    id: uuid(),
    title: 'Remove description in card.',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    status: 1,
    timeCreated: '02-27-2022',
    labels: ['HTML', 'CSS'],
  },
  {
    id: uuid(),
    title: 'Add new functionality.',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    status: 1,
    timeCreated: '02-27-2022',
    labels: ['Javascript', 'React'],
  },
  {
    id: uuid(),
    title: 'Add popup to ask users for app store review.',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    status: 2,
    timeCreated: '02-27-2022',
    labels: ['HTML', 'CSS', 'Javascript'],
  },
  {
    id: uuid(),
    title: 'Develop new Api checkout experience.',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    status: 1,
    timeCreated: '02-27-2020',
    labels: ['Javascript', 'React'],
  },
  {
    id: uuid(),
    title: 'Add new logos to shopping screens',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
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
    document.body.style.overflow = 'hidden';

    setState((currentState) => ({
      ...currentState,
      modal: {
        ...currentState.modal,
        show: true,
      },
    }));
  };

  const closeModal = () => {
    document.body.style.overflow = 'visible';

    setState((currentState) => ({
      ...currentState,
      modal: {
        data: initialModalData,
        show: false,
        editForm: false,
      },
    }));
  };

  const addCard = ({ title, description, status }) => {
    const card = {
      id: uuid(),
      title,
      description,
      status,
      timeCreated: new Date().toLocaleDateString('en-GB').split('/').join('-'),
      labels: ['HTML', 'CSS', 'Javascript'],
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
          show={modal.show}
        />
      )}
    </div>
  );
};

export default Home;
