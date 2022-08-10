let initialState = {
  friends: [
    {
      id: 1,
      name: "Masha",
      src:
        "https://i.pinimg.com/564x/69/f7/50/69f7503539aa89c9c116e9ae1b240b57.jpg",
    },
    {
      id: 2,
      name: "Kytsya",
      src:
        "https://i.pinimg.com/564x/10/5e/af/105eaf02df542edc165dca355862c08b.jpg",
    },
    {
      id: 3,
      name: "Mura",
      src:
        "https://i.pinimg.com/564x/a7/8c/b8/a78cb811d0a73b880364de2886ad41c6.jpg",
    }
  ]
};
const sidebarReducer = (state = initialState, action) => {
  return state;
};
export default sidebarReducer;
