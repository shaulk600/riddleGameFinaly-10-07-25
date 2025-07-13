import { } from "http";
import { } from "url";


const URL = "http://localhost:3000";

export async function getRiddles() {
    const response = await fetch(`${URL}/riddle/all`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    });
}

export async function initRiddle(obj) {
    const response = await fetch(`${URL}/riddle/init`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(obj)
    });
}

export async function getRiddleById(id) {
    const response = await fetch(`${URL}/riddle/id=${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    });
}

export async function UpdateRiddleById(id,obj) {
    const response = await fetch(`${URL}/riddles/riddle/update/id=${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(obj) // השאלה אם עדיך ב body או שאפשר כבר בפרמטרים
    });
}  

export async function deleteRiddleById(id){
    const response = await fetch(`${URL}/riddles/riddle/delete/id=${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'DELETE',
        body: JSON.stringify(obj) // השאלה אם עדיך ב body או שאפשר כבר בפרמטרים
    });
}
