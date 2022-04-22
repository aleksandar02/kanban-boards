import { v4 as uuid } from 'uuid';
import { BiPlus } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import Cards from './Cards';
import Card from './Card';

import { useDispatch } from 'react-redux';
import { selectCardsByStatus } from '../redux/cards/card.reducer';

import { populateCardStatus } from '../redux/modal/modal.actions';

const Board = ({ board }) => {
  const dispatch = useDispatch();

  // Get cards by status for each board by status
  const cards = useSelector((state) =>
    selectCardsByStatus(state.cards, board.id)
  );

  const filteredCards = cards.sort(function (a, b) {
    return new Date(b.timeCreated) - new Date(a.timeCreated);
  });

  return (
    <div className='board'>
      <div className='board-header'>
        <h4>{board.name}</h4>
        <span>{filteredCards.length}</span>
      </div>

      <div className='board-content'>
        <Cards>
          {cards.length > 0 ? (
            cards.map((card, index) => <Card key={uuid()} card={card} />)
          ) : (
            <p>There are no cards at the moment!</p>
          )}
        </Cards>

        <span
          className='add-card-button-circle'
          onClick={() => dispatch(populateCardStatus(board.id))}
        >
          <BiPlus />
        </span>
      </div>
    </div>
  );
};

export default Board;
