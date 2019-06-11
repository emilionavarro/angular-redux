import { Injectable } from '@angular/core';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger({
    stateTransformer: (state) => {
        return {
            workouts: state.workouts.toJS(),
            uiState: state.uiState
        }
    }
})

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
