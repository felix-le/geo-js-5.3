exports.handler = async (event) => {
  const v = event.queryStringParameters.vote;

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(v),
  };
};
