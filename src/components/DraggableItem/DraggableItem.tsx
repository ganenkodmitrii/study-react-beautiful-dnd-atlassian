import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import cn from 'classnames';
import { ContactsType } from '../../types/contact';

import './DraggableItem.scss';

interface Props {
  item: ContactsType;
  index: number;
}
export const DraggableItem: React.FC<Props> = ({ item, index }) => (
  <Draggable draggableId={item.id} index={index}>
    {(provided, snapshot) => (
      <div
        className={cn('draggable', { 'is-active': snapshot.isDragging })}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <h2>{item.name}</h2>
        <p>{item.phone}</p>
        <p>{item.email}</p>
      </div>
    )}
  </Draggable>
);
