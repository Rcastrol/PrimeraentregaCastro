import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const cartwidget = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} />
        <spam>5</spam>
    </div>
  )
}

export default cartwidget