import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

import { removeCard } from '../redux/cards/card.actions';

import { populateModalData } from '../redux/modal/modal.actions';

const Card = ({ card }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let cardBorder = '';

  if (card.cardStatus == '2') {
    cardBorder = '3.5px solid #ffc107';
  } else if (card.cardStatus == '3') {
    cardBorder = '3.5px solid #00b74a';
  }

  const options = ['View', 'Edit', 'Delete'];

  const handleDropdownAction = (action) => {
    switch (action) {
      case 'View':
        navigate(`/kanban-boards/card-details/${card.id}`);
        break;
      case 'Edit':
        dispatch(populateModalData(card));
        break;
      case 'Delete':
        dispatch(removeCard(card.id));
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
