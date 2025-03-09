"use client";
import Icon from "@/assets/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

  return (
    <>
      <div className="relative w-full max-w-md rounded-lg border border-accent-green-light bg-accent-green-dark/20 p-6 shadow-lg">
        <button
          onClick={() => router.back()}
          className="absolute left-4 top-4 flex items-center text-sm font-medium text-accent-green-light hover:text-accent-green-light/80 transition-colors cursor-pointer"
        >
          <span className="mr-1">&lt;</span> Back
        </button>

        <div className="mb-4 mt-4 text-center">
          <h3 className="text-3xl font-bold text-accent-green-light mb-1 md:text-4xl">Sign Up</h3>
          <h4 className="text-xl font-medium text-accent-green-light/90 md:text-2xl">Hello, there!</h4>
        </div>

        <form className="space-y-5">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-accent-green-light">Name</label>
            <input
              type="text"
              id="name"
              placeholder="john_doe45"
              className="w-full rounded-md border border-accent-green-light bg-accent-green-dark/30 px-3 py-2 text-accent-green-light placeholder:text-accent-green-light/50 focus:outline-none focus:ring-2 focus:ring-accent-green-light/50"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-accent-green-light">Email</label>
            <input
              type="email"
              id="email"
              placeholder="john.doe@gmail.com"
              className="w-full rounded-md border border-accent-green-light bg-accent-green-dark/30 px-3 py-2 text-accent-green-light placeholder:text-accent-green-light/50 focus:outline-none focus:ring-2 focus:ring-accent-green-light/50"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-accent-green-light">Password</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full rounded-md border border-accent-green-light bg-accent-green-dark/30 px-3 py-2 text-accent-green-light placeholder:text-accent-green-light/50 focus:outline-none focus:ring-2 focus:ring-accent-green-light/50"
            />
          </div>

          <div>
            <label htmlFor="password1" className="text-sm font-medium text-accent-green-light">Confirm Password</label>
            <input
              type="password1"
              id="password1"
              placeholder="********"
              className="w-full rounded-md border border-accent-green-light bg-accent-green-dark/30 px-3 py-2 text-accent-green-light placeholder:text-accent-green-light/50 focus:outline-none focus:ring-2 focus:ring-accent-green-light/50"
            />
          </div>

          <button type="submit" className="w-full rounded-md bg-accent-green-light px-4 py-2 font-bold text-black hover:bg-accent-green-light/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-green-light/50 cursor-pointer">
            Sign Up
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-accent-green-light/30"></span>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-accent-green-dark/20 px-2 text-accent-green-light/70"></span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="flex items-center justify-center rounded-md border border-accent-green-light/50 bg-accent-green-dark/40 p-2 hover:bg-accent-green-dark/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-green-light/50 cursor-pointer">
              <Icon.Google className="h-5 w-5" />
            </button>
            <button type="button" className="flex items-center justify-center rounded-md border border-accent-green-light/50 bg-accent-green-dark/40 p-2 hover:bg-accent-green-dark/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-green-light/50 cursor-pointer">
              <Icon.StandardGitHub className="h-5 w-5 fill-white" />
            </button>
          </div>
        </form>

        <div className="mt-2 text-center text-sm text-accent-green-light/80">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium text-accent-green-light hover:underline">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}