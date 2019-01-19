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

const ArrowRight = ({ color, size }) => <FontAwesomeIcon
  icon={['far', 'arrow-alt-circle-right']}
  color={color || "white"}
  className={size || "fa-lg"}
/>;

export {
  ArrowRight as ArrowRightIcon,
  Birthday as BirthdayIcon,
  Calendar as CalendarIcon,
  Location as LocationIcon,
  School as SchoolIcon,
  Work as WorkIcon,
};