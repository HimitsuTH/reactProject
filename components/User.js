import { View, Text } from "react-native";
import React from "react";

const User = () => {
  const users = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Jack",
    },
    {
      id: 3,
      name: "Mary",
    },
  ];

  return (
    <View>
      <ul style={{ listStyle: "none" }}>
        {users.map((user, index) => (
          <li
            key={user.id}
            style={{
              backgroundColor: "#ffff",
              margin: 10,
              borderRadius: 20,
              width: 100,
              textAlign: "center",
              fontWeight: "bold",
              padding: 10,
              fontFamily: "sans-serif",
            }}
          >
            {(index+1)}. {user.name}
          </li>
        ))}
      </ul>
    </View>
  );
};

export default User;
