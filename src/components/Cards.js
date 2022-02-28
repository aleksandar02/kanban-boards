import Card from './Card';

const Cards = ({ cards, populateModalData, deleteCard }) => {
  return (
    <div className='cards'>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          populateModalData={populateModalData}
          deleteCard={deleteCard}
        />
      ))}
    </div>
  );
};

export default Cards;
