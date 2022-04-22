import { v4 as uuid } from 'uuid';
import { CardActionTypes } from './card.types';
import { toggleModal } from '../modal/modal.actions';

export const addCard =
  ({ title, description, cardStatus }) =>
  (dispatch) => {
    try {
      const card = {
        id: uuid(),
        title,
        description,
        cardStatus,
        timeCreated: new Date()
          .toLocaleDateString('en-GB')
          .split('/')
          .join('-'),
        labels: ['HTML', 'CSS', 'Javascript'],
      };

      dispatch({
        type: CardActionTypes.ADD_CARD,
        payload: card,
      });

      dispatch(toggleModal(false));
    } catch (err) {
      console.log('Add card failed!');
    }
  };

export const editCard =
  ({ id, title, description, cardStatus }) =>
  (dispatch) => {
    const editedCard = {
      id,
      title,
      description,
      cardStatus,
      timeCreated: new Date().toLocaleDateString('en-GB').split('/').join('-'),
    };

    dispatch({ type: CardActionTypes.EDIT_CARD, payload: editedCard });
  };

export const removeCard = (id) => (dispatch) =>
  dispatch({
    type: CardActionTypes.REMOVE_CARD,
    payload: id,
  });
