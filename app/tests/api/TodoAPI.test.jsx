const expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should render', () => {
    expect(TodoAPI).toExist();
  })

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 12,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should set valid todos array', () => {
      var notArr = {
        a: 'b'
      };
      TodoAPI.setTodos(notArr);

      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getTodos', () => {
    it('should return empty array for bad data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return valid array', () => {
      var todos = [{
        id: 12,
        text: 'test all files',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'text',
        completed: true
      },
      {
        id: 2,
        text: 'some text 2',
        completed: false
      },
      {
        id: 3,
        text: 'some text 3',
        completed: true
      }
    ];
    it('should return all items if showCompletedis true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return only completed items if showCompletedis false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should return sorted todos by completion', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

  });

})
