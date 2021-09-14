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
        statusID: '1',
        title: 'Tanzania',
        comments: 'country in East Africa within the African Great Lakes region',
        tags: [{ value: '#0086ff', label: 'Marketing' }]
    },
    {
        id: "2",
        status: 'Not Inspected',
        statusID: '1',
        title: 'Slovenia',
        comments: 'Slovenia is a country in Southern Europe',
        tags: [{ value: '#01e164', label: 'Test' }, { value: '#46d0ff', label: 'Feedback' }]
    },
    {
        id: "3",
        status: 'Not Inspected',
        statusID: '1',
        title: 'Laos',
        comments: 'Cool',
        tags: [{ value: '#01e164', label: 'Test' }, { value: '#6d62e2', label: 'Design' },{ value: '#01e164', label: 'Test' }, { value: '#46d0ff', label: 'Feedback' }]
    },
    {
        id: "4",
        statusID: '2',
        status: 'In Progress',
        title: 'Singapore',
        comments: 'The English name of "Singapore" is an anglicisation of the native Malay name for the country, Singapura, which was in turn derived from the Sanskrit word',
        tags: [{ value: '#fd2061', label: 'Bug' }]
    },
    {
        id: "5",
        statusID: '2',
        status: 'In Progress',
        title: 'Ecuador',
        comments: `he country's name means "Equator" in Spanish, truncated from the Spanish official name, República del Ecuador`,
        tags: [{ value: '#ffd100', label: 'Idea' }]
    },
    {
        id: "6",
        statusID: '2',
        status: 'In Progress',
        title: 'Argentina',
        comments: 'Argentina covers an area of 2,780,400 km2 (1,073,500 sq mi), making it the largest Spanish-speaking nation in the world',
        tags: [{ value: '#ffd100', label: 'Idea' }, { value: '#fd2061', label: 'Bug' }]
    },
    {
        id: "7",
        statusID: '3',
        status: 'Pass',
        title: 'Hungary',
        comments: 'Hungary is a landlocked country. Hungary has a population of 10 million, mostly ethnic Hungarians and a significant Romani minority',
        tags: [{ value: '#01e164', label: 'Test' }, { value: '#6d62e2', label: 'Design' }]
    },
    {
        id: "8",
        statusID: '3',
        status: 'Pass',
        title: 'Costa Rica',
        comments: 'Costa Rica borders the Caribbean Sea to the east, and the Pacific Ocean to the west',
        tags: [{ value: '#46d0ff', label: 'Feedback' }]
    },
    {
        id: "9",
        statusID: '3',
        status: 'Pass',
        title: 'Australia',
        comments: 'Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent',
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
