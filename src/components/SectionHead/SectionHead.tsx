function SectionHead({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3"> 
      <h1 className="text-4xl font-extrabold text-white">{title}</h1>
      {subtitle && <p className="font-normal text-gray-300">{subtitle}</p>}
    </div>
  );
}

export default SectionHead;
