import { combineReducers } from 'redux';
import cardReducer from './cards/card.reducer';
import modalReducer from './modal/modal.reducer';

export default combineReducers({
  cards: cardReducer,
  modal: modalReducer,
});
