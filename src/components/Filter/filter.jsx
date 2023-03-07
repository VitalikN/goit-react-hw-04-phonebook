import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <div>
    <label>
      <Input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);
Filter.prototype = {
  onValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
