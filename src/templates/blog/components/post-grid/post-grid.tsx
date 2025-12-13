type PostGridProps = {
  children: React.ReactNode;
};

export const PostGrid = ({ children }: PostGridProps) => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
};
