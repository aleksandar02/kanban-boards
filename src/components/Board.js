import Cards from './Cards';
import { BiPlus } from 'react-icons/bi';

const Board = ({ board, cards, openModal, populateModalData, deleteCard }) => {
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
        <Cards
          cards={filteredCards}
          populateModalData={populateModalData}
          deleteCard={deleteCard}
        />

        <span className='add-card-button-circle' onClick={openModal}>
          <BiPlus />
        </span>
      </div>
    </div>
  );
};

export default Board;
