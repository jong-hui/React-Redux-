import * as todolistAction from './todolistAction.js';
import * as otherAction from './otherAction.js';

const ActionCreators = {...todolistAction, ...otherAction};


export default ActionCreators;