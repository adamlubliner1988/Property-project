import React from "react";
import InfoBox from "./InfoBox";
function infoBoxes() {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browes Property",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find your dream rental property. <br /> Bookmark properties and
            contact owners.
          </InfoBox>
          <InfoBox
            heading="For Owners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-black",
            }}
          >
            List your properties and reach potential tenants. <br />
            Rent as an airbnb or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
}

export default infoBoxes;
