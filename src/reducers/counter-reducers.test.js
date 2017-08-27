import deepFreeze from "deep-freeze";
import {
  counter,
  addCounter,
  removeCounter,
  incrementCounter,
  toggleTodo
} from "./counter-reducers";

describe("actions", () => {
  it("should increment successfully", () => {
    expect(counter(0, { type: "INCREMENT" })).toEqual(1);

    expect(counter(1, { type: "INCREMENT" })).toEqual(2);
  });

  it("should decrement successfully", () => {
    expect(counter(2, { type: "DECREMENT" })).toEqual(1);

    expect(counter(1, { type: "DECREMENT" })).toEqual(0);
  });

  it("should return the current state if the action is unknown", () => {
    expect(counter(1, { type: "SOMETHING_ELSE" })).toEqual(1);
  });

  it("should return the initial state if the state passed is undefined", () => {
    expect(counter(undefined, {})).toEqual(0);
  });
});

describe("addCounter()", () => {
  it("should add successfully", () => {
    const listBefore = [];
    const listAfter = [0];
    const result = addCounter(listBefore);

    expect(result).toEqual(listAfter);
  });

  it("should add successfully without mutate the original list", () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);
    const result = addCounter(listBefore);

    expect(result).toEqual(listAfter);
    expect(result).not.toBe(listBefore);
  });
});

describe("removeCounter()", () => {
  it("should remove successfully", () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];
    const result = removeCounter(listBefore, 1);

    expect(result).toEqual(listAfter);
  });

  it("should remove successfully without mutate the original list", () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore);
    const result = removeCounter(listBefore, 1);

    expect(result).toEqual(listAfter);
    expect(result).not.toBe(listBefore);
  });
});

describe("incrementCounter()", () => {
  it("should increment successfully", () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];
    const result = incrementCounter(listBefore, 1);

    expect(result).toEqual(listAfter);
  });

  it("should increment successfully without mutate the original list", () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore);
    const result = incrementCounter(listBefore, 1);

    expect(result).toEqual(listAfter);
    expect(result).not.toBe(listBefore);
  });
});

describe("toggle todos", () => {
  it("should toggle todo successfully", () => {
    const todoBefore = {
      id: 0,
      text: "Learn Redux",
      completed: false
    };
    const todoAfter = {
      id: 0,
      text: "Learn Redux",
      completed: true
    };
    const result = toggleTodo(todoBefore);

    expect(result).toEqual(todoAfter);
  });

  it("should toggle todo successfully without mutate the original object", () => {
    const todoBefore = {
      id: 0,
      text: "Learn Redux",
      completed: false
    };
    const todoAfter = {
      id: 0,
      text: "Learn Redux",
      completed: true
    };
    deepFreeze(todoBefore);
    const result = toggleTodo(todoBefore);

    expect(result).toEqual(todoAfter);
    expect(result).not.toBe(todoBefore);
  });

});