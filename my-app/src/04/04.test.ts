import {CourseType} from "./04";

export {};


test("should take old men older 90", ()=> {
    const ages = [18,20,22,1,100,90,14];

    const oldAges = ages.filter(a =>  a > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take courses chipper 160", ()=> {
    const courses = [
        {title:"css", price:110},
        {title:"JS", price:200},
        {title:"React", price:150}
    ]

    const cheapCouses = courses.filter( c => c.price < 160)

    expect(cheapCouses.length).toBe(2);
    expect(cheapCouses[0].title).toBe("css");
    expect(cheapCouses[1].title).toBe("React");
})

test("get only completed tasks", () => {
    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:2, title: 'Milk', isDone: true},
        {id:3, title: 'Solt', isDone: false},
        {id:4, title: 'Sugar', isDone: true}
    ]

    const complidetTask = tasks.filter(task => task.isDone == true)

    expect(complidetTask.length).toBe(2);
    expect(complidetTask[0].id).toBe(2);
    expect(complidetTask[1].id).toBe(4);
})