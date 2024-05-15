"use client";

import { supabase } from "@/config/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

function RegisterPage() {
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState(null);
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const formSchema = z.object({
    email: z.string().trim().email("Invalid email"),
    password: z
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters"),
  });

  const onLogin = async (e) => {
    e.preventDefault();

    const { error: err } = formSchema.safeParse(formData);
    if (err) {
      setErrors(err.formErrors.fieldErrors);
    } else {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      error ? alert(error.message) : router.replace("/admin");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-xl mx-auto">Login</h1>
      <form onSubmit={onLogin} className="w-96">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
          {errors && errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
          {errors && errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded-md py-2 px-4 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
