import React from 'react';
import RangePicker from 'react-range-picker';
import { connect } from 'react-redux';
import { filterMails } from '../../redux/mails/actionCreators';
import calenderLogo from '../../assets/icon_calender.svg';
import searchLogo from '../../assets/icon_search.svg';
import './date-picker.css';

const PickerWithCustomePlaceholder = (props) => {
  const placeholder = ({ startDate, endDate }) => {
    let _startDate = '2020/1/1';
    let _endDate = '2020/1/1';

    if (startDate) {
      _startDate = `${startDate.getFullYear()}/${
        startDate.getMonth() + 1
      }/${startDate.getDate()}`;
    }

    if (endDate) {
      _endDate = `${endDate.getFullYear()}/${
        endDate.getMonth() + 1
      }/${endDate.getDate()}`;
    }

    return (
      <div style={{ display: 'flex' }}>
        <div className="date-picker-container">
          <img className="date-picker-logo" src={calenderLogo} alt="calender" />
          <p className="date-picker-selected-date">{`${_startDate} - ${_endDate}`}</p>
        </div>
        <div className="date-picker-search">
          <img
            className="date-picker-search-logo"
            src={searchLogo}
            alt="search"
          />
        </div>
      </div>
    );
  };
  return (
    <div className="row">
      <RangePicker
        onDateSelected={(start, end) => {
          start && end && props.filterMails(start, end);
        }}
        defaultValue={{
          startDate: new Date(2020, 0, 1),
          endDate: new Date(2020, 0, 30),
        }}
        placeholder={placeholder}
        footer={() => ''}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps() {
  return {
    filterMails,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(PickerWithCustomePlaceholder);
