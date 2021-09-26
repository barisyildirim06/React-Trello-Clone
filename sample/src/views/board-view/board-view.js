import React, { useCallback } from 'react';

/* Components */
import Board from "react-trello";
import TaskCard from 'components/task-card';
import Button from 'components/button/button';

export default function BoardView({ statuses, tasks, onTaskSave, onTaskCardClick, onAddTaskClick, onAddStatusClick, onLaneScroll, onLaneDelete, onTitleChange }) {
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
            titleStyle.color = "black";
            titleStyle.border = `2px solid ${status.color}`;
        }
        return {
            id: status.id.toString(),
            title: status.text,
            style: { maxWidth: "90vh", flex: "0 0 auto", maxHeight: '90vh', overflow: 'hidden' },
            titleStyle,
            cards: [],
            status,
        };
    });


    lanes.forEach(lane => {
        let laneTasks = tasks.filter(t => (lane?.id === t.statusID));

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
    
    const cardAddButton = ({ laneId }) => {
        const handleAddTaskCardClick = () => {
            if (onAddTaskClick) {
                onAddTaskClick({
                    target: {
                        laneId
                    }
                })
            }
        }
        return <Button type='save' onClick={handleAddTaskCardClick}>Add New Card</Button>
    }

    const laneAddButton = () => {
        const handleAddStatusClick = () => {
            if (onAddStatusClick) {
                onAddStatusClick()
            }
        }
        return <Button type='save' onClick={handleAddStatusClick}>Add New Lane</Button>
    }

    const handleCardMoveAcrossLanes = useCallback((fromLaneId, toLaneId, cardId, index) => {
        let task = tasks.find(el => el.id ===cardId)

        task = {
            ...task,
            statusID: toLaneId
        }
        if (onTaskSave) {
            onTaskSave({
                target: {
                    value: task,
                    fromLaneId,
                    toLaneId,
                    index
                }
            })
        }
    }, [onTaskSave, tasks]);

    const handleLaneScroll = useCallback((removedIndex, addedIndex) => {
        if (onLaneScroll) {
            onLaneScroll({
                target: {
                    removedIndex,
                    addedIndex
                }
            })
        }
    }, [onLaneScroll]);

    const handleLaneChange = useCallback((laneId, data) => {
        const { title } = data;
        if (onTitleChange) {
            onTitleChange({
                target:{
                    title,
                    laneId
                }
            })
        }
    }, [onTitleChange]);

    const handleLaneDelete = useCallback(laneId => {
        if (onLaneDelete) {
            onLaneDelete({
                target: {
                    value: laneId
                }
            })
        }
    }, [onLaneDelete]);

    const components = {
        Card: RenderCard,
        AddCardLink: cardAddButton,
        NewLaneSection: laneAddButton,
    }

    return (
        <div>
            <Board
                style={{backgroundColor: 'transparent', height: '80%'}} 
                data={{ lanes }}
                draggable
                editable
                onCardMoveAcrossLanes={handleCardMoveAcrossLanes}
                canAddLanes
                onLaneDelete={handleLaneDelete}
                handleLaneDragEnd={handleLaneScroll}
                editLaneTitle={true}
                addCardTitle="Add Item"
                components={components}
                onLaneUpdate={handleLaneChange}
            >
            </ Board>
        </div>
    )
}
