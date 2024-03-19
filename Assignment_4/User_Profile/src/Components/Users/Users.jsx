/* eslint-disable react/jsx-key */
import User from "../User/User";
export default function Users() {
    const users = [
        { id: 1,
          name: "Rizwan",
          age: 27,
          height: 7,
          imgURL:"https://picsum.photos/200"
        },
        { id: 2,
          name: "Rakib",
          age: 25,
          height: 5,
          imgURL:"https://picsum.photos/200"
        },
        { id: 3,
          name: "Rkzeebon",
          age: 28,
          height: 6,
          imgURL:"https://picsum.photos/200"
        },
        { id: 4,
          name: "Hazzaz",
          age: 23,
          height: 4,
          imgURL:"https://picsum.photos/200"
        },
        { id: 5,
          name: "Shihab Ali",
          age: 29,
          height: 8,
          imgURL:"https://picsum.photos/200"
        },
        { id: 6,
          name: "Hasan Ali",
          age: 29,
          height: 8,
          imgURL:"https://picsum.photos/200"
        },
        { id: 7,
          name: "SShoheb Ali",
          age: 29,
          height: 8,
          imgURL:"https://picsum.photos/200"
        },
        { id: 8,
          name: "Towhid",
          age: 29,
          height: 8,
          imgURL:"https://picsum.photos/200"
        },
        { id: 9,
          name: "Azad",
          age: 29,
          height: 8,
          imgURL:"https://picsum.photos/200"
        },
        

      ];

  return (
    <>
    {/* <h1>{users.length}</h1> */}
    <div className="d-flex">
        {users.map(user => <User u = {user}/>)}
    </div>
    <div>
    </div>
    </>
  )
}
