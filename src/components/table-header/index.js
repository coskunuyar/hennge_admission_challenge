import React from 'react';
import { connect } from 'react-redux';
import { sortAccordingTo } from '../../redux/mails/actionCreators';
import arrow from '../../assets/icon_arrow01.svg';
import './table-header.css';

const TableHeader = (props) => {
  const headerTypes = ['from', 'to', 'subject', 'date'];
  const headerProperties = {
    from: {
      responsive: 2,
      hasI: true,
    },
    to: {
      responsive: 3,
      hasI: true,
    },
    subject: {
      responsive: 5,
      hasI: true,
    },
    date: {
      responsive: 2,
      hasI: false,
    },
  };
  const headerTitleGenerator = () => {
    return headerTypes.map((header, index) => {
      const isSelectedHeader = props.currentHeaderSorted === header;
      return (
        <div
          key={Math.floor(Math.random() * 10 ** 10).toString()}
          onClick={() => props.sortAccordingTo(header)}
          className={`col-lg-${headerProperties[header].responsive} 
                      col-md-${headerProperties[header].responsive} 
                      col-sm-${headerProperties[header].responsive}
                      col-xs-2 table-header-item 
                      ${isSelectedHeader && 'table-header-sorted'}`}
        >
          <div className="table-header-item-container">
            {header.charAt(0).toUpperCase() + header.slice(1)}
            {isSelectedHeader && (
              <img src={arrow} className={props.way} alt="arrow" />
            )}
            {headerProperties[header].hasI && (
              <span className="table-header-item-mobile-seperator">|</span>
            )}
          </div>
        </div>
      );
    });
  };

  return <div className="row table-header">{headerTitleGenerator()}</div>;
};

function mapStateToProps(reduxState) {
  return {
    mails: reduxState.mails,
    currentHeaderSorted: reduxState.currentHeaderSorted,
    way: reduxState.way,
  };
}

function mapDispatchToProps() {
  return {
    sortAccordingTo,
  };
}

export default connect(mapStateToProps, mapDispatchToProps())(TableHeader);
