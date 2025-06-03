import React from "react";
import { SearchAndActionSection } from "./sections/SearchAndActionSection";
import { SubscriptionSection } from "./sections/SubscriptionSection/SubscriptionSection";

export const AdminSubscriptions = (): JSX.Element => {
  return (
    <div
      className="bg-[#fafcff] flex flex-row justify-center w-full"
      data-model-id="757:4035"
    >
      <div className="bg-[#fafcff] w-full relative flex flex-col">
        {/* SearchIcon and Action Section */}
        <SearchAndActionSection />

        {/* Main content */}
        <main className="flex-1">
          <SubscriptionSection />
        </main>
      </div>
    </div>
  );
};
