import type { UserListProps } from "@/hooks/use-mocked-events";

/** Helper function to fetch users (works in Server Components) */
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

/** Component to help simulating loading and error states on server component */
export const MockFail = async () => {
  const userList = await fetchUsers();

  // Simulate error: throw error when userList has items
  if (userList.length > 0) {
    throw new Error("Mock error - simulating server component error");
  }

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center px-4 gap-4">
      Simulating server component error...
    </div>
  );
};
