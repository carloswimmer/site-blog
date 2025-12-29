export type UserListProps = {
  id: number;
  name: string;
};

export const useMockedEvents = () => {
  const fetchUsers = async (): Promise<UserListProps[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
          { id: 3, name: "Charlie" },
        ]);
      }, 4000);
    });
  };

  const throwError = () => {
    throw new Error("This component is throwing an error");
  };

  return { fetchUsers, throwError };
};
