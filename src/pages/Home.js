import Boards from '../components/Boards';
import Header from '../components/Header';
import AddCardModal from '../components/AddCardModal';

import { useSelector } from 'react-redux';

const Home = () => {
  const showModal = useSelector((state) => state.modal.show);

  return (
    <div className='home-content'>
      <Header />
      <Boards />
      {showModal && <AddCardModal />}
    </div>
  );
};

export default Home;
