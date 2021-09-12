import React from 'react';
import Board from "react-trello";

export default function BoardView({ statuses, tasks, onTaskSave }) {
    let lanes = statuses.map(status => {

        const titleStyle = {
            textAlign: 'center',
            padding: '5 0 5 20',
            fontWeight: 'bold',
            fontSize: '15px',
            lineHeight: '18px',
            cursor: '-webkit-grab -moz-grab grab',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        };

        if (status.color) {
            titleStyle.backgroundColor = status.color;
            titleStyle.color = "white";
            titleStyle.border = `2px solid ${status.color}`;
        }
        return {
            id: status.id.toString(),
            title: status.text,
            style: { background: 'purple', maxWidth: "100%", flex: "0 0 auto" },
            titleStyle,
            cards: [],
            status,
        };
    });


    lanes.forEach(lane => {
        let laneTasks = tasks.filter(t => (lane?.status?.text === t.status));

        laneTasks.slice(0, 100).forEach(task => {
            lane.cards.push({
                id: task.id.toString(),
                color: lane?.status?.color,
                laneId: lane?.id,
                title: 'test',
                task
            });
        });
    });

    return (
        <div>
            <Board
                data={{ lanes }}
                draggable
                editable
                canAddLanes
                addCardTitle="Add Item"

            >
            </ Board>
        </div>
    )
}
