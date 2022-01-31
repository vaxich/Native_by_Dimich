export {};

export type CourseType = {
    title:string
    price:number
}

const ages = [18,20,22,1,100,90,14];

const predicat = (age:number) => {
    return age > 90
}

const oldAges = [100];

const courses = [
    {title:"css", price:110},
    {title:"JS", price:200},
    {title:"React", price:150}
    ]

const chipCPredicate = (course: CourseType) => {
 return course.price < 160;
}

const cheapCouses = [{title:"css", price:110}, {title:"React", price:150}];