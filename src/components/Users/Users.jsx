import React from "react";
import Card from "./Card";

const Users = (props) => {
  return (
    <>
      <div className="grid gap-10 md:grid-cols-2  mt-8 w-[53rem] ml-auto mr-auto">
        {props.userDetails.map((user) => (
          <Card
            key={user.id}
            img={user.img}
            name={user.name}
            id={user.id || new Date()}
            dob={user.dob || user.email}
          />
        ))}
      </div>
    </>
  );
};

export default Users;
