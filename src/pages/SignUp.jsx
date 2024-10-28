import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

function SignUp() {
    const { createUser } = useContext(AuthContext);

    const handelSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const createdAt = result.user?.metadata?.creationTime;
                const user = { email, createdAt: createdAt };
                fetch('http://localhost:5000/user', {
                    method: "POST",
                    headers: {
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'SignUp successfully!',
                                text: 'Do you want to continue',
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            })
                        }
                })
            })
            .catch(err => {
            console.log(err.message)
        })
    }
    return (
        <div>
            <h1 className="text-5xl text-center py-10 font-bold">Please SignUp</h1>
            <Link
                to="/"
                className='link-primary link-hover flex justify-center'>Back</Link>
            <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handelSignUp}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 mb-2">
                        <button className="btn btn-primary">SignUp</button>
                    </div>
                    <p>Already have account?
                        <Link
                            to="/signIn"
                            className="text-blue-700 font-semibold link-hover "
                        >Please SignUp</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp
