import Button from './Button';

const Header = ({ handleOnClick }) => {
  return (
    <header>
      <div>
        <h1>Kanban Board</h1>
        <p>26 team members</p>
      </div>
      <Button
        buttonText='Add New Card'
        handleOnClick={handleOnClick}
        cssStyle='button add-card-button'
      />
    </header>
  );
};

export default Header;
