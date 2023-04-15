export function Login() {
  return (
    <>
      <label
        htmlFor="nav-modal-1"
        className="cursor-pointer bg-zinc-800 bg-opacity-60 py-4 px-4 rounded-3xl hover:bg-opacity-100 transition-all duration-300"
      >
        <img style={{ width: "20px" }} src="assets/login.png"></img>
      </label>
      <input type="checkbox" id="nav-modal-1" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative bg-zinc-800">
          <label
            htmlFor="nav-modal-1"
            className="btn btn-sm btn-circle btn-outline absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text text-base font-thin">E-mail</span>
            </label>
            <input
              type="text"
              placeholder="user@gmail.com"
              className="input input-bordered bg-inherit w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text text-base font-thin">Password</span>
            </label>
            <input
              type="password"
              placeholder="●●●●●●●●"
              className="input input-bordered bg-inherit w-full max-w-xs "
            />
            <a className="my-2 link link-hover font-thin">
              Forgot your password?
            </a>
            <div className="flex justify-evenly mt-5">
              <button className="btn btn-outline font-thin">Register</button>
              <button className="btn btn-primary font-thin">Log-in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
