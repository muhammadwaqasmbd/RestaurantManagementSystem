import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from './actionTypes';
import { loginSuccess, logoutUserSuccess, apiError } from './actions';

//AUTH related methods
import { authentication } from '../../../helpers/authUtils';

const auth = authentication();

function* loginUser({ payload: { user, history } }) {
    try {
        const response = yield call(auth.loginUser, user.email, user.password);
        yield put(loginSuccess(response));
        localStorage.getItem('access') ?
            history.push('/dashboard')
        :
            history.push('/login')
    } catch (error) {
        yield put(apiError(error));
    }
}

function* logoutUser({ payload: { history } }) {
    try {
        const response = yield call(auth.logout);
        yield put(logoutUserSuccess(response));
        history.push('/login');
    } catch (error) {
        yield put(apiError(error));
    }
}


export function* watchUserLogin() {
    yield takeEvery(LOGIN_USER, loginUser)
}

export function* watchUserLogout() {
    yield takeEvery(LOGOUT_USER, logoutUser)
}

function* authSaga() {
    yield all([
        fork(watchUserLogin),
        fork(watchUserLogout),
    ]);
}

export default authSaga;
