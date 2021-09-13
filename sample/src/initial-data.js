const statusesData = [
    {
        color: 'GREY',
        id: "1",
        text: 'Not Inspected'
    },
    {
        color: 'GREEN',
        id: "2",
        text: 'Pass'
    },
]

const tasksData = [
    {
        id: "1",
        status: 'Not Inspected',
        title: 'new task 1',
        tags: [{ value: '#01e164', label: 'Test' }]
    },
    {
        id: "2",
        status: 'Not Inspected',
        title: 'new task 2',
        tags: [{ value: '#01e164', label: 'Test' }, { value: '#46d0ff', label: 'Feedback' }]
    },
    {
        id: "3",
        status: 'Not Inspected',
        title: 'new task 3',
        tags: [{ value: '#01e164', label: 'Test' }]
    },
    {
        id: "4",
        status: 'Pass',
        title: 'new task 4',
        tags: [{ value: '#ffd100', label: 'Idea' }]
    },
    {
        id: "5",
        status: 'Pass',
        title: 'new task 5',
        tags: [{ value: '#01e164', label: 'Test' }, { value: '#6d62e2', label: 'Design' }]
    },
    {
        id: "6",
        status: 'Pass',
        title: 'new task 6',
        tags: [{ value: '#01e164', label: 'Test' }]
    },
]

const tagValues = [
    { value: '#fd2061', label: 'Bug' }, 
    { value: '#6d62e2', label: 'Design' }, 
    { value: '#eeeeed', label: 'Dev' }, 
    { value: '#46d0ff', label: 'Feedback' }, 
    { value: '#ffd100', label: 'Idea' }, 
    { value: '#0086ff', label: 'Marketing' }, 
    { value: '#01e164', label: 'Test' }
]

export 
{ statusesData, tasksData, tagValues };
