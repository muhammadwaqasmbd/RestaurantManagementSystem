import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

//Account Redux states
import { REGISTER_USER } from './actionTypes';
import { registerUserSuccessful, registerUserFailed } from './actions';

//AUTH related methods
import { authentication } from '../../../helpers/authUtils';

const auth = authentication();

// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } }) {
    try {
        const response = yield call(auth.registerUser, user.company, user.website, user.email, user.username, user.password);
        yield put(registerUserSuccessful(response));
    } catch (error) {
        yield put(registerUserFailed(error));
    }
}

export function* watchUserRegister() {
    yield takeEvery(REGISTER_USER, registerUser);
}

function* accountSaga() {
    yield all([fork(watchUserRegister)]);
}

export default accountSaga;
