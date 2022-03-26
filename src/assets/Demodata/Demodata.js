import chatRepo from "../../services/chatRepo";
export const buttons = [
  {
    id: "1",
    title: "customer1",
    header: { ...chatRepo.headers1 },
    language: "En",
  },
  {
    id: "2",
    title: "customer2",
    header: { ...chatRepo.headers2 },
    language: "En",
  },
  {
    id: "3",
    title: "customer3",
    header: { ...chatRepo.headers3 },
    language: "Ar",
  },
];
