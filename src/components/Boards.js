import Board from './Board';

const Boards = ({ cards, openModal, populateModalData, deleteCard }) => {
  const boards = [
    {
      id: 1,
      name: 'To Do',
    },
    {
      id: 2,
      name: 'In Progress',
    },
    {
      id: 3,
      name: 'Done',
    },
  ];

  const getToDoCards = cards.filter((card) => card.status == 1);
  const getInProgressCards = cards.filter((card) => card.status == 2);
  const getDoneCards = cards.filter((card) => card.status == 3);

  return (
    <div className='boards-container'>
      {boards.map((board) => {
        if (board.id == 1) {
          return (
            <Board
              key={board.id}
              openModal={openModal}
              board={board}
              cards={getToDoCards}
              populateModalData={populateModalData}
              deleteCard={deleteCard}
            />
          );
        } else if (board.id == 2) {
          return (
            <Board
              key={board.id}
              openModal={openModal}
              board={board}
              cards={getInProgressCards}
              populateModalData={populateModalData}
              deleteCard={deleteCard}
            />
          );
        } else if (board.id == 3) {
          return (
            <Board
              key={board.id}
              openModal={openModal}
              board={board}
              cards={getDoneCards}
              populateModalData={populateModalData}
              deleteCard={deleteCard}
            />
          );
        }
      })}
    </div>
  );
};

export default Boards;
