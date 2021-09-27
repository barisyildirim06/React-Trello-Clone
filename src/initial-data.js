const statusesData = [
    {
        color: 'GREY',
        id: "1",
        text: 'Not Inspected'
    },
    {
        color: '#e7ca35',
        id: "2",
        text: 'In Progress'
    },
    {
        color: 'GREEN',
        id: "3",
        text: 'Pass'
    },
]

const tasksData = [
    {
        id: "1",
        status: 'Not Inspected',
        statusID: '1',
        title: 'Tanzania',
        comments: 'country in East Africa',
        tags: [ { value: '#9e0e15', label: 'Trivial' }, { value: '#b5c497', label: 'Test' }, { value: '#ffd100', label: 'Console' }]
    },
    {
        id: "2",
        status: 'Not Inspected',
        statusID: '1',
        title: 'Slovenia',
        comments: 'Slovenia is a country in Southern Europe',
        tags: [{ value: '#c497b8', label: 'Major' }, { value: '#c4b797', label: 'Beta' } ,{ value: '#46d0ff', label: 'App' }]
    },
    {
        id: "3",
        status: 'Not Inspected',
        statusID: '1',
        title: 'Laos',
        comments: 'Cool',
        tags: [{ value: '#6d62e2', label: 'Minor' }, { value: '#ffd100', label: 'Console' },{ value: '#b5c497', label: 'Test' }]
    },
    {
        id: "4",
        statusID: '2',
        status: 'In Progress',
        title: 'Singapore',
        comments: 'The English name of "Singapore"',
        tags: [{ value: '#9e0e15', label: 'Trivial' }]
    },
    {
        id: "5",
        statusID: '2',
        status: 'In Progress',
        title: 'Ecuador',
        comments: `he country's name means "Equator" in Spanish`,
        tags: [{ value: '#ffd100', label: 'Console' }]
    },
    {
        id: "6",
        statusID: '2',
        status: 'In Progress',
        title: 'Argentina',
        comments: 'Argentina covers an area of 2,780,400 km2',
        tags: [{ value: '#ffd100', label: 'Console' }, { value: '#9e0e15', label: 'Trivial' }]
    },
    {
        id: "7",
        statusID: '3',
        status: 'Pass',
        title: 'Hungary',
        comments: 'Hungary is a landlocked country.',
        tags: [{ value: '#01e164', label: 'Test' }, { value: '#6d62e2', label: 'Minor' }]
    },
    {
        id: "8",
        statusID: '3',
        status: 'Pass',
        title: 'Costa Rica',
        comments: 'Costa Rica borders the Caribbean Sea',
        tags: [{ value: '#46d0ff', label: 'App' }]
    },
    {
        id: "9",
        statusID: '3',
        status: 'Pass',
        title: 'Australia',
        comments: 'Australia, officially the Commonwealth ',
        tags: [{ value: '#0086ff', label: 'Marketing' }]
    },
]

const tagValues = [
    { value: '#9e0e15', label: 'Trivial' }, 
    { value: '#c497b8', label: 'Major' }, 
    { value: '#6d62e2', label: 'Minor' }, 
    { value: '#97c499', label: 'Prod' }, 
    { value: '#b5c497', label: 'Test' }, 
    { value: '#c4b797', label: 'Beta' }, 
    { value: '#c4a697', label: 'Dev' }, 
    { value: '#46d0ff', label: 'App' }, 
    { value: '#ffd100', label: 'Console' }, 
    { value: '#0086ff', label: 'Todos' }, 
    { value: '#97c4b9', label: 'Project' }, 
]

export 
{ statusesData, tasksData, tagValues };
