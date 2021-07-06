/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

export default function ShopPage() {
  const [state, setState] = useState(SHOP_DATA);

  return (
    <div>
      {state.map(({ id, ...otherShopProps }) => (
        <CollectionPreview key={id} {...otherShopProps} />
      ))}
    </div>
  );
}
