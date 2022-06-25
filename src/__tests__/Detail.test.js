import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { screen } from '@testing-library/react';
import store from '../Redux/configureStore';
import Detail from '../Components/Detail/Detail';

test('Details should render correctly', () => {
  const body = document.createElement('tbody');
  const state = {
    capital: 'Nairobi',
  };
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail state={state} />
      </BrowserRouter>
    </Provider>,
    body,
  );
  expect(screen).toMatchSnapshot();
});
