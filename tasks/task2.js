//Create a function rateLimiter(fn, limit) that returns a new function.
// The returned function allows calling fn only once within a limit time in milliseconds.
// If it is called again before the limit is reached, it should return "Rate limit exceeded".

function rateLimiter(fn, limit) {
  let lastCalled = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCalled < limit) {
      return "rate limit exceeded";
    }
  };
}
