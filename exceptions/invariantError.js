class InvariantError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.name = "InvariantError";
    this.statusCode = statusCode;
  }
}

export default InvariantError;
