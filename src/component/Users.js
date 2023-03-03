import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    const [users, setUsers] = useState([])

    const [isLoading, setLoading] = useState(true)
    return (
        <div>
            <h1>Users</h1>
            {isLoading && <div>Loading......</div>}
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
}

export default Users
