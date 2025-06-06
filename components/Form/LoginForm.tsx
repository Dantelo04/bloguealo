"use client";

import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "./Input";
import { Logo } from "../Logo/Logo";
import { authClient } from "@/lib/auth-client";
import { Error } from "./Error";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        callbackURL: "/",
      });

      if (res.error) {
        setError(res.error.message || "Something went wrong");
      } else {
        window.location.href = "/";
      }
      
    } catch (error) {
      setError(error as string);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-theme-sm w-full">
      <div className="inline-flex items-center justify-center">
        <span className="text-xl">Iniciar sesión en &nbsp;</span>
        <Logo />
      </div>
      <form className="flex flex-col gap-theme-md w-full" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={data.password}
          onChange={handleChange}
          hideButton
        />
        <Button type="submit" disabled={loading}>{loading ? "Cargando..." : "Iniciar sesión"}</Button>
        {error && <Error error={error} />}
      </form>
    </div>
  );
};
