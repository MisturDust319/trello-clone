import React from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';

import List from './List';
import AddActionButton from './AddActionButton';

const App = (props) => {
  const { lists } = props;
  return (
    <div className="App">
      <h4>Test</h4>
      <div style={styles.listContainer}>
        { lists.map(list => <List key={ list.id } listID={ list.id } title={ list.title} cards={list.cards} />) }
      <AddActionButton list/>
      </div>
    </div>
  );
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 8
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
