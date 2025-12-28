type UserListProps = {
  id: number;
  name: string;
};

async function fetchUsers(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
      ]);
    }, 4000);
  });
}

async function UserList() {
  const userList = await fetchUsers();
  console.log("SERVER", userList);
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center px-4 gap-4">
      {userList.map((user) => (
        <p key={user.id} className="text-gray-100 text-body-md">
          {user.name}
        </p>
      ))}
    </div>
  );
}

export default function UserListPage() {
  return (
    <>
      <h2>User List</h2>
      <UserList />
    </>
  );
}
