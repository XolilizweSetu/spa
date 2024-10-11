import React, { useEffect, useState } from 'react';

function Profile() {
    const [users, setUsers] = useState([]);
    const [selectedUserIndex, setSelectedUserIndex] = useState(0);

    
    useEffect(() => {
        const fetchUserData = () => {
            setTimeout(() => {
                setUsers([
                    {
                        name: "Emily",
                        Email: "emilymay@example.com",
                        Phone: "1234567890",
                        FavoriteService: "Makeup, Color Hair",
                    },
                    {
                        name: "Jane Doe",
                        Email: "janedoe@example.com",
                        Phone: "1234567890",
                        FavoriteService: "Makeup, Nails",
                    },
                ]);
            }, 1000); 
        };
        fetchUserData();
    }, []);

    if (users.length === 0) {
        return <div>Loading user profiles...</div>;
    }

    const selectedUser = users[selectedUserIndex];

    return (
        <div>
            <div className="user-select">
                <h4>Select a User</h4>
                <select onChange={(e) => setSelectedUserIndex(parseInt(e.target.value))} value={selectedUserIndex}>
                    {users.map((user, index) => (
                        <option key={index} value={index}>
                            {user.name}
                        </option>
                    ))}
                </select>

                <h2>User Details</h2>
                <h3>{selectedUser.name}</h3>
                <p>Phone: {selectedUser.Phone}</p>
                <p>Email: {selectedUser.Email}</p>
                <p>Favorite Service: {selectedUser.FavoriteService}</p>
            </div>
        </div>
    );
}

export default Profile;