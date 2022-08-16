/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function JoinPage() {
  return (
    <div class={tw`h-screen flex items-center justify-center`}>
      <img
        src="/logo.svg"
        height="300px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <br />
      <h3>Sign Up</h3>
      <br />
      <section>
        <form>
          <input
            type="text"
            class={tw`border rounded shadow-md px-4 py-2 w-72`}
            name="q"
            placeholder="Name"
          />
          <br />
          <input
            type="email"
            class={tw`border rounded shadow-md px-4 py-2 w-72`}
            name="q"
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            class={tw`border rounded shadow-md px-4 py-2 w-72`}
            name="q"
            placeholder="Password"
          />
          <button
            class={tw`border rounded shadow-md px-4 py-2 bg-blue-800 text-white ml-4`}
            type="submit"
          >
            Search
          </button>
        </form>
      </section>
    </div>
  );
}
