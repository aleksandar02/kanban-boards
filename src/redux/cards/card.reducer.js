import { createSelector } from 'reselect';
import { v4 as uuid } from 'uuid';
import { CardActionTypes } from './card.types';

const initialState = {
  cards: [
    {
      id: uuid(),
      title: 'Fix the Bug',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      cardStatus: 3,
      timeCreated: '02-27-2022',
      labels: ['HTML', 'CSS'],
    },
    {
      id: uuid(),
      title: 'Create new feature',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      cardStatus: 2,
      timeCreated: '02-27-2020',
      labels: ['Javascript'],
    },
    {
      id: uuid(),
      title: 'Refactor code',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      cardStatus: 2,
      timeCreated: '02-27-2022',
      labels: ['Javascript'],
    },
    {
      id: uuid(),
      title: 'Change header background.',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      cardStatus: 3,
      timeCreated: '02-27-2022',
      labels: ['HTML', 'CSS'],
    },
  ],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CardActionTypes.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case CardActionTypes.EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id == action.payload.id ? { ...card, ...action.payload } : card
        ),
      };
    case CardActionTypes.REMOVE_CARD:
      return {
        ...state,
        cards: [...state.cards.filter((c) => c.id !== action.payload)],
      };
    default:
      return state;
  }
};

// Input selector - it shuld usually just extract and return values
const selectCards = (state) => state.cards;

// Output selector - it should do the transformation work
export const selectCardsByStatus = createSelector(
  [selectCards, (state, cardStatus) => cardStatus],
  (cards, cardStatus) => cards.filter((card) => card.cardStatus == cardStatus)
);

export const selectCardById = createSelector(
  [selectCards, (state, id) => id],
  (cards, id) => cards.find((c) => c.id == id)
);

export default cardReducer;
