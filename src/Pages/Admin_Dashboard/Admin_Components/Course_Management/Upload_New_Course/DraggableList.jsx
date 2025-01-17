import React, { useState, useRef } from "react";

function DragAndDropList() {
    const [list, setList] = useState(["1", "2", "3", "4"]);
    const draggingItemRef = useRef(null);

    const handleDragStart = (e, index) => {
        draggingItemRef.current = index;
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Allow dropping
    };

    const handleDrop = (e, targetIndex) => {
        if (draggingItemRef.current !== null) {
            const newList = [...list];
            const [removed] = newList.splice(draggingItemRef.current, 1);
            newList.splice(targetIndex, 0, removed);
            setList(newList);
            draggingItemRef.current = null;
        }
    };
    console.log("Printing Draggable List ", list);
    return (
        <ul>
            {list.map((item, index) => (
                <li
                    key={item}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default DragAndDropList;
