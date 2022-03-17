import * as TodoActionCreator from './user'
import * as UserActionCreator from './todo'

export default {
    ...TodoActionCreator,
    ...UserActionCreator 

}