interface BeanProps {
  text?: string;
}

export default function Bean({ text }: BeanProps) {
  return (
    <div className="border-secondary-yellow flex w-fit items-center justify-center rounded-4xl border-2 p-2">
      <p className="text-secondary-yellow font-bold">{text || "Insert text"}</p>
    </div>
  );
}
