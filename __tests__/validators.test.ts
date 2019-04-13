import * as bool from "../src/validators";

describe("Validators functions", () => {
  describe("isNil", () => {
    it("isNil(undefined) === true", () => {
      expect(bool.isNil(undefined)).toBe(true);
    });
    it("isNil(null) === true", () => {
      expect(bool.isNil(null)).toBe(true);
    });
    it("isNil('a') === false", () => {
      expect(bool.isNil("a")).toBe(false);
    });
    it("isNil(0) === false", () => {
      expect(bool.isNil(0)).toBe(false);
    });
    it("isNil('') === false", () => {
      expect(bool.isNil("")).toBe(false);
    });
  });

  describe("isNan", () => {
    it("isNan(undefined) === true", () => {
      expect(bool.isNan(undefined)).toBe(true);
    });
    it("isNan(null) === true", () => {
      expect(bool.isNan(null)).toBe(true);
    });
    it("isNan('a') === true", () => {
      expect(bool.isNan("a")).toBe(true);
    });
    it("isNan('') === true", () => {
      expect(bool.isNan("")).toBe(true);
    });
    it("isNan(0) === false", () => {
      expect(bool.isNan(0)).toBe(false);
    });
    it("isNan(12345) === false", () => {
      expect(bool.isNan(12345)).toBe(false);
    });
  });
  describe("isNan0", () => {
    it("isNan0(undefined) === true", () => {
      expect(bool.isNan0(undefined)).toBe(true);
    });
    it("isNan0(null) === true", () => {
      expect(bool.isNan0(null)).toBe(true);
    });
    it("isNan0('a') === true", () => {
      expect(bool.isNan0("a")).toBe(true);
    });
    it("isNan0('') === true", () => {
      expect(bool.isNan0("")).toBe(true);
    });
    it("isNan0(0) === true", () => {
      expect(bool.isNan0(0)).toBe(true);
    });
    it("isNan0(12345) === false", () => {
      expect(bool.isNan0(12345)).toBe(false);
    });
  });

  describe("isNilStr", () => {
    it("isNilStr(undefined) === true", () => {
      expect(bool.isNilStr(undefined)).toBe(true);
    });
    it("isNilStr(null) === true", () => {
      expect(bool.isNilStr(null)).toBe(true);
    });
    it("isNilStr(12345) === true", () => {
      expect(bool.isNilStr(12345)).toBe(true);
    });
    it("isNilStr('') === true", () => {
      expect(bool.isNilStr("")).toBe(true);
    });
    it("isNilStr('a') === false", () => {
      expect(bool.isNilStr("a")).toBe(false);
    });
  });

  describe("is0", () => {
    it("is0(undefined) === false", () => {
      expect(bool.is0(undefined)).toBe(false);
    });
    it("is0(null) === false", () => {
      expect(bool.is0(null)).toBe(false);
    });
    it("is0(12345) === false", () => {
      expect(bool.is0(12345)).toBe(false);
    });
    it("is0('') === false", () => {
      expect(bool.is0("")).toBe(false);
    });
    it("is0('a') === false", () => {
      expect(bool.is0("a")).toBe(false);
    });
    it("is0(0) === true", () => {
      expect(bool.is0(0)).toBe(true);
    });
  });
});
