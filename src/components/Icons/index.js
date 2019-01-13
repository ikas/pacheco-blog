import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Work = ({ color, size }) => <FontAwesomeIcon
  icon={['fas', 'briefcase']}
  color={color || 'white'}
  className={size || "fa-lg"}
/>;

const Location = ({ color, size }) => <FontAwesomeIcon
  icon={['fas', 'location-arrow']}
  color={color || "white"}
  className={size || "fa-lg"}
/>;

const Calendar = ({ color, size }) => <FontAwesomeIcon
  icon={['fas', 'calendar']}
  color={color || "white"}
  className={size || "fa-lg"}
/>;

const Birthday = ({ color, size }) => <FontAwesomeIcon
  icon={['fas', 'birthday-cake']}
  color={color || "white"}
  className={size || "fa-lg"}
/>;

const School = ({ color, size }) => <FontAwesomeIcon
  icon={['fas', 'graduation-cap']}
  color={color || "white"}
  className={size || "fa-lg"}
/>;

export {
  Work as WorkIcon,
  Location as LocationIcon,
  Calendar as CalendarIcon,
  Birthday as BirthdayIcon,
  School as SchoolIcon,
};