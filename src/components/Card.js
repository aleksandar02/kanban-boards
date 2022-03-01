import { useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const Card = ({ card, populateModalData, deleteCard }) => {
  const navigate = useNavigate();

  let cardBorder = '';

  if (card.status == '2') {
    cardBorder = '3.5px solid #ffc107';
  } else if (card.status == '3') {
    cardBorder = '3.5px solid #00b74a';
  }

  const options = ['View', 'Edit', 'Delete'];

  const handleDropdownAction = (action) => {
    switch (action) {
      case 'View':
        navigate(`/card-details/${card.id}`);
        break;
      case 'Edit':
        populateModalData(card);
        break;
      case 'Delete':
        deleteCard(card);
        break;

      default:
        break;
    }
  };

  return (
    <div className='card' style={{ borderLeft: cardBorder }}>
      <div className='card-header'>
        <h5>{card.title}</h5>
        <DropdownMenu options={options} handleClick={handleDropdownAction} />
      </div>
      <div className='labels'>
        {card.labels.map((label, index) => (
          <span key={index}>{label}</span>
        ))}
      </div>
      <p className='time-created'>{card.timeCreated}</p>
    </div>
  );
};

export default Card;
