import { CircleX } from "lucide-react";
import { NavBar } from "../../components/NavBar";

export function PageNotFound() {
  return (
    <div className="flex flex-col gap-12">
      <NavBar />

      <section className="flex flex-col items-center justify-center gap-4 px-5 text-center md:px-8 lg:px-10">
        <h1 className="flex flex-col items-center text-2xl font-extrabold">
          <CircleX size={40} />
          <span>Something went wrong.</span>
        </h1>
        <p>
          Click <span className="font-extrabold">Where In the world?</span> in
          the navbar to return to homepage
        </p>
      </section>
    </div>
  );
}
