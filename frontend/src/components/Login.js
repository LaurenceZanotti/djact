import React from 'react'

export default function Login() {
    return (
        <div>
            <form action="" method="POST">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="e.g.: John Doe" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput2" />
                </div>
                <div className="mb-3">
                    <input type="submit" value="Login" className="btn btn-success me-2" />
                    <input type="button" value="Register" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}