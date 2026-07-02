type SkillTagProps = {
  label: string;
};

export function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="tag-hover cursor-default rounded-full bg-surface-container-lowest px-4 py-1.5 font-label-md text-[12px] text-on-surface transition-colors duration-300 md:text-label-md">
      {label}
    </span>
  );
}
