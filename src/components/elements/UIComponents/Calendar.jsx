import getDayClass from "@/utils/getDayClass";
import getMonthDayMartix from "@/utils/getMonthDayMatrix";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import useThemeContext from "@/hooks/useThemeContext";

const Calendar = ({ className = "", onChange }) => {
  const { rtl } = useThemeContext();
  let weeks = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysMatrix, setDaysMatrix] = useState(getMonthDayMartix(currentDate));
  const [daySelected, setDaySelected] = useState(currentDate);
  const [monthNumber, setMonthNumber] = useState(currentDate.getMonth());

  function jumpNextMonth() {
    let updatedCurrentDate = new Date(currentDate);
    updatedCurrentDate.setMonth(updatedCurrentDate.getMonth() + 1);
    setCurrentDate(updatedCurrentDate);
  }

  function jumpPrevMonth() {
    let updatedCurrentDate = new Date(currentDate);
    updatedCurrentDate.setMonth(updatedCurrentDate.getMonth() - 1);
    setCurrentDate(updatedCurrentDate);
  }

  useEffect(() => {
    let updatedCurrentDate = new Date(currentDate);
    updatedCurrentDate.setMonth(monthNumber);
    setCurrentDate(updatedCurrentDate);
  }, [monthNumber]);

  let value = "";

  useEffect(() => {
    if (value) {
      // let index = dayjs(new Date(value))
      // setDaySelected(index)
      // setCurrentDate(index.month())
    }
  }, [value]);

  useEffect(() => {
    setDaysMatrix(getMonthDayMartix(currentDate));
  }, [currentDate]);

  function handleSelectDate(day) {
    let d = day.toDate();
    onChange && onChange(d);
    setDaySelected(day);
  }

  // useEffect(() => {
  //     handleSelectDate(currentDate)
  // }, [])

  const monthList = [
    { title: "January", value: 0 },
    { title: "February", value: 1 },
    { title: "March", value: 2 },
    { title: "April", value: 3 },
    { title: "May", value: 4 },
    { title: "June", value: 5 },
    { title: "July", value: 6 },
    { title: "August", value: 7 },
    { title: "September", value: 8 },
    { title: "October", value: 9 },
    { title: "November", value: 10 },
    { title: "December", value: 11 },
  ];

  return (
    <div className="col-lg-6">
      <div className="section-title">
        <h3 className="subtitle">CALENDAR</h3>
      </div>
      <div className="calendar-wrapp">
        <div className="calendar-header">
          <div className="today-date">
            Today{" "}
            <span id="date">
              {dayjs(new Date(new Date())).format("DD MMMM YYYY")}
            </span>
          </div>
          <div>
            <select
              name="month"
              id="month"
              className={`month-select ${rtl ? "month-select-rtl" : ""}`}
              value={monthNumber}
              onChange={(e) => setMonthNumber(e.target.value)}
            >
              {monthList?.map((month, i) => (
                <option key={i} id={month?.value} value={month?.value}>
                  {month?.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* <div className="calendar-block"></div> */}

        <div className={`${className} small-calendar`}>
          <div className="calendar-list">
            <div className="days-name">
              {weeks.map((week) => (
                <div className="date" key={week}>
                  <span className="date-cell">{week}</span>
                </div>
              ))}
            </div>

            {/*** month view *****/}

            <div className="days-list">
              {daysMatrix.map((row) =>
                row.map((day) => (
                  <div
                    key={day.date()}
                    onClick={() => handleSelectDate(day)}
                    className={`date py-1 ${getDayClass(day, daySelected)} `}
                  >
                    <span className="date-cell">{day.format("D")}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
