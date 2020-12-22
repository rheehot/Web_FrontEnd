import { all, fork, takeLatest } from "redux-saga/effects";
import { reviewWriteSubmit } from "redux/review";
import axios from "axios";

// 글쓰기 업로드 서버에 요청

function writePost({ data }) {
    return axios.post("url", data);
}

// 글쓰기 업데이트 상황 지켜보는 것.
function* writeSubmit() {
    yield takeLatest(reviewWriteSubmit, () => console.log("saga"));
}

export default function* reviewSaga(): Generator {
    yield all([fork(writeSubmit)]);
}
