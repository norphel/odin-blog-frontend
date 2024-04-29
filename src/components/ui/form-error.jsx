import React from "react";
import { IconAlertTriangle } from "@tabler/icons-react";

export const FormError = ({ message }) => {
  if (!message) return null;

  return (
    <div className="bg-red-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-700">
      <IconAlertTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
