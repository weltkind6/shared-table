interface IRepo {
    id: number;
    name: string;
    year?: number,
    [key: string]: any; // любое другое свойство может быть любого типа
}


export const partialData: IRepo[] = [
    {
        id: 1,
        name: 'Mark',
    },
    {
        id: 2,
        name: 'John',
    },
    {
        id: 3,
        name: 'Jorge',
    },
];



export const shortData: IRepo[] = [
    {
        id: 1,
        name: 'Mark',
        year: 1986
    },
    {
        id: 2,
        name: 'John',
        year: 1993
    },
    {
        id: 3,
        name: 'Jorge',
        year: 2001
    },
]
export const fullData: IRepo[] = [
    {
        id: 1,
        name: 'Mark',
        year: 1986
    },
    {
        id: 2,
        name: 'John',
        year: 1993
    },
    {
        id: 3,
        name: 'Jorge',
        year: 2001
    },
    {
        id: 4,
        name: 'Jorge12',
        year: 2001
    },
    {
        id: 5,
        name: 'Jorge44',
        year: 2001
    },
    {
        id: 6,
        name: 'Lev',
        year: 1995
    }, {
        id: 7,
        name: 'Loss',
        year: 1867
    }, {
        id: 8,
        name: 'Catty',
        year: 1999
    }, {
        id: 9,
        name: 'Carry',
        year: 1954
    }, {
        id: 10,
        name: 'Frank',
        year: 1988
    },
]
