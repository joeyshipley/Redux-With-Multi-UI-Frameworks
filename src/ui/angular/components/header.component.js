import { Component, View, Input } from 'angular2/core';
import { default as ComponentTemplate } from './header.template.html'
import store from '../../../app/app.store.js';
import { TYPES as LOCAL_TYPES } from '../../../app/localization/localization.actions.js';
import LocalizationInteractor from '../../../app/localization/localization.interactor.js';

var _localizationInteractor = new LocalizationInteractor();
var _storeUnsubscribe = () => {};

@Component({
  selector: 'header-component',
  template: ComponentTemplate
})

export class HeaderComponent {
  constructor() {
    _storeUnsubscribe = store.subscribe(() =>
      this.refresh(this.state())
    );
    this.refresh(this.state());
  }

  state() {
    return store.getState();
  }

  refresh(state) {
    this.LOCAL_TYPES = LOCAL_TYPES;
    this.message = 'Hello World!';
    this.text = state.localization;
  }

  setLocalEnglish() {
    _localizationInteractor.english();
  }

  setLocalDroid() {
    _localizationInteractor.droid();
  }
}
