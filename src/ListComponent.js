import React from 'react';

function ListComponent({ items, renderItem }) {
  if (!items.length) {
    return <p>No items found.</p>;
  }

  return (
    <ul>
      {items.map((item) => renderItem(item))}
    </ul>
  );
}

export default ListComponent;