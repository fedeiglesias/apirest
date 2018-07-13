import express from 'express';
import path from 'path';
import logger from 'morgan';
import routes from './routes';
import session from 'express-session';
import helmet from 'helmet';

const app = express();

//Middlewares
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  name: 'sessionId'
}))

app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));

app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res) => {
  res.status(err.status || 500).send('Error: ' + err.message);
});

export default app;
