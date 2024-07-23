// src/components/AddToQueueButton.tsx
import React from 'react';

interface AnimeAttributes {
    canonicalTitle: string;
    posterImage: {
      small: string;
    };
  }
  
  interface AnimeData {
    id: string;
    attributes: AnimeAttributes;
  }
  
  interface ApiResponse {
    data: AnimeData[];
    meta: {
      count: number;
    };
  }


interface AddToQueueButtonProps {
  anime: AnimeData;
  onAddToQueue: (anime: AnimeData) => void;
}

const AddToQueueButton: React.FC<AddToQueueButtonProps> = ({ anime, onAddToQueue }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-warning m-3"
      onClick={() => onAddToQueue(anime)}
    >
      ADICIONAR A FILA
    </button>
  );
};

export default AddToQueueButton;
