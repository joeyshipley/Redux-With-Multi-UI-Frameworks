import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { TYPES as LOCAL_TYPES } from '../../../app/localization/localization.actions.js';
import LocalizationInteractor from '../../../app/localization/localization.interactor.js';

var _localizationInteractor = new LocalizationInteractor();

const mapStateToProps = (state) => {
  return {
    text: state.localization
  }
};

const mapDispatchToProps = () => {
  return {
    setLocalEnglish: () => {
      _localizationInteractor.english();
    },
    setLocalDroid: () => {
      _localizationInteractor.droid();
    }
  }
};

const Header = ({ text, setLocalEnglish, setLocalDroid }) => (
  <div id='page-header'>
    <div className='title'>{ text.page_title }</div>
    <ul className='localization-container'>
      <li className={ text.local === LOCAL_TYPES.ENGLISH ? 'selected' : '' }
        onClick={ setLocalEnglish }
        >English</li>
      <li className={ text.local === LOCAL_TYPES.DROID ? 'selected' : '' }
        onClick={ setLocalDroid }
        >Droid</li>
    </ul>
  </div>
);

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer