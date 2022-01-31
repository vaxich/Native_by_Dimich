import React from 'react';

type sityType = {
    title: string,
    countryTitle: string
}

type adressType ={
    streetTitle:string
    city: sityType
}

type technologiesType = {
    id:number
    title:string
}

export type studentType = {
    id:number
    name: string
    age: number
    isActive: boolean
    adress: adressType
    technologies: Array<technologiesType>
}


export const student = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    adress: {
        streetTitle: "surganova",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id:1,
            title: "HTML"
        },
        {
            id:2,
            title: "CSS"
        },
        {
            id:3,
            title: "React"
        }
    ]
}
