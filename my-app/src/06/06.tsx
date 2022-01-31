import React, {ChangeEvent, MouseEvent} from "react";

export const User = ()=> {

    const deleteUser =(event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
        //alert("User deleted");
    }

    // const saveUser =() => {
    //     alert("User saved");
    // }
    const nameChanges =()=> {
        console.log("name cchanged")
    }
    const onAgeChanged =(event: ChangeEvent<HTMLInputElement>)=> {
        console.log("age cchanged" + event.currentTarget.value)
    }
    const focusLostHandler =()=> {
        console.log("focus lost")
    }

    return (
        <div><textarea onChange={nameChanges} onBlur={focusLostHandler}>Pavel</textarea>
            <button name="delete" onClick={deleteUser}>delete</button>
            <input type="number" onChange={onAgeChanged}/>
        </div>
    )
}