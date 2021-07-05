/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './directory.styles.scss';

import Sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

export default function Directory() {
  const [state, setState] = useState(Sections);

  return (
    <div className="directory-menu">
      {state.map(({ title, id, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}
