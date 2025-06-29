export const base64ToBuffer = (base64: string) => {
    const parts = base64.split(";base64,");
    const mime = parts[0].split(":")[1];
    const data = Buffer.from(parts[1], "base64");
    return { buffer: data, mime };
  };