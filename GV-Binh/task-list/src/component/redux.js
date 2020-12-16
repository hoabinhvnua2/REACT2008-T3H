import { createStore } from 'redux'

const initState = {
    status: false,
    task: {
        name: 'Học react',
        count: 0
    },
    gender: 'nam'
};

const myReducer = (state = initState, action) => {
    // nó nhận vào state và action sau đố nó thực hiện công việc gì đố để
    // update lại state
    switch (action.type) {
        case 'TYPE_UPDATE':
            return {
                ...state,
                status: !state.status
            }
            break;
        case 'CHANGE_TASK':
            return {
                ...state,
                task: {
                    name: 'học angular',
                    count: 1
                }
            }
            break;
        case 'CHANGE_GENDER':
            return {
                ...state,
                gender: 'nữ'
            }
            break;
    
        default:
            break;
    }
    return state

}

const myStore = createStore(myReducer);
// update stauts
const action = {type: 'TYPE_UPDATE'};
myStore.dispatch(action);
// change task
const actionChangeTask = {type: 'CHANGE_TASK'};
myStore.dispatch(actionChangeTask);
// change gender
const changeGender = {type: 'CHANGE_GENDER'};
myStore.dispatch(changeGender);

console.log(myStore.getState());

// bài tập về nhà
    // 1. áp dụng Redux vào project task-lisk
    // 2. Xây dụng giao diện và làm project về giỏ hàng
        // 2.1 Tạo giao diện sản phẩm: hình ảnh sản phẩm, giá, button thêm vào giỏ hàng
        // 2.2 Tạo navbar có icon giỏ hàng và khi click vào mua hàng thì giỏ hàng sẽ hiển thi số lượng sản
        // phẩm có trong giả hàng như thông báo của face
        // 2.3 Khi click vào xem giỏ hàng thì phải show ra danh sách các sản phẩm trong giỏ hàng
    // 3. đọc và tìm hiểu 
        // 3.1 context
        // 3.2 hook
        // 3.3 Router