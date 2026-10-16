import "@testing-library/jest-dom";

// jsdom doesn't implement scrollIntoView (used by the typing cursor)
window.HTMLElement.prototype.scrollIntoView = function () {};
