import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-util";
import AttendanceSection from "../AttendanceSection";
import { useSelector } from "react-redux";
import { MOCK_TEACHERS } from "../../utils/mockData";

const mockAttendanceChange = vi.fn();

const mocks = vi.hoisted(() => {
  return {
    mockSelector: vi.fn(),
  };
});

vi.mock("react-redux", async (importOriginal) => {
  const mod: Object = await importOriginal();
  return {
    ...mod,
    useSelector: mocks.mockSelector,
  };
});

describe("Teachers Attendance", () => {
  test("it should display loader when teachers are not fetched", () => {
    vi.mocked(useSelector).mockReturnValue({
      teachers: undefined,
    });
    const { container } = renderWithProviders(
      <MemoryRouter>
        <AttendanceSection onTeacherAttendanceChange={mockAttendanceChange} />
      </MemoryRouter>
    );

    const contentElement = container.querySelector(".animate-spin");
    expect(contentElement).toBeInTheDocument();
  });

  test("it should render teachers with their attendance", () => {
    vi.mocked(useSelector).mockReturnValue({
      teachers: MOCK_TEACHERS,
    });
    renderWithProviders(
      <MemoryRouter>
        <AttendanceSection onTeacherAttendanceChange={mockAttendanceChange} />
      </MemoryRouter>
    );
    expect(screen.getByText("Professor Dumbledore")).toBeInTheDocument();
  });
});
