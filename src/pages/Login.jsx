import { useState } from "react"




const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)

  function signin(e) {
    e.preventDefault()
    if (username === "" || password === "") return alert("login o password is empty")
    if (username === "admin" && password === "admin") return alert("welcome admin")
    if (username === "admin" || password !== "admin") return alert("login o password is incorrect")

    // if (username === "admin" && password === "admin") {
    //   alert("welcome admin")
    // } else {
    //   alert("login o password is incorrect")
    // } 

  }


  return (

    <div className="form-login-container">

      <div
        class="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden"
      >
        <div class="flex flex-col justify-center items-center space-y-2">
          <h2 class="text-2xl font-medium text-slate-700">Login</h2>
          <p class="text-slate-500">Enter details below.</p>
        </div>
        <form class="w-full mt-4 space-y-3">
          <div>
            <input
              class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
              placeholder="Username"
              id="username"
              name="username"
              type="text"
              onChange={(e) => { setUsername(e.target.value) }}
            />
          </div>
          <div>
            <input
              class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              onchange={function (e) { setPassword(e.target.value) }}
            />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                class="mr-2 w-4 h-4"
                id="remember"
                name="remember"
                type="checkbox"
                onchange={(e) => { setRemember(e.target.checked) }}
              />
              <span class="text-slate-500">Remember me </span>
            </div>
            <a class="text-blue-500 font-medium hover:underline" href="#"
            >Forgot Password</a
            >
          </div>
          <button
            class="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
            id="login"
            name="login"
            type="submit"
            onClick={(e) => signin(e) }
          >
            login
          </button>
          <p class="flex justify-center space-x-1">
            <span class="text-slate-700"> Have an account? </span>
            <a class="text-blue-500 hover:underline" href="#">Sign Up</a>
          </p>
        </form>
      </div>


    </div>
  )
}

export default Login