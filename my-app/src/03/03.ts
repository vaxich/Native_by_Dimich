import {student, studentType} from "../02/02";


export const sum = (a:number, b:number) => {
    return a + b
}

export const addSkill = (student: studentType, skill: string) =>{
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: studentType)  {
    s.isActive = true
}

export function doesStudentLiveIn(s: studentType, cityName:string) {
    return s.adress.city.title === cityName;
}