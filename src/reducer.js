export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //   remove after finished developing
  // token: NuVtSHixokVluBry9Ge6JmKfeekkbbufoWbQmX86mmh4ZDMXY0zJPfVhlS81Gg3xshPWaLM1g5XYTx-J06aHlF4UTgr8JqBimNPAkn7T86TVpPNfJFpPEZrHHdG2BIWOSOBEUmXV_5QOvreQwPpaHDJexyaxynFNKRf5JqLfF7g",
};

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
