// component
import { Button } from "react-scroll";
import DateSelection from "./DateSelection";
import { HoursSelection } from "./HoursSelection";
import LocationSection from "./LocationSection";

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* Location selection */}
          <LocationSection />
          {/* date selection */}
          <DateSelection />
          {/* hours selection */}
          <HoursSelection />
          {/* btn */}
          <div className="flex items-center px-6">
            <button className="btn btn-sm bg-accent w-[164px] mx-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
