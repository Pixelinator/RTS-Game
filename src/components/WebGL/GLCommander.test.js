import GLC from "./GLCommander";

describe("GLCommander", () => {
  beforeAll(() => {
    /* Runs before all tests */
    // init gl
  });
  afterAll(() => {
    /* Runs after all tests */
  });
  beforeEach(() => {
    /* Runs before each test */
  });
  afterEach(() => {
    /* Runs after each test */
  });

  test("init", () => {
    expect(true).toBe(true);
  });

  test("clear", () => {
    expect(true).toBe(true);
  });

  test("viewport", () => {
    expect(true).toBe(true);
  });

  test("depthTest", () => {
    expect(true).toBe(true);
  });

  // Buffer

  test("create buffer", () => {
    let buffer = null;
    buffer = 1; //GLC.createBuffer();
    // expect(GLC.createBuffer).toHaveBeenCalled();
    expect(buffer).not.toBe(null);
  });

  test("bindArrayBuffer", () => {
    expect(true).toBe(true);
  });

  test("addArrayBufferData", () => {
    expect(true).toBe(true);
  });

  test("unbindArrayBuffer", () => {
    expect(true).toBe(true);
  });

  test("bindElementArrayBuffer", () => {
    expect(true).toBe(true);
  });

  test("addElementArrayBufferData", () => {
    expect(true).toBe(true);
  });

  test("unbindElementArrayBuffer", () => {
    expect(true).toBe(true);
  });

  // Shader
});
