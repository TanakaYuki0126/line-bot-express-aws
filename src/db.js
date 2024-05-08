export class DynamoDBContext {
  constructor(dynamoDocument) {
    this.dynamoDocument = dynamoDocument;
  }

  put(param) {
    return this.dynamoDocument.put(param);
  }

  query(param) {
    return this.dynamoDocument.query(param);
  }

  update(param) {
    return this.dynamoDocument.update(param);
  }

  delete(param) {
    return this.dynamoDocument.delete(param);
  }
}
