import { useNavigate } from 'react-router-dom';

import './tshirtDetails.scss';

function TshirtDetails(props) {

  const navigate = useNavigate();

  const onTshirtClick = () => {
    navigate(`/tshirt/${props.tshirt.id}`);
  }

  return (
    <div className="tshirtDetails" onClick={onTshirtClick}>
      <h6>{props.tshirt.name}</h6>
      <img src={props.tshirt.image} alt={props.tshirt.name} />
    </div>
  );
}

export default TshirtDetails;