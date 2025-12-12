import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const CallToAction = () => {
  return (
    <section className="relative py-24 bg-[url('/call-to-action-bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className=" container flex flex-col items-center gap-12 text-center">
        <div className="absolute -top-6 p-4 bg-cyan-300 w-fit rounded-full">
          <Store className="text-cyan-100" />
        </div>
        <h2 className="font-pt-sans-caption text-balance text-heading-xl text-gray-100">
          Create an online store and start selling today
        </h2>

        <Button variant="primary" asChild>
          <Link href="/create-store">
            Create free store
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
};
