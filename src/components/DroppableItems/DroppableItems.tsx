import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import cn from 'classnames';
import { ObjectList } from '../../types/contact';
import { DraggableItem } from '../DraggableItem/DraggableItem';

import './DroppableItems.scss';

interface Props {
  column: ObjectList;
  id: string;
}

export const DroppableItems: React.FC<Props> = ({ column, id }) => (
  <div className="droppable">
    <h1 className="droppable__title">{column?.name}</h1>
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={cn('droppable__box', { 'is-active': snapshot.isDraggingOver })}
        >
          {column?.items?.map((item, index) => {
            return <DraggableItem key={item.id} item={item} index={index} />;
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);
