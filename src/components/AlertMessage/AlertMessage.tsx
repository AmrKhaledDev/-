import { AlertCircle } from "lucide-react";
// =================================
function AlertMessage({
  type,
  message,
}: {
  type: "success" | "error";
  message: string;
}) {
  return (
    <p
      className={`w-full flex items-center gap-2 justify-center rounded-md text-xs ring text-center 
    ${type === "error" && "ring-red-500/40 p-2 text-red-400 "}
    ${type == "success" && "ring-green-500/40 p-2 text-green-400 "}
    `}
    >
      {type == "error" ? <AlertCircle className="size-4" /> : <div className="border-3 border-green-500 animate-spin size-3.5 rounded-full border-y-transparent"/>}
      {message}
    </p>
  );
}

export default AlertMessage;
