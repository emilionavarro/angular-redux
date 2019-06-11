import {List, Record} from 'immutable';

const WorkoutRecord = Record({
    id: 0,
    description: '',
    completed: false
})

export class Workout extends WorkoutRecord {
    id: number;
    description: string;
    completed: boolean;

    constructor(props) {
        super(props);
    }
}