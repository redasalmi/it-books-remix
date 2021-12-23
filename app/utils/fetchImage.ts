const fetchImage = async (resource: string) => {
  const resp = await fetch(resource);
  const arrayBuffer = await resp.arrayBuffer();
  const uint8 = new Uint8Array(arrayBuffer);

  return uint8;
};

export default fetchImage;
