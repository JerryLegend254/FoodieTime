import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./LocationService";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  return (
    <LocationContext.Provider
      value={{
        location,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
