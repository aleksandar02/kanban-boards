import { ModalActionTypes } from './modal.types';
import { createSelector } from 'reselect';

const initialState = {
  show: false,
  populateModal: false,
  modalData: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ModalActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        show: action.payload,
      };
    case ModalActionTypes.POPULATE_MODAL_DATA:
      return {
        ...state,
        modalData: { ...action.payload },
        populateModal: true,
      };
    case ModalActionTypes.CLEAR_MODAL_DATA:
      return {
        ...state,
        modalData: null,
        populateModal: false,
      };
    case ModalActionTypes.POPULATE_CARD_STATUS:
      return {
        ...state,
        modalData: action.payload,
        populateModal: false,
      };
    default:
      return state;
  }
};

const selectModal = (state) => state.modal;

export const showModal = createSelector([selectModal], (modal) => modal.show);

export default modalReducer;
