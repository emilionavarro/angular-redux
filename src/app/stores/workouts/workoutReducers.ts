import {List} from 'immutable';
import {Workout} from '../../Workout';
import {ADD_WORKOUT, LOAD_WORKOUTS} from './workoutActions';

function workouts(state: List<Workout>, action) {
    switch(action.type) {
        case ADD_WORKOUT:
            return state.push(action.newWorkout);
        case LOAD_WORKOUTS: 
            return List(action.workouts);
        default:
            return state;
    }
}