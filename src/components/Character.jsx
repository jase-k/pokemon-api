import React from 'react';
import PropTypes from 'prop-types';

const Character = (props) => {
    return (
        <li>
            {props.name}
        </li>
    );
};

Character.propTypes = {};

export default Character;