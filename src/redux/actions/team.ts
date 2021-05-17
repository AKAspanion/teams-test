import { ADD_TEAM_MEMBER, EDIT_TEAM_MEMBER } from '../types';

export const addTeamMember = (user: TeamMember | FormType): ReduxAction => ({
  type: ADD_TEAM_MEMBER,
  payload: user,
});

export const editTeamMember = (
  id: string,
  user: TeamMember | FormType,
): ReduxAction => ({
  type: EDIT_TEAM_MEMBER,
  payload: { id, user },
});
