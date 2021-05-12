const random_jokes = [
  {
    setup: 'What is the object oriented way to get wealthy ?',
    punchline: 'Inheritance',
  },
  {
    setup: '测试数据1',
    punchline: 'You must first understand what recursion is',
  },
  {
    setup: '测试数据2?',
    punchline: 'A satisfactory',
  },
  {
    setup: '测试数据3',
    punchline: 'A satisfactory',
  },
];

let random_joke_call_count = 0;

export default {
  'get /dev/random_joke': function(req, res) {
    const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
    random_joke_call_count += 1;
    setTimeout(() => {
      res.json(responseObj);
    }, 3000);
  },
};
