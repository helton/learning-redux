import deepFreeze from "deep-freeze";
import { todos } from "./index";

describe('todo reducer', () => {
  it("should add todo successfully without mutate the original object", () => {
    const stateBefore = []
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    }
    const stateAfter = [{
      id: 0,
      text: "Learn Redux",
      completed: false
    }]
    deepFreeze(stateBefore)
    deepFreeze(action)
    const result = todos(stateBefore, action)

    expect(result).toEqual(stateAfter)
    expect(result).not.toBe(stateBefore)
  });

  it("should toggle todo successfully without mutate the original object", () => {
    const stateBefore = [
      {
        id: 0,
        text: "Learn Redux",
        completed: false
      },
      {
        id: 1,
        text: "Go Shopping",
        completed: false
      }
    ]
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    const stateAfter = [
      {
        id: 0,
        text: "Learn Redux",
        completed: false
      },
      {
        id: 1,
        text: "Go Shopping",
        completed: true
      }
    ]
    deepFreeze(stateBefore)
    deepFreeze(action)
    const result = todos(stateBefore, action)

    expect(result).toEqual(stateAfter)
    expect(result).not.toBe(stateBefore)
  });
})