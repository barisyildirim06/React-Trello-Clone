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
    {
        color: '#e7ca35',
        id: "3",
        text: 'In Progress'
    },
]

const tasksData = [
    {
        id: "1",
        status: 'Not Inspected',
        title: 'Tanzania',
        tags: [{ value: '#0086ff', label: 'Marketing' }]
    },
    {
        id: "2",
        status: 'Not Inspected',
        title: 'Slovenia',
        tags: [{ value: '#01e164', label: 'Test' }, { value: '#46d0ff', label: 'Feedback' }]
    },
    {
        id: "3",
        status: 'Not Inspected',
        title: 'Laos',
        tags: [{ value: '#fd2061', label: 'Bug' }, { value: '#46d0ff', label: 'Feedback' }]
    },
    {
        id: "4",
        status: 'In Progress',
        title: 'Singapore',
        tags: [{ value: '#fd2061', label: 'Bug' }]
    },
    {
        id: "5",
        status: 'In Progress',
        title: 'Ecuador',
        tags: [{ value: '#ffd100', label: 'Idea' }]
    },
    {
        id: "6",
        status: 'In Progress',
        title: 'Argentina',
        tags: [{ value: '#ffd100', label: 'Idea' }, { value: '#fd2061', label: 'Bug' }]
    },
    {
        id: "7",
        status: 'Pass',
        title: 'Hungary',
        tags: [{ value: '#01e164', label: 'Test' }, { value: '#6d62e2', label: 'Design' }]
    },
    {
        id: "8",
        status: 'Pass',
        title: 'Costa Rica',
        tags: [{ value: '#46d0ff', label: 'Feedback' }]
    },
    {
        id: "9",
        status: 'Pass',
        title: 'Australia',
        tags: [{ value: '#0086ff', label: 'Marketing' }]
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
