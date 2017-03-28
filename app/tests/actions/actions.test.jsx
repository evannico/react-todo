import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase';
const actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123',
        text: 'anything',
        completed: false,
        createdAt: 123
      }
    }
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should generate add todos action', () => {
    var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000}]
    var action = {
      type: 'ADD_TODOS',
      todos: todos
    }
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should toggle show completed', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.toggleCompleted();

    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 2,
      updates: {completed: false}
    }
    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  it('should generate login action object', () => {
    const action = {
      type: 'LOGIN',
      uid: '123abc'
    };
    const res = actions.login(action.uid);
    expect(res).toEqual(action);
  });

  it('should generate logout action object', () => {
    const action = {
      type: 'LOGOUT',
    };
    const res = actions.logout();
    expect(res).toEqual(action);
  });
});
