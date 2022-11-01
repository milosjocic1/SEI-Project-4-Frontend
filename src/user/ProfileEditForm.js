import React, {useState} from 'react'

export default function ProfileEditForm(props) {
  const [newUser, setNewUser] = useState(props.user);

  // Function
  const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    // Creating a copy of new user state
    const user = { ...newUser };
    user[attributeToChange] = newValue;
    console.log(user);
    setNewUser(user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editUser(newUser);
    event.target.reset();
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="firstName"
            type="text"
            onChange={handleChange}
            value={newUser.firstName}
          ></input>
        </div>
        <div>
          <input
            name="lastName"
            type="text"
            onChange={handleChange}
            value={newUser.lastName}
          ></input>
        </div>
        <div>
          <input
            name="emailAddress"
            type="text"
            onChange={handleChange}
            value={newUser.emailAddress}
          ></input>
        </div>
        <div>
          <input type="submit" value="Update User" />
        </div>
      </form>
    </div>
  );
}
