import { IAssignee } from '@/common/interfaces/team';

export const selectedUsers = (allUsers: IAssignee[], boardUsers: IAssignee[]): IAssignee[] => {
  return allUsers.filter((user) => {
    if (boardUsers.findIndex((boardUser) => boardUser.id === user.id) == -1) {
      return user;
    }
  });
};
