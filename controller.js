class Controller {
  async get(request, responce) {
    try {
      const data = request;
      console.log(data.cookies);
      responce.json("Ответ на GET-запрос");
    } catch (error) {
      console.log(error);
    }
  }

  async post(request, responce) {
    try {
      const data = request;
      console.log(data.header("Cookie"));
      console.log(data.body);
      console.log(data.cookies);
      responce.json("Ответ на POST-запрос");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Controller();
