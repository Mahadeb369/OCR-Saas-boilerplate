import { reducer as localesReducer, INITIAL_STATE as defaultState } from '../locales.reducer';
import * as actions from '../locales.actions';
import { Locale } from '../../../app/config/i18n';

describe('Locales: reducer', () => {
  it('should return initial state', () => {
    expect(localesReducer(undefined, { type: 'unknown-action' })).toEqual(defaultState);
  });

  it('should return state on unknown action', () => {
    expect(localesReducer(defaultState, { type: 'unknown-action' })).toEqual(defaultState);
  });

  describe('setLanguage', () => {
    it('should set data', () => {
      const language = Locale.ENGLISH;
      const expectedState = { ...defaultState, language };
      const action = actions.setLanguage(language);
      expect(localesReducer(defaultState, action)).toEqual(expectedState);
    });

    it('should return correct type', () => {
      expect(actions.setLanguage(Locale.ENGLISH).type).toEqual(actions.setLanguage.toString());
    });

    it('should return proper payload', () => {
      const language = Locale.ENGLISH;
      expect(actions.setLanguage(language).payload).toEqual(language);
    });
  });
});
