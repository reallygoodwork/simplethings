import { zComponentProps } from '@utils/componentProps/componentProps'

describe("componentProps", () => {
  it("should parse zod record with valid Format", () => {
    expect(() => zComponentProps.parse({})).not.toThrow();
  });

  it("should throw error if the value is not a record", () => {
    expect(() => zComponentProps.parse("Badge")).toThrow();
  });

  it("should parse zod record with valid format", () => {
    expect(() => zComponentProps.parse({
      "key": "value"
    })).not.toThrow();
  });

  it("should parse zod record with a function", () => {
    expect(() => zComponentProps.parse({
      "key": () => {}
    })).not.toThrow();
  });
})