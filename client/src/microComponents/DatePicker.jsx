import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const today = new Date();
export function DatePickerWrapper() {
  const [startDate, setStartDate] = useState(today);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeInputLabel="Time:"
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeInput
    />
  );
}
