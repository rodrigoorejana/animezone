import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Item {
    id: number;
    name: string;
}

interface ItemFormProps {
    onAddItem: (item: Item) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onAddItem }) => {
    const [newItem, setNewItem] = useState<string>('');
    const [nextId, setNextId] = useState<number>(1);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (newItem.trim()) {
            onAddItem({ id: nextId, name: newItem });
            setNewItem('');
            setNextId(nextId + 1);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="newItem" className="form-label">Adicionar Novo Item</label>
                <input
                    type="text"
                    id="newItem"
                    className="form-control"
                    value={newItem}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Adicionar</button>
        </form>
    );
};

export default ItemForm;
