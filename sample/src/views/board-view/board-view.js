import React, { useCallback } from 'react';
import Board from "react-trello";

import TaskCard from 'components/task-card';

import { Utils } from 'utils';

export default function BoardView({ statuses, tasks, onTaskSave, onTaskCardClick }) {
    const handleCardClick = useCallback(e => {
        const task = e.target.value;
        if (onTaskCardClick) {
            onTaskCardClick({ target: { value: task } });
        }
    }, [onTaskCardClick]);

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
                task,
                onTaskCardClick: handleCardClick
            });
        });
    });

    const RenderCard = (props) => {
        // Props of the Lane Card
        const { task, color, onTaskCardClick } = props;
        return <TaskCard task={task} color={color} onTaskCardClick={onTaskCardClick}/>
    };

    const handleCardMoveAcrossLanes = useCallback((fromLaneId, toLaneId, cardId, index) => {
        const lanesByID = Utils.toMap(lanes, "id");
        let task = tasks.find(el => el.id ===cardId)
        const lane = lanesByID.has(toLaneId) && lanesByID.get(toLaneId);

        task = {
            ...task,
            status: lane.status.text
        }
        if (onTaskSave) {
            onTaskSave({
                target: {
                    value: task
                }
            })
        }
    }, [lanes, onTaskSave, tasks]);

    const components = {
        Card: RenderCard
    }

    return (
        <div style={{ height: '100%' }}>
            <Board
                data={{ lanes }}
                draggable
                editable
                onCardMoveAcrossLanes={handleCardMoveAcrossLanes}
                canAddLanes
                addCardTitle="Add Item"
                components={components}
            >
            </ Board>
        </div>
    )
}
