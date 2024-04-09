import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2ejVpp15aTg3KkdrJFB730hzhQ2",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};