import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function User() {
    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers);
    console.log(users)

    const handelDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining)
                    })

            }
        }); 
    }

  return (
      <div className="mx-20 mb-10">
          <h1 className="text-3xl text-center py-7 font-bold">UserInfo</h1>
          <Link
              to="/"
              className='link-primary link-hover flex justify-center mb-5'>Back</Link>
          <div className="overflow-x-auto">
              <table className="table">
                  {/* head */}
                  <thead className="bg-slate-800 text-white">
                      <tr>
                          <th>ID</th>
                          <th>@email</th>
                          <th>CreatedAt</th>
                          <th>LastLoginAt</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  {
                      users.map((user,idx) => <tbody key={user._id}>
                          <tr className="hover">
                              <th>{idx+1}</th>
                              <td>{user.email}</td>
                              <td>{user.createdAt}</td>
                              <td>{ user.lastLoginAt}</td>
                              <td className="flex gap-2">
                                {/* <Link to={`/user/:${user._id}`}> */}
                                    <button className="btn btn-info">Update</button>
                                  {/* </Link> */}
                                  <button
                                      onClick={()=>handelDelete(user._id)}
                                      className="btn btn-warning">Delete</button>
                              </td>
                          </tr>
                      </tbody>)
                  }
              </table>
          </div>
    </div>
  )
}

export default User
