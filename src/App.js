import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import Calendar from './Calendar/Calendar';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Demo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Settings = styled.div`
  flex: 1;
  display: flex;
  background: darkslategray;
  color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function App() {
  const today = new Date();
  today.setHours(0,0,0,0);
  let todayStr = today.toLocaleDateString('en-CA');

  const [ fromDateStr, setFromDateStr ] = useState("2021-01-01");
  const [ fromDate, setFromDate ] = useState(new Date(fromDateStr));

  const [ toDateStr, setToDateStr ] = useState(todayStr);
  const [ toDate, setToDate ] = useState(new Date(toDateStr));

  const [ rangeFrom, setRangeFrom ] = useState();
  const [ rangeTo, setRangeTo ] = useState();

  const [ preset, setPreset ] = useState(false);
  const [ inclToday, setInclToday ] = useState(false);

  function handleDateClick(date) {
    setPreset(false);
    if (!rangeFrom || (rangeFrom && rangeTo)) {
      setRangeFrom(date);
      setRangeTo(null);
    } else {
      if (date.toLocaleDateString('en-CA') > rangeFrom.toLocaleDateString('en-CA')) {
        setRangeTo(date);
      } else if (date.toLocaleDateString('en-CA') < rangeFrom.toLocaleDateString('en-CA')) {
        setRangeTo(new Date(rangeFrom));
        setRangeFrom(date)
      }
    }
  }

  useEffect(() => {
    if (preset > 0) {
      const today = new Date();
      today.setHours(0,0,0,0);

      console.log("HMMM...");
      const from = new Date();
      from.setHours(0,0,0,0);
      from.setDate(today.getDate() - preset);
      setRangeFrom(from);

      const to = new Date(today);
      to.setDate(to.getDate() - (inclToday ? 0 : 1));
      setRangeTo(to);
    }
  },[inclToday,preset])

  function clearSelection() {
    setRangeFrom(null);
    setRangeTo(null);
  }

  useEffect(() => {
    let date = new Date(fromDateStr);
    setFromDate(date);
  },[fromDateStr])

  useEffect(() => {
    let date = new Date(toDateStr);
    setToDate(date);
  },[toDateStr])
  
  return (
    <Container>
      <Settings>
        <h1>React Scrolling Calendar</h1>
        <h3>Calendar range</h3>
        <input type="date" value={fromDateStr} onChange={(e) => setFromDateStr(e.target.value)}/>
        <input type="date" value={toDateStr} onChange={(e) => setToDateStr(e.target.value)}/>
        <p>(Too long a range will kill the page... Should probably implement some lazy rendering...)</p>
        <h3>Presets</h3>
        <label>
          <input type="checkbox" checked={inclToday} onChange={() => setInclToday(!inclToday)}/>
          Include today
        </label>
        <button onClick={ () => setPreset(7) }>Past 7 days</button>
        <button onClick={ () => setPreset(30) }>Past 30 days</button>
        <button onClick={ () => setPreset(90) }>Past 90 days</button>
        <button onClick={ () => setPreset(180) }>Past 180 days</button>
        <button onClick={ () => setPreset(365) }>Past 365 days</button>
        <hr/>
        <button onClick={ () => clearSelection() }>Clear selection</button>
      </Settings>
      <Demo>
        <Calendar fromDate={fromDate} toDate={toDate} rangeFrom={rangeFrom} rangeTo={rangeTo} onClick={ (date) => handleDateClick(date) } />
      </Demo>
    </Container>
  );
}