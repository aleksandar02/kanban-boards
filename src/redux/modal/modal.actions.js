import { ModalActionTypes } from './modal.types';

export const toggleModal = (show) => (dispatch) => {
  dispatch({
    type: ModalActionTypes.TOGGLE_MODAL,
    payload: show,
  });

  if (!show) {
    dispatch({
      type: ModalActionTypes.CLEAR_MODAL_DATA,
    });
  }
};

export const populateModalData = (card) => (dispatch) => {
  dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: true });
  dispatch({ type: ModalActionTypes.POPULATE_MODAL_DATA, payload: card });
};

export const populateCardStatus = (cardStatus) => (dispatch) => {
  const card = {
    title: '',
    description: '',
    cardStatus: cardStatus,
  };

  dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: true });
  dispatch({
    type: ModalActionTypes.POPULATE_CARD_STATUS,
    payload: card,
  });
};
