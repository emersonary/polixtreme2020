import zlib from "react-zlib-js";
import { Buffer } from "buffer";

export function WebMatrixEncrypt(json) {
  return zlib.deflateSync(JSON.stringify(json)).toString("base64");
}

export function WebMatrixDecrypt(str) {
  const buf = Buffer.from(str, "base64");
  return JSON.parse(zlib.inflateSync(buf).toString());
}
