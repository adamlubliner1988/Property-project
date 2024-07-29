import Properties from "@/properties.json";
import PropertyCard from '@/components/propertyCard'
import React from "react";
import Link from "next/link";

const PropertyPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {Properties.length === 0 ? (
          <p> No Proprties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Properties.map((property) => (
              <PropertyCard key={property._id} property ={property}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyPage;
