import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  return (
    <div>
      Login
      <div
        onClick={!session ? signIn : signOut}
        className="cursor-pointer hover:underline"
      >
        <p className="font-extrabold md:text-sm">
          {session ? `Hello, ${session.user.name}` : "Sign In"}
        </p>
        <p className="font-extrabold md:text-sm">Accounts & Lists</p>
      </div>
    </div>
  );
};

export default Login;
