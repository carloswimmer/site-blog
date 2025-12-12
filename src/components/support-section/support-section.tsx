import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";

export const SupportSection = () => {
  return (
    <section className="pb-8 md:py-10 bg-gradient-to-r from-gray-500 to-gray-700">
      <div className="container flex flex-col items-center gap-12">
        <h2 className="font-pt-sans-caption text-balance text-center text-heading-xl text-gray-100">
          Your affiliate store, simple, the way it should be
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* First Card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <PaintbrushVertical className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Customize your site
            </strong>
            <p className="text-body-sm text-gray-200">
              Add your logo, favicon, colors to your catalog and make it your
              own.
            </p>
          </div>

          {/* Second Card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
              <Store className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Sell from any store
            </strong>
            <p className="text-body-sm text-gray-200">
              No matter the store, Site.Set allows you to insert any affiliate
              link.
            </p>
          </div>

          {/* Third Card */}
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <HeartHandshake className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Get friendly support
            </strong>
            <p className="text-body-sm text-gray-200">
              Our team will always be ready to assist you with whatever you
              need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
