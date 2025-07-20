
const URL = "http://localhost:3000";

export async function getRiddles() {
    try {
        const response = await fetch(`${URL}/riddle/get/all`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });
        const data = await response.json();
        if (response.status === 200) {
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error: riddleDal.js - getRiddles: ', Err);
        return null;
    }
}

export async function getRiddleById(id) {
    try {
        const response = await fetch(`${URL}/riddle/get/id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });
        const data = await response.json();
        if (response.status === 200) {   
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error: riddleDal.js - getRiddleById: ', Err);
        return null;
    }
}

export async function initRiddle(obj) {
    try {
        const response = await fetch(`${URL}/riddle/post/init`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(obj)
        });
        const data = await response.json();
        if (response.status === 200) {   
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error: riddleDal.js - initRiddle: ', Err);
        return null;
    }
}

export async function UpdateRiddleById(id, obj) {
    try {
        const response = await fetch(`${URL}/riddle/update/id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(obj)
        });
        const data = await response.json();
        if (response.status === 200) {   
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error: riddleDal.js - UpdateRiddleById: ', Err);
        return null;
    }
}

export async function deleteRiddleById(id) {
    try {
        const response = await fetch(`${URL}/riddle/delete/id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        });
        const data = await response.json();
        if (response.status === 200) {   
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error: riddleDal.js - getRiddles: ', Err);
        return null;
    }
}

export async function randomRiddle() { //צריך את זה ??
    try {
        const response = await fetch(`${URL}/riddle/get/random`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });
        const data = await response.json();
        if (response.status === 200) {   
            return data;
        }
        else {
            console.log('Error = STATUS');
            return null;
        }
    } catch (Err) {
        console.log('Error: riddleDal.js - randomRiddle: ', Err);
        return null;
    }
}
