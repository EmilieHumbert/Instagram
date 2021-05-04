import React from "react";
import useUser from "../../hooks/use-user";
import Suggestions from "./suggestions";

export default function Sidebar() {
  const {
    user: { fullName, username, userId, following, docId },
  } = useUser();

  return (
    <div className="p-4">
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  );
}
