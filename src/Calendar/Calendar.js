import { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';

const CalendarContainer = styled.div`
  display: inline-flex;
  align-items: flex-end;
  flex-direction: column;
  font-size: 13px;
`;

const CalendarFrame = styled.div`
  border: 1px solid black;
  height: 25em;
  overflow-y: scroll;
  border-radius: 1em;
  display: inline-block;
`;

const DayBg = styled.div`
  background: ${props => props.even ? "#F5F8FA" : "white"};
  width: 2.5em;
  height: 2.5em;
`;

const DayFg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${props => props.first && "1em"};
  border-bottom-right-radius: ${props => props.last && "1em"};
  cursor: default;
  background: ${props => props.even ? "white" : "#F5F8FA"};
`;

const DayRangeBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${ props => props.inRange && "linear-gradient(180deg, rgba(128,181,255,0) 0%, rgba(128,181,255,0) 10%, rgba(128,181,255,0.2) 10%, rgba(128,181,255,0.2) 90%, rgba(128,181,255,0) 90%, rgba(128,181,255,0) 100%)" };
`;

const DayButton = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${ props => props.rangeStart ? "1em .2em .2em 1em" : props.rangeEnd ? ".2em 1em 1em .2em" : "1em" };
  color: #111;
  color: ${ props => props.isToday && "maroon" };
  color: ${ props => props.disabled && "rgba(0,0,0,.2)" };
  color: ${ props => props.selected && "white" };
  font-weight: 500;
  background: ${ props => (props.rangeStart || props.rangeEnd || props.selected) && "blue" };
  border: ${ props => props.isToday && "2px solid maroon" };

  ${({disabled}) => !disabled && `
    &:hover {
      background: darkblue;
      color: white;
      cursor: pointer;
    }
  `}
`;

const DayHeader = styled.div`
  width: 2.5em;
  height: 2.5em;
  font-weight: bold;
  text-align: center;
  line-height: 2.5em;
`;

const Week = styled.div`
  display: flex;
`;

const MonthContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MonthLabel = styled.div`
  background: ${props => props.even ? "white" : "#F5F8FA"};
  flex: 1 0 0;
  line-height: 2.5em;
  text-align: right;
  font-weight: bold;
  padding: 0 .5em;
  white-space: nowrap;
`;

function isLastDayOfMonth(date) {
  let nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate()+1);
  return nextDay.getDate() === 1;
}

function Month({date,children}) {
  let evenMonth = date.getMonth() % 2 === 0;
  let currentYear = new Date();
  currentYear = currentYear.toLocaleString('default', { year: 'numeric' });

  let label = date.toLocaleString('default', { month: 'short' });

  if (date.toLocaleString('default', { year: 'numeric' }) !== currentYear) {
    label += " '" + date.toLocaleString('default', { year: '2-digit' })
  }

  return (
    <MonthContainer>
      <MonthLabel even={evenMonth}>{label}</MonthLabel>
      <div>
        {children}
      </div>
    </MonthContainer>
  )
}

function WeekDay({
  date,
  selected,
  inRange,
  disabled,
  onClick,
  rangeStart,
  rangeEnd,
  isToday
}) {
  const todayRef = useRef();

  useEffect(() => {
    isToday && todayRef.current.scrollIntoView(true);
  },[isToday]);

  const evenMonth = date.getMonth() % 2 === 0;

  return (
    <DayBg even={ evenMonth }>
      <DayFg
        first={ date.getDate() === 1 && date.getDay() !== 0 }
        last={ isLastDayOfMonth(date) }
        even={ evenMonth }
      >
        <DayRangeBar inRange={inRange}>
          <DayButton
            disabled={ disabled }
            selected={ selected }
            rangeStart={ rangeStart }
            rangeEnd={ rangeEnd }
            inRange={ inRange }
            isToday={ isToday }
            onClick={ () => !disabled && onClick && onClick(date) }
            ref={todayRef}
          >
            {date.getDate()}
          </DayButton>
        </DayRangeBar>
      </DayFg>
    </DayBg>
  )
}

function renderWeek({
  startOfWeekDate,
  fromDateMs,
  toDateMs,
  onClick,
  selectedDates
}) {
  let days = [];
  let todayMs = new Date();
  todayMs.setHours(0,0,0,0);
  todayMs = todayMs.getTime();


  for (let i = 0; i < 7; i++) {
    let date = new Date(startOfWeekDate);
    date.setDate(startOfWeekDate.getDate() + i);
    let isToday = date.getTime() === todayMs;
    let disabled = date.getTime() < fromDateMs || date.getTime() > toDateMs;
    let selected = date.getTime() === selectedDates[0] || date.getTime() === selectedDates[1];
    let rangeStart = date.getTime() === selectedDates[0] && selectedDates[1];
    let rangeEnd = date.getTime() === selectedDates[1];
    let inRange = date.getTime() > selectedDates[0] && date.getTime() < selectedDates[1];
    days.push(<WeekDay onClick={onClick} disabled={disabled} isToday={isToday} selected={selected} rangeStart={rangeStart} rangeEnd={rangeEnd} inRange={inRange} date={date} key={date.getTime()}/>);
  }

  return (
    <Week key={startOfWeekDate.getTime()}>
      {days}
    </Week>
  )
}

function renderCalendar({
  fromDate,
  toDate,
  onClick,
  selectedDates
}) {
  let dayOfWeek = fromDate.getDay();
  let startOfFirstWeekDate = new Date(fromDate);
  startOfFirstWeekDate.setDate(fromDate.getDate() - dayOfWeek);
  startOfFirstWeekDate.setHours(0,0,0,0);

  let fromDateMs = fromDate.getTime();
  let toDateMs = toDate.getTime();
  let months = [];
  let weeks = [];
  let prevDate = new Date(startOfFirstWeekDate);
  let currentDate = new Date(startOfFirstWeekDate);

  while (currentDate.getTime() < toDateMs) {          // Add weeks to months until toDate is reached
    if (currentDate.getDate() < prevDate.getDate()) { // We've reached a new month
      months.push({weeks,date: prevDate});            // Push a new month's weeks
      weeks = [];                                     // Reset the weeks bucket
    }

    weeks.push(renderWeek({
      startOfWeekDate: currentDate,
      fromDateMs,
      toDateMs,
      selectedDates,
      onClick
    }));

    prevDate = new Date(currentDate);               // Set new prevDate
    currentDate.setDate(currentDate.getDate() + 7); // Advance currentDate by a week (7 days)
    currentDate.setHours(0,0,0,0);
  }
  
  months.push({weeks,date: prevDate});              // Add the last month's weeks

  return (
    months.map(({weeks,date}) => {
      return (
        <Month date={date} key={date.getTime()}>
          {weeks}
        </Month>
      )
    })
  )
}

export default function Calendar({fromDate,toDate,rangeFrom,rangeTo,onClick}) {
  
  return (
    <CalendarContainer>
      <Week>
        <DayHeader>Su</DayHeader>
        <DayHeader>Mo</DayHeader>
        <DayHeader>Tu</DayHeader>
        <DayHeader>We</DayHeader>
        <DayHeader>Th</DayHeader>
        <DayHeader>Fr</DayHeader>
        <DayHeader>Sa</DayHeader>
      </Week>
      <CalendarFrame>
        { renderCalendar({ fromDate, toDate, selectedDates: [rangeFrom?.getTime(),rangeTo?.getTime()].sort(), onClick: (date) => onClick(date) }) }
      </CalendarFrame>
    </CalendarContainer>
  );
}