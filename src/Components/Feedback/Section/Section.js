import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
