import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateCoffee() {
    const loadedCoffee = useLoaderData();
    console.log(loadedCoffee)
    const {_id, name, quantity, supplier, taste, category, details, photo } = loadedCoffee;
    const handelUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        // console.log(name, quantity, supplier, taste, category, details, photo)
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee)
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Coffee added successfully!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }
  return (
    <div>
          <h1 className="text-3xl text-center font-bold py-5">Update Coffee</h1>
          <hr />
          <Link
              to="/"
              className='link-primary link-hover ml-24'>Back</Link>
          <div className="px-24 pt-10">
              <form onSubmit={handelUpdateCoffee}>
                  <div className="md:flex gap-4 mb-5">
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Coffee Name</span>
                          </label>
                          <input
                              name="name"
                              type="text"
                              defaultValue={name}
                              className="input input-bordered w-full" required />
                      </div>
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Available Quantity</span>
                          </label>
                          <input
                              name="quantity"
                              type="text"
                              defaultValue={quantity}
                              className="input input-bordered w-full" required />
                      </div>
                  </div>

                  <div className="flex gap-4 mb-5">
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Supplier</span>
                          </label>
                          <input
                              name="supplier"
                              type="text"
                              defaultValue={supplier}
                              className="input input-bordered w-full" required />
                      </div>
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Taste</span>
                          </label>
                          <input
                              name="taste"
                              type="text"
                              defaultValue={ taste}
                              className="input input-bordered w-full" required />
                      </div>
                  </div>
                  <div className="flex gap-4 mb-5">
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Category</span>
                          </label>
                          <input
                              name="category"
                              type="text"
                              defaultValue={ category}
                              className="input input-bordered w-full" required />
                      </div>
                      <div className="form-control md:w-1/2">
                          <label className="label">
                              <span className="label-text">Details</span>
                          </label>
                          <input
                              name="details"
                              type="text"
                              defaultValue={ details}
                              className="input input-bordered w-full" required />
                      </div>
                  </div>
                  <div className="form-control min-w-full mb-7">
                      <label className="label">
                          <span className="label-text">Photo URL</span>
                      </label>
                      <input
                          name="photo"
                          type="text"
                          defaultValue={photo}
                          className="input input-bordered w-full" required />
                  </div>
                  <button type="submit" className="btn btn-warning w-full">
                      Update Coffee
                  </button>
              </form>
          </div>
    </div>
  )
}

export default UpdateCoffee
