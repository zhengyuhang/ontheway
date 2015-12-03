import alt from '../alt';

class FooterActions {
    constructor() {
        this.generateActions(
            'getTopCharactersSuccess',
            'getTopCharactersFail',
          'getTopCharactersSuccess',
              'getTopCharactersFail'
        );
    }

    getTopCharacters() {
        $.ajax({ url: '/api/characters/top' })
            .done((data) => {
                this.actions.getTopCharactersSuccess(data)
            })
            .fail((jqXhr) => {
                this.actions.getTopCharactersFail(jqXhr)
            });
    }

    getTopCharactersSuccess(payload) {
        this.dispatch(payload);
    }

    getTopCharactersFail(payload) {
        this.dispatch(payload);
    }
}

export default alt.createActions(FooterActions);/**
 * Created by real on 2015-11-26.
 */
