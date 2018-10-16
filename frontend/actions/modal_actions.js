export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (payload) => {
  // debugger
  return {
    type: OPEN_MODAL,
    payload
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
