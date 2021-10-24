let votesArr = [0, 0, 0, 0];

function countVotes(vote) {
  switch (vote) {
    // All cases are for the votesArr
    case 'A':
      votesArr[0]++;
      break;
    case 'B':
      votesArr[1]++;
      break;
    case 'C':
      votesArr[2]++;
      break;
    case 'D':
      votesArr[3]++;
      break;
    case 'R':
      votesArr = [0, 0, 0, 0];
      break;
    default:
      break;
  }
}

exports.handler = async (event) => {
  const v = event.queryStringParameters.vote;
  countVotes(v);

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(votesArr),
  };
};
