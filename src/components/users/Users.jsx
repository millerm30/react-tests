import React from 'react';
import {Container} from '../container/Container';
import {v4 as uuidv4} from 'uuid';

const Users = () => {
    const users = [
        { firstName: "Michael", lastName: "Miller", age: 42 },
        { firstName: "John", lastName: "Doe", age: 30 },
        { firstName: "Jane", lastName: "Doe", age: 25 },
        { firstName: "Jack", lastName: "Doe", age: 20 },
        { firstName: "Jill", lastName: "Doe", age: 15 },
    ];

    const userList = users.map(user => {
        return <li key={uuidv4()}>{user.firstName} {user.lastName} {user.age}</li>
    })

    return (
        <Container title="User List Array" description="Display list of all items from an array in the browser">
            {userList}
        </Container>
    )
}

export default Users