import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

function SignIn() {
    const { signInUser } = useContext(AuthContext);

    const handelSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                const user = {
                    email,
                    lastLoginAt: result.user?.metadata?.lastSignInTime
                };

                fetch('http://localhost:5000/user', {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
            })
            .catch(err => {
            console.log(err.message)
        })

    }
  return (
      <div>
          <h1 className="text-5xl text-center py-10 font-bold">Please SignIn</h1>
          <Link
              to="/"
              className='link-primary link-hover flex justify-center'>Back to home!</Link>
          <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handelSignIn}>
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
                  <div className="form-control mt-6">
                      <button className="btn btn-primary">SignIn</button>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default SignIn
