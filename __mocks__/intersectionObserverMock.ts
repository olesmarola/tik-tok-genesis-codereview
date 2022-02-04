/* eslint-disable @typescript-eslint/no-unsafe-member-access, eslint-comments/disable-enable-pair */
// @ts-ignore
const observe = jest.fn();
const disconnect = jest.fn();
const unobserve = jest.fn();

// @ts-ignore
window.IntersectionObserver = jest.fn(function () {
  // @ts-ignore
  this.observe = observe;
  // @ts-ignore
  this.unobserve = unobserve;
  // @ts-ignore
  this.disconnect = disconnect;
});
