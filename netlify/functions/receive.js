let dataStore = [];

exports.handler = async function(event, context) {
  if (event.httpMethod === 'POST') {
    const body = JSON.parse(event.body);
    dataStore.push({ timestamp: Date.now(), ...body });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data received", data: body })
    };
  }

  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      body: JSON.stringify(dataStore)
    };
  }

  return { statusCode: 405, body: "Method Not Allowed" };
};
