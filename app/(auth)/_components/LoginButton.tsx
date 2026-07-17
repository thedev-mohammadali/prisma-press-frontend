"use client";

import { Button } from "@/components/ui/button";

const LoginButton = () => {
  console.log(process.env.BACKEND_API_URL, "Hello");
  return <Button>Login</Button>;
};

export default LoginButton;
