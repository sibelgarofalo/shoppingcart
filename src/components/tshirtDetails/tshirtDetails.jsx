import { useNavigate } from 'react-router-dom';

import './tshirtDetails.scss';

function TshirtDetails(props) {

  const navigate = useNavigate();

  const onTshirtClick = () => {
    navigate(`/tshirt/${props.tshirt.id}`);
  }

  return (
    <div className="tshirtDetails" onClick={onTshirtClick}>
      <img src={props.tshirt.image} alt={props.tshirt.name} loading="lazy" />
      <h6>{props.tshirt.name}</h6>
      <h5>{props.tshirt.price} $</h5>
    </div>
  );
}

export default TshirtDetails;