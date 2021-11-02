import React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import './ToDoList.module.css';


// Счетчик
// const App2 = () => {
//     const [num, setNum] = useState(5)

//     function counterPlusOne(num: number) {
//         num++;
//         setNum(num);
//     }
//     return (
//         <div>
//             <Counter num={num} counterPlusOne={counterPlusOne} />
//         </div>
//     );
// }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
