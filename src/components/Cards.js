import Card from './Card';
import { v4 as uuid } from 'uuid';

const Cards = ({ cards, populateModalData, deleteCard }) => {
  return (
    <div className='cards'>
      {cards.map((card, index) => (
        <Card
          key={uuid()}
          card={card}
          populateModalData={populateModalData}
          deleteCard={deleteCard}
        />
      ))}
    </div>
  );
};

export default Cards;
