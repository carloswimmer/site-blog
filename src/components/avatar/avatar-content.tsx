type AvatarContentProps = {
  children: React.ReactNode;
};

export const AvatarContent = ({ children }: AvatarContentProps) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};
