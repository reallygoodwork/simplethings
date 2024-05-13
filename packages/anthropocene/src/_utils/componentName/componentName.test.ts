import { hasNoSpaces, hasCapitalFirstLetter, zComponentType } from "@utils/componentName/componentName";

describe("componentName", () => {
  it("Should return true if there are no spaces", () => {
    expect(hasNoSpaces("PascalCase")).toBe(true);
  });

  it("Should return false if there are spaces", () => {
    expect(hasNoSpaces("Pascal Case")).toBe(false);
  });
})

describe("hasCapitalFirstLetter", () => {
  it("Should return true if the first letter is capitalized", () => {
    expect(hasCapitalFirstLetter("PascalCase")).toBe(true);
  });

  it("Should return false if the first letter is not capitalized", () => {
    expect(hasCapitalFirstLetter("pascalCase")).toBe(false);
  });
})

describe("zComponentType", () => {
  it("should parse zod record with valid Format", () => {
    expect(() => zComponentType.parse("Badge")).not.toThrow();
  });

  it("should throw error if the first letter is not capitalized", () => {
    expect(() => zComponentType.parse("badge")).toThrow();
  });

  it("should throw error if the name contains spaces", () => {
    expect(() => zComponentType.parse("Badge Name")).toThrow();
  });
})