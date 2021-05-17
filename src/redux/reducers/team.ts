import { ADD_TEAM_MEMBER, EDIT_TEAM_MEMBER } from '../types';

const intialState: any = { members: [] };

export const teamReducer = (state = intialState, action: ReduxAction) => {
  switch (action.type) {
    case ADD_TEAM_MEMBER:
      return { ...state, members: [...state.members, action.payload] };
    case EDIT_TEAM_MEMBER:
      const { id, user } = action.payload;
      const objIndex = state.members.findIndex((m: TeamMember) => m.id === id);

      const oldObj = state.members[objIndex];
      state.members[objIndex] = { ...oldObj, ...user };

      return { ...state, members: [...state.members] };
    default:
      return state;
  }
};
