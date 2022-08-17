/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function JoinPage() {
  return (
    <div class={tw`text-center`}>
      <img
        src="/logo.svg"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <br />
      <h2>Sign Up</h2>
      <br />
      <form>
        <input
          type="text"
          class={tw`border rounded shadow-md px-4 py-2 w-72`}
          name="name"
          placeholder="Name"
        />
        <br />
        <br />
        <input
          type="email"
          class={tw`border rounded shadow-md px-4 py-2 w-72`}
          name="email"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          type="password"
          class={tw`border rounded shadow-md px-4 py-2 w-72`}
          name="password"
          placeholder="Password"
        />
        <br />
        <br />
        <button
          class={tw`border rounded shadow-md px-4 py-2 bg-blue-800 text-white`}
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
