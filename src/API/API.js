import axios from "axios";


class API {
  constructor() {
    this.baseUrl = 'https://opentdb.com/api.php?amount=';
  }

  getData = async (data) => {
    const {
      questionNumber,
      category,
      difficulty
    } = data;

    let url = this.baseUrl + questionNumber;
    if (category !== 'any') url += `&category=${category}`;
    if (difficulty !== 'any') url += `&difficulty=${difficulty}`;
    // url += `&type=multiple&encode=base64`;

    const answer = await axios.get(url)
      .then(function(response) {
        return response.data.results
      })
      .catch(function(error) {
        console.log(error);
        return []
      });
    return answer;

  }

}
export default new API();
