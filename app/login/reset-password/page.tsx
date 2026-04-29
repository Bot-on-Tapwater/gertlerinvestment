import Link from "next/link";
import Form from "next/form";
import { ForwardSlashIcon } from "@/app/global/components/svgIcons";

function BeforeFormSegment() {
  return (
    <>
      <section className="flex flex-col justify-between items-start gap-y-4">
        <div className="font-bold text-lg">Password Reset</div>
        {/* <div className="font-extralight">
          Don't have an account?{" "}
          <span>
            <Link href="/signup" className="font-bold  hover:underline ">
              Join now
            </Link>
          </span>
        </div> */}
        <div>
          Provide the email address associated with your account to recover your
          password.
        </div>
      </section>
    </>
  );
}

function HorizontalSeparator() {
  return <div className="w-full h-1 bg-summerfive/50"></div>;
}

function AuthLink({ name, link }: { name: string; link: string }) {
  return (
    <Link href={link} className="hover:underline">
      {name}
    </Link>
  );
}

function ResetPasswordForm() {
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
        <button className="bg-summerfive p-4 text-summertwo rounded-lg cursor-pointer hover:bg-summerfive/85 duration-200">
          Reset Password
        </button>
        <HorizontalSeparator />
        <section className="flex gap-x-8 justify-end">
          <AuthLink name="Login" link="/login" />
          <AuthLink name="Sign Up" link="/signup" />
        </section>
      </Form>
    </>
  );
}

export default function ResetPassword() {
  return (
    <>
      <section className="p-8 border-2 shadow-lg shadow-summerfive border-summerfive rounded-lg flex flex-col gap-y-12 w-lg text-summerfive">
        <BeforeFormSegment />
        <ResetPasswordForm />
      </section>
    </>
  );
}
