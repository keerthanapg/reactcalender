import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "./styles.css";
import "./custom.scss";
import { getDate } from "date-fns";

export default function MyComponent() {
  const [date, setDate] = useState(new Date());
  const handleChange = date => setDate(date);

  const CustomInput = ({ value, onClick }) => (
    <button onClick={onClick}>{value}</button>
  );

  const getDayClassName = date => (getDate(date) <= 5 ? "highlight" : "");

  return (
    <DatePicker
      selected={date}
      onChange={handleChange}
      customInput={<CustomInput />}
      dayClassName={getDayClassName}
    />
  );
}
