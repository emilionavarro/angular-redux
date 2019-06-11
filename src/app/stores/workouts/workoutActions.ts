import {List} from 'immutable';
import {Workout} from '../../Workout';

export const LOAD_WORKOUTS = "LOAD_WORKOUTS";
export const ADD_WORKOUT = "ADD_WORKOUT";
export const TOGGLE_WORKOUT = "TOGGLE_WORKOUT";
export const DELETE_WORKOUT = "DELETE_WORKOUT";
export const BACKEND_ACTION_STARTED="BACKEND_ACTION_STARTED";
export const BACKEND_ACTION_FINISHED="BACKEND_ACTION_FINISHED";


export function loadWorkouts(todos: List<Workout>) {
    return {
        type: LOAD_WORKOUTS,
        todos: todos
    }
}

export function addWorkout(newWorkout: Workout) {
    return {
        type: ADD_WORKOUT,
        newWorkout
    }
}

export function toggleWorkout(todo: Workout) {
    return {
        type: TOGGLE_WORKOUT,
        todo
    }
}

export function deleteWorkout(todo: Workout) {
    return {
        type: DELETE_WORKOUT,
        todo
    }
}

export function startBackendAction(message: string) {
    return {
        type: BACKEND_ACTION_STARTED,
        message
    }
}

export function endBackendAction(message:string = '') {
    return {
        type: BACKEND_ACTION_FINISHED
    }
}