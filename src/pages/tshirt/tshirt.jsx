import { useParams } from 'react-router-dom';

import './tshirt.scss';

function Tshirt() {

  const { id } = useParams();

  return (
    <div className="tshirt">Tshirt is {id}</div>
  );
}

export default Tshirt;