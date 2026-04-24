import Link from "next/link";
import Form from "next/form";
import { ForwardSlashIcon } from "../global/components/svgIcons";

function BeforeFormSegment() {
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="font-bold text-lg">Login</div>
        <div className="font-extralight">
          Don't have an account?{" "}
          <span>
            <Link href="/signup" className="font-bold  hover:underline ">
              Join now
            </Link>
          </span>
        </div>
      </section>
    </>
  );
}

function LoginForm() {
  return (
    <>
      <Form action="" className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-4">
          <label>Email</label>
          <input
            name="email"
            required
            placeholder="Email address"
            className="border-1 border-summerfive/80 p-4 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label className="flex justify-between items-center">
            <div>Password</div>
            <Link href="" className="hover:underline text-summerfive/80">
              Forgot Password?
            </Link>
          </label>
          <input
            name="password"
            required
            placeholder="Password"
            className="border-1 border-summerfive/80 p-4 rounded-lg"
          />
        </div>
        <button className="bg-summerfive p-4 text-summertwo rounded-lg">
          Login
        </button>
        <div className="flex items-center justify-center p-2">
          <ForwardSlashIcon />
        </div>
      </Form>
    </>
  );
}

export default function Login() {
  return (
    <>
      <section className="p-8 border-2 shadow-lg shadow-summerfive border-summerfive rounded-lg flex flex-col gap-y-12 w-lg text-summerfive">
        <BeforeFormSegment />
        <LoginForm />
      </section>
    </>
  );
}

// shadow-xl shadow-summerfive
