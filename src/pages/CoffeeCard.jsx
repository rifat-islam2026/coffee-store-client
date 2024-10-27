import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CoffeeCard({ coffee,coffees,setCoffees }) {
    const {_id, name, quantity, supplier, category,photo } = coffee;
    const handelDelete = id => {
        console.log('delete for id :', id)
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
                fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount>0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
                const remaining = coffees.filter(coff => coff._id !== _id);
                setCoffees(remaining)
            })  
                
            }
        }); 
    }
  return (
    <div>
          <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                  <img
                      src={photo}/>
              </figure>
              <div className="w-full flex justify-between p-5">
                  <div>
                      <h2 className="card-title">{name}</h2>
                      <p>Quantity :{quantity}</p>
                      <p>Supplier :{supplier}</p>
                      <p>Category :{category}</p>
                  </div>
                  <div className="card-actions justify-end">
                      <div className="join join-vertical">
                          <button className="btn join-item btn-primary mb-2">View</button>
                          <Link to={`/updateCoffee/${_id}`}>
                              <button className="btn join-item btn-info mb-2">Update</button>
                          </Link>
                          <button
                              onClick={()=>handelDelete(_id)}
                              className="btn join-item btn-warning"
                          >Delete</button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default CoffeeCard
