const initalExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  { id: "e3", title: "book", amount: 30.99, date: new Date(2022, 3, 4) },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e5",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function reducerFunction(state = initalExpenses, action) {
  if (action.type === "add") {
    //action would contain the new Expenses to add
    const updatedItems = Object.values(state).map((item) => {
      return { ...item, date: new Date(item.date) };
    });
    const newItems = [...updatedItems, action.data];
    return newItems;
  }
  return state;
}

export default reducerFunction;
