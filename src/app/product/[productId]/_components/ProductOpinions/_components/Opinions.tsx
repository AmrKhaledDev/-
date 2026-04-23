/* eslint-disable @typescript-eslint/no-explicit-any */

import { User } from "@prisma/client";
import { Star, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
// ==========================================================
function Opinions({
  users,
  userSession,
}: {
  users: any[];
  userSession: User | null;
}) {
  return (
    <ul className="flex flex-col gap-2">
      {users.map((u: any) => (
        <li
          key={u.id}
          className="flex bg-black p-3 rounded-2xl w-180 ring ring-gray-50/10 gap-3"
        >
          {u.image ? (
            <Image
              src={u.image}
              alt="user image"
              width={60}
              height={60}
              className="rounded-full object-cover size-11 ring ring-gray-50/50"
            />
          ) : (
            <div className="size-11 rounded-full text-white bgg-ip flex items-center justify-center capitalize font-bold text-[17px]">
              {u.name.slice(0, 1)}
            </div>
          )}
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-[17px] capitalize text-white">{u.name}</h2>
            <p className="text-gray-300 text-sm">{u.opinion}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0.5">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Star
                      key={index}
                      className={`size-4.5 
                        ${index + 1 <= u.star ? "fill-yellow-600 text-yellow-600" : " text-slate-700"}
                        `}
                    />
                  ))}
              </div>
              <div className="flex items-center gap-1.5 text-white">
                <ThumbsUp onClick={()=>{
                  if(!userSession) return redirect("/login")
                }} className="size-4.5 cursor-pointer" />
                <span className="font-serif">2</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Opinions;
