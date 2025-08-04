import { getAPIKey } from "src/api/auth";
import { describe, expect, test } from "vitest";

describe("getAPIKey", () => {
  test("empty authHeader results in null", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("authorization header of less than 2 in length results in null / is invalid", () => {
    expect(getAPIKey({ authorization: "Bearer" })).toBeNull();
  });

  test("authorization header must start with ApiKey", () => {
    expect(getAPIKey({ authorization: "Bearer sdfskldghslg" })).toBeNull();
  });

  test("valid authorization header returns key", () => {
    const apiKey = "skfssdfsdf";
    expect(getAPIKey({ authorization: `ApiKey ${apiKey}` })).not.toBeNull();
    expect(getAPIKey({ authorization: `ApiKey ${apiKey}` })).not.toBe(apiKey);
  });
});
