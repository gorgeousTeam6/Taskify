import { SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import { getMonth, getYear } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { LeftArrow, RightArrow } from '@/assets/icongroup';
import styles from './calendar.module.scss';

interface Props {
  selectedDate: Date | null;
  setSelectedDate: any;
}

const YEARS = Array.from(
  { length: getYear(new Date()) + 1 - 2000 },
  (_, i) => getYear(new Date()) - i,
);
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Calendar = ({ selectedDate, setSelectedDate }: Props) => {
  return (
    <div className={styles['date-picker-wrapper']}>
      <DatePicker
        dateFormat='yyyy.MM.dd.HH.'
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        renderCustomHeader={({
          date,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={styles['custom-header-container']}>
            <div>
              <span className={styles['month']}>{MONTHS[getMonth(date)]}</span>
              <select
                value={getYear(date)}
                className={styles['year']}
                onChange={({ target: { value } }) => changeYear(+value)}
              >
                {YEARS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                type='button'
                onClick={decreaseMonth}
                className={styles['month-button']}
                disabled={prevMonthButtonDisabled}
              >
                <LeftArrow fill='#000' />
              </button>
              <button
                type='button'
                onClick={increaseMonth}
                className={styles['month-button']}
                disabled={nextMonthButtonDisabled}
              >
                <RightArrow fill='#000' />
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Calendar;
