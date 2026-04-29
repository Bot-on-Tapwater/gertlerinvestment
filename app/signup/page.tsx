import Link from "next/link";
import Form from "next/form";
import { ForwardSlashIcon } from "../global/components/svgIcons";

function BeforeFormSegment() {
  return (
    <>
      <section className="flex justify-between items-center">
        <div className="font-bold text-lg">Sign up</div>
        <div className="font-extralight">
          Already joined?{" "}
          <span>
            <Link href="/login" className="font-bold  hover:underline ">
              Login now
            </Link>
          </span>
        </div>
      </section>
    </>
  );
}

function SignupForm() {
  return (
    <>
      <Form action="" className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-4">
          <label>Full Name</label>
          <input
            name="fullName"
            required
            placeholder="Enter your full name"
            className="border-1 border-summerfive/80 p-4 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label>Email</label>
          <input
            name="email"
            required
            placeholder="Enter email to get started"
            className="border-1 border-summerfive/80 p-4 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label>Password</label>
          <input
            name="password"
            required
            placeholder="Enter your password"
            className="border-1 border-summerfive/80 p-4 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            required
            placeholder="Retype password"
            className="border-1 border-summerfive/80 p-4 rounded-lg"
          />
        </div>
        <button className="bg-summerfive p-4 text-summertwo rounded-lg cursor-pointer hover:bg-summerfive/85 duration-200">
          Sign Up
        </button>
        <div className="flex items-center justify-center p-2">
          <ForwardSlashIcon />
        </div>
      </Form>
    </>
  );
}

export default function Signup() {
  return (
    <>
      <section className="p-8 border-2 shadow-lg shadow-summerfive border-summerfive rounded-lg flex flex-col gap-y-12 w-lg text-summerfive">
        <BeforeFormSegment />
        <SignupForm />
      </section>
    </>
  );
}
