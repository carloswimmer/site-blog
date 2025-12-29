"use client";

import { useState } from "react";
import ErrorBoundary from "@/app/error";
import Loading from "@/app/loading";
import { Button } from "@/components/ui/button";
import { type UserListProps, useMockedEvents } from "@/hooks/use-mocked-events";

/** Component to simulate loading and error states on client component */
export const UserList = () => {
  const [userList, setUserList] = useState<UserListProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { fetchUsers, throwError } = useMockedEvents();

  const handleFetchUsers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const users = await fetchUsers();
      setUserList(users);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  };

  const handleThrowError = () => {
    try {
      throwError();
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    }
  };

  const handleResetError = () => {
    setError(null);
  };

  if (error) {
    return <ErrorBoundary error={error} reset={handleResetError} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center px-4 gap-4">
      {userList.length > 0 &&
        userList.map((user) => (
          <p key={user.id} className="text-gray-100 text-body-md">
            {user.name}
          </p>
        ))}

      <div className="mt-6 flex justify-center gap-4">
        <Button variant="primary" onClick={handleFetchUsers}>
          Load users
        </Button>

        <Button variant="secondary" onClick={handleThrowError}>
          Throw error
        </Button>
      </div>
    </div>
  );
};
