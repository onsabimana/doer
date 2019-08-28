import { connect } from 'react-redux';

import actions from 'store/app/actions';
import App from './App';

const mapStateToProps = state => ({
  theme: state.app.theme,
});

const mapDispatchToProps = dispatch => ({
  setTheme: ({ theme }) => dispatch(actions.setTheme({ theme })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
