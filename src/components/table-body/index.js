import React, { useState } from 'react';
import { connect } from 'react-redux';
import { manipulateDateForMobile, manipulateDate } from '../../utils';
import clipLogo from '../../assets/icon_clip.svg';
import mailLogo from '../../assets/icon_mail_sp.svg';
import arrow from '../../assets/icon_arrow02.svg';
import './table-body.css';

const TableBody = ({ mails, currentHeaderSorted }) => {
  const [visibleRows, setVisibleRows] = useState([]);
  const handleBodyClick = (index) => {
    let newVisibleRow = [...visibleRows];
    if (visibleRows.includes(index)) {
      newVisibleRow = newVisibleRow.filter((element) => element !== index);
    } else {
      newVisibleRow.push(index);
    }
    setVisibleRows(newVisibleRow);
  };
  const generateMailColumns = () => {
    return mails.map((mail, index) => {
      let attachment, toRest;
      if (mail.hasAttachment) {
        attachment = (
          <img
            className="table-body-clip-logo"
            src={clipLogo}
            alt="clip-logo"
          />
        );
      }
      if (mail.to.length > 1) {
        toRest = mail.to.length - 1;
        toRest = '+' + toRest;
      }

      return (
        <div
          key={mail.id}
          className="row table-body-item"
          onClick={() => handleBodyClick(index)}
        >
          <div className={`col-xs-1 table-body-mail-container`}>
            <img className="table-body-mail-logo" src={mailLogo} alt="mail" />
          </div>

          <div
            className={`col-lg-2 col-sm-2 col-xs-8 table-body-subitem table-body-subitem-from ${
              currentHeaderSorted === 'from'
            }`}
          >
            {mail.from}
            {attachment && (
              <span className="table-body-attachment-mobile">{attachment}</span>
            )}
          </div>

          <div
            className={`col-lg-2 col-sm-2 col-xs-2 table-body-subitem table-body-subitem-date-mobile ${
              currentHeaderSorted === 'date'
            }`}
          >
            <p className="table-body-date-mobile">
              {manipulateDateForMobile(mail.date)}
            </p>
            <img className="table-body-arrow-mobile" alt="arrow" src={arrow} />
          </div>

          <div
            className={`col-lg-3 col-sm-3 col-xs-10 table-body-subitem table-body-subitem-to`}
          >
            {`${mail.to[0]}${toRest ? ', ...' : ''}`}
            <span className="table-body-subitem-to-rest">{toRest}</span>
          </div>

          <div
            className={`col-lg-5 col-sm-5 col-xs-11 table-body-subitem table-body-subitem-subject ${
              currentHeaderSorted === 'subject'
            }`}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {mail.subject}
              {attachment && (
                <span className="table-body-attachment">{attachment}</span>
              )}
            </div>
          </div>

          <div
            className={`col-lg-2 col-sm-2 col-xs-10 table-body-subitem table-body-subitem-date ${
              currentHeaderSorted === 'date'
            }`}
          >
            {manipulateDate(mail.date)}
          </div>

          {visibleRows.includes(index) && (
            <div className="table-body-mail-body-container">
              <span>Message:</span>
              {`"${mail.body}"`}
            </div>
          )}
        </div>
      );
    });
  };

  return <div>{generateMailColumns()}</div>;
};

function mapStateToProps(reduxState) {
  return {
    mails: reduxState.mails,
    currentHeaderSorted: reduxState.currentHeaderSorted,
  };
}

export default connect(mapStateToProps)(TableBody);
