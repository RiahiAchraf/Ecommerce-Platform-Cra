/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './directory.styles.scss';

import Sections from './directory.data';
import MenuItem from '../menu-items/menu-items.component';

export default function Directory() {
  const [state, setState] = useState(Sections);

  return (
    <div className="directory-menu">
      {state.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}
