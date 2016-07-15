export const SELECT_MENU_ITEM = 'SELECT_MENU_ITEM';

export function selectMenuItem (item) {
  return {
    type: SELECT_MENU_ITEM,
    item
  };
}
