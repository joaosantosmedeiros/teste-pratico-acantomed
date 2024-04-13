export const validateUUID = (uuid: string): boolean => {
  return uuid
    .toLowerCase()
    .match(
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    )
    ? true
    : false;
};
