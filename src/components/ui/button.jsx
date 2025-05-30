export function Button({ children, variant }) {
  let base = "px-4 py-2 rounded";
  let style = variant === "secondary" ? "bg-gray-300" :
              variant === "outline" ? "border" : "bg-blue-500 text-white";
  return <button className={base + " " + style}>{children}</button>;
}
