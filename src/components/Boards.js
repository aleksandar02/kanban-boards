import Board from './Board';

const Boards = () => {
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

  return (
    <div className='boards-container'>
      {boards.map((board) => {
        if (board.id == 1) {
          return <Board key={board.id} board={board} />;
        } else if (board.id == 2) {
          return <Board key={board.id} board={board} />;
        } else if (board.id == 3) {
          return <Board key={board.id} board={board} />;
        }
      })}
    </div>
  );
};

export default Boards;
