import { SELECT_MENU_ITEM } from '../actions/menu';

export default function menu (state = {selectedItem: 'Playlists'}, action) {
  switch (action.type) {
    case SELECT_MENU_ITEM:
      return {
        ...state,
        selectedItem: action.item
      };
    default:
      return state;
  }
}
