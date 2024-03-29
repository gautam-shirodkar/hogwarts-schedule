import { studentAllocationApi } from "../student.api";

const responseData = [
  {
    id: "s1",
    student: "Harry Potter",
    subject: "Potions Master",
    img: "harry.webp",
    teacher: "t4",
    assignedHistory: [],
  },
  {
    id: "s2",
    student: "Hermione Granger",
    subject: "Potions Master",
    img: "hermione.webp",
    teacher: "",
    assignedHistory: [],
  },
  {
    id: "s3",
    student: "Ron Weasley",
    subject: "Potions Master",
    img: "ron.webp",
    teacher: "t5",
    assignedHistory: [],
  },
  {
    id: "s4",
    student: "Draco Malfoy",
    subject: "Potions Master",
    img: "draco.webp",
    teacher: "t4",
    assignedHistory: [],
  },
  {
    id: "s5",
    student: "Padma Patil",
    subject: "Potions Master",
    img: "padma.jpg",
    teacher: "",
    assignedHistory: [],
  },
  {
    id: "s6",
    student: "Luna Lovegood",
    subject: "Potions Master",
    img: "luna.jpg",
    teacher: "t5",
    assignedHistory: [],
  },
];

describe("Student allocation api", () => {
  it("fetches data from an API and resolves correctly", async () => {
    const result = await studentAllocationApi();
    expect(result).toEqual(responseData);
  });
});
