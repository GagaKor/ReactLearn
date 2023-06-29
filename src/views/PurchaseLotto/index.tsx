import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/config';
import api from '../../utils/api';

const PurchaseLotto = () => {
  const lottos = useAppSelector((state) => state.lottos.lotto);
  console.log(lottos);

  const purchaseLotto = async () => {
    const res = await api.post('/lotto/purchase-lotto', {
      lottos,
    });
  };

  return (
    <div>
      <div className="purchase-container">
        <div onClick={purchaseLotto}>gogo</div>
      </div>

      <Link to={'/'} className="text-decoration-none">
        <div className="submit-container">Home</div>
      </Link>
    </div>
  );
};

export default PurchaseLotto;
