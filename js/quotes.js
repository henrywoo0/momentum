const quotes = [
  {
    quote:
      "명성을 쌓는 것에는 20년이란 세월이 걸리며 명성을 무너뜨리는 것에는 5분도 걸리지 않는다.",
    author: "워런 버핏",
  },
  {
    quote: "승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다.",
    author: "크리스티 메튜슨",
  },
  {
    quote: "승자는 책임지는 태도로 살며, 패자는 약속을 남발한다.",
    author: "유태경전",
  },
  {
    quote: "말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다.",
    author: "하우얼",
  },
  {
    quote: "내 자신의 무식을 아는 것은 지식으로의 첫걸음이다.",
    author: "바이런",
  },
  {
    quote: "가시에 찔리지 않고서는 장미를 모을 수 없다.",
    author: "핀페이",
  },
  {
    quote: "바람이 불지 않으면 노를 저어라.",
    author: "윈스턴 처칠",
  },
  {
    quote: "강에서 물고기를 보고 탐내는 것보다 돌아가서 그물을 짜는 것이 옳다.",
    author: "예악지",
  },
  {
    quote: "역경은 사람을 부유하게 하지는 않으나 지혜롭게 한다.",
    author: "풀러",
  },
  {
    quote: "아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다.",
    author: "카를로스 곤",
  },
]; // quotes 10개

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
