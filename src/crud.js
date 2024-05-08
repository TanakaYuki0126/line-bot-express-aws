const { TABLE_NAME } = process.env;

export const createData = (userId, dataType, data, appContext) => {
  const param = {
    TableName: TABLE_NAME,
    Item: {
      ID: userId,
      DataType: dataType,
      Data: data,
    },
  };

  return appContext.dynamoDBContext.put(param);
};

export const readData = (userId, dataType, appContext) => {
  const param = {
    TableName: TABLE_NAME,
    ExpressionAttributeValues: {
      ':u': userId,
      ':d': dataType,
    },
    KeyConditionExpression: 'ID = :u and DataType = :d',
  };

  return appContext.dynamoDBContext.query(param);
};

export const updateData = (userId, dataType, data, appContext) => {
  const param = {
    TableName: TABLE_NAME,
    Key: {
      ID: userId,
      DataType: dataType,
    },
    ExpressionAttributeValues: {
      ':d': data,
    },
    ExpressionAttributeNames: {
      '#d': 'Data',
    },
    UpdateExpression: 'set #d = :d',
  };
  return appContext.dynamoDBContext.update(param);
};

export const deleteData = (userId, dataType, appContext) => {
  const param = {
    TableName: TABLE_NAME,
    Key: {
      ID: userId,
      DataType: dataType,
    },
  };
  return appContext.dynamoDBContext.delete(param);
};
