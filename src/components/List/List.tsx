import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ObjectList, ObjectContacts } from '../../types/contact';
import { lists } from '../../utils';
import { DroppableItems } from '../DroppableItems/DroppableItems';

import './List.scss';
export const List: React.FC = () => {
  const [columns, setColumns] = React.useState<ObjectContacts<ObjectList>>(lists);

  const onDragEnd = (
    result: DropResult,
    columns: ObjectContacts<ObjectList>,
    setColumns: React.Dispatch<React.SetStateAction<ObjectContacts<ObjectList>>>,
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column?.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <div className="list-box">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([columnID, column]) => (
          <DroppableItems key={columnID} column={column} id={columnID} />
        ))}
      </DragDropContext>
    </div>
  );
};
