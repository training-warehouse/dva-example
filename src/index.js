import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading'
import {createLogger} from 'redux-logger'

// 1. Initialize
const app = dva({
  onAction: createLogger()
});


// 2. Plugins
// app.use({});
app.use(createLoading())

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/counter').default)
app.model(require('./models/user').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
