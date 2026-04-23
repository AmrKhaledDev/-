"use client";

import { useState } from "react";
import OpinionInput from "./_components/OpinionInput";
import Rating from "./_components/Rating";
import Opinions from "./_components/Opinions";
import { User } from "@prisma/client";

/* eslint-disable @typescript-eslint/no-explicit-any */
// =======================================================================
function ProductOpinions({
  users,
  userSession,
}: {
  users: any;
  userSession: User | null;
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="flex flex-col gap-10">
      <h2 className="font-semibold text-xl text-white">
        ماذا قال العملاء عن هذا المنتج؟
      </h2>
      <div className="flex flex-col gap-4">
        {userSession && (
          <div className="flex items-center gap-10 flex-1">
            <OpinionInput />
            <Rating
              hover={hover}
              rating={rating}
              setRating={setRating}
              setHover={setHover}
            />
          </div>
        )}
        <Opinions users={users} userSession={userSession}/>
      </div>
    </div>
  );
}

export default ProductOpinions;
