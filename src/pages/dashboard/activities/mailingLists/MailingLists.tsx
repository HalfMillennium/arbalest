import React from "react";
import { useState } from "react";
import { NoMailingLists } from "./NoMailingLists";

export default function MailingLists() {
  const [userMailingLists, setUserMailingLists] = useState([]);
  const userHasMailingLists = userMailingLists.length > 0;
  return (
    <>
      {userHasMailingLists && (
        <div>
          <h2>Mailing Lists</h2>
          <p>Details about mailingl lists.</p>
        </div>
      )}
      {!userHasMailingLists && <NoMailingLists />}
    </>
  );
}
