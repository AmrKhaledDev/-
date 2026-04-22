/* eslint-disable @typescript-eslint/no-explicit-any */

import OpinionCard from "./OpinionCard";
// ==========================================================
function Opinions({users}:{users:any[]}) {
  return (
    <ul className="flex flex-col gap-2">
      {users.map((u: any) => (
      <OpinionCard key={u.id} u={u}/>
      ))}
    </ul>
  );
}

export default Opinions;
