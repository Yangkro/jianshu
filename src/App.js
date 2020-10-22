import React from 'react';
import Header from './components/Header';
// 引入数据仓库
import store from './store/index'
import { Provider } from 'react-redux'
// 引入路由
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './pages/home'
import Detail from './pages/detail' 
function App() {
  return (
    <Provider store={store}>
    <div className="yangkro">
        <Header />
        <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </Router>
    </div>
    </Provider>
  );
}

export default App;
