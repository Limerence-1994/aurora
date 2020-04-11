/// <reference lib="webworker" />

const test: (...args: string[]) => void = (f, l) => {
  console.log(f, l)
};

const method = {test};

addEventListener('message', ({data}) => {
  const response = method[data.methodName](...data.args);
  postMessage(response);
});

