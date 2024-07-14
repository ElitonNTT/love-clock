import React, { useEffect, useState } from "react";
import "./App.css";

interface CurrentProps {
  currentMonth: number;
  currentHour: number;
  currentMinute: number;
  currentSeconds: number;
}

const AnniversaryClock: React.FC = () => {
  const [startDate] = useState(new Date("2023-10-14T00:00:00"));
  const [daysLoved, setDaysLoved] = useState<number>(0);
  const [current, setCurrent] = useState<CurrentProps>({
    currentMonth: 0,
    currentHour: 0,
    currentMinute: 0,
    currentSeconds: 0,
  });
  const [, setCurrentMessageIndex] = useState<number>(0);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const frasesAmorosas = [
    "Você é a luz que ilumina meus dias.",
    "Meu amor por você cresce a cada instante.",
    "Sua presença torna tudo mais bonito.",
    "Você é meu porto seguro.",
    "Com você, cada momento é especial.",
    "Você é a razão do meu sorriso.",
    "Seu amor me completa.",
    "Nosso amor é como uma história sem fim.",
    "Não consigo imaginar minha vida sem você.",
    "Sua ternura me encanta todos os dias.",
    "Seu abraço é o melhor lugar do mundo.",
    "Cada momento ao seu lado é mágico.",
    "Você é o melhor presente que a vida me deu.",
    "Meu coração é todo seu.",
    "Nossa conexão é única e especial.",
    "Seu amor é minha maior inspiração.",
    "Nosso amor é eterno como o universo.",
    "Estou sempre aqui para você, meu amor.",
    "Com você, todos os desafios são superados.",
    "Você é meu sonho tornado realidade.",
    "Seu amor é a melhor parte de mim.",
    "Você me faz acreditar no poder do amor.",
    "Meu amor por você é maior que qualquer obstáculo.",
    "Seu sorriso é minha maior felicidade.",
    "Você é minha força nos momentos difíceis.",
    "Com você, o amor se torna a mais bela poesia.",
    "Estou completamente apaixonado por você.",
    "Cada dia ao seu lado é uma bênção.",
    "Seu amor me dá asas para voar.",
    "Você é minha inspiração para ser melhor a cada dia.",
    "Seu amor é meu refúgio em meio ao caos.",
    "Você me faz sentir vivo como nunca antes.",
    "Nosso amor é a maior aventura da minha vida.",
    "Sua presença traz paz ao meu coração.",
    "Seu amor é o maior presente que já recebi.",
    "Com você, o amor é sempre a resposta.",
    "Sua voz é a melodia que embala meus sonhos.",
    "Seu amor me dá coragem para enfrentar qualquer desafio.",
    "Você é a pessoa mais incrível que já conheci.",
    "Cada momento ao seu lado é uma memória inesquecível.",
    "Você é o raio de sol em meus dias nublados.",
    "Seu amor é meu combustível para seguir em frente.",
    "Nada é mais valioso para mim do que seu amor.",
    "Com você, tudo parece possível.",
    "Você é meu porto seguro em meio à tempestade.",
    "Sua presença torna tudo mais bonito.",
    "Você é meu amor, minha vida, meu tudo.",
    "Com você, aprendi o verdadeiro significado do amor.",
    "Seu amor é o centro do meu universo.",
    "Estou completamente rendido ao seu amor.",
    "Sua bondade e carinho enchem meu coração de alegria.",
    "Você é a razão pela qual a vida é tão bela.",
    "Seu amor é como um farol que me guia na escuridão.",
    "Com você, cada dia é uma nova aventura.",
    "Você é meu confidente, minha melhor amiga, meu amor.",
    "Nosso amor é a resposta para todas as perguntas.",
    "Seu amor é a maior dádiva que já recebi.",
    "Você é meu destino, meu amor para toda a eternidade.",
    "Com você, sinto que posso conquistar o mundo.",
    "Seu amor é minha âncora em meio às tormentas da vida.",
    "Estou profundamente grato por ter você em minha vida.",
    "Seu amor é o fogo que aquece minha alma.",
    "Você é a razão pela qual acredito no amor verdadeiro.",
    "Com você, todos os meus sonhos se tornam realidade.",
    "Seu amor é o presente mais precioso que já recebi.",
    "Cada momento ao seu lado é um presente divino.",
    "Você é minha inspiração para ser uma pessoa melhor.",
    "Seu amor é como um farol que ilumina meu caminho.",
    "Estou completamente envolvido por seu amor.",
    "Seu amor é a música que embala minha alma.",
    "Com você, sinto que posso enfrentar qualquer desafio.",
    "Você é minha razão para sorrir todos os dias.",
    "Seu amor é minha fonte de felicidade constante.",
    "Com você, cada dia é uma nova página de um livro de amor.",
    "Seu amor é meu refúgio em um mundo caótico.",
    "Você é meu presente mais precioso.",
    "Seu amor é a luz que guia meu caminho.",
    "Estou profundamente apaixonado por você.",
    "Com você, o amor é uma jornada infinita.",
    "Seu amor é o combustível que alimenta minha alma.",
    "Você é minha razão para acreditar no amor verdadeiro.",
    "Seu amor é meu porto seguro em meio à tempestade.",
    "Com você, cada momento é uma eternidade de amor.",
    "Você é minha felicidade, minha alegria, meu amor.",
    "Seu amor é a razão pela qual meu coração bate mais forte.",
    "Estou completamente rendido ao seu amor.",
    "Com você, cada dia é uma nova chance de amar.",
    "Seu amor é o presente mais precioso que já recebi.",
    "Você é minha inspiração para ser uma pessoa melhor.",
    "Seu amor é como um farol que ilumina meu caminho.",
    "Estou profundamente grato por ter você em minha vida.",
    "Seu amor é minha bússola em um mar de incertezas.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const difference = currentDate.getTime() - startDate.getTime();
      const daysElapsed = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDaysLoved(daysElapsed);

      setCurrent({
        currentMonth: currentDate.getMonth(),
        currentHour: currentDate.getHours(),
        currentMinute: currentDate.getMinutes(),
        currentSeconds: currentDate.getSeconds(),
      });

      // Atualizar a mensagem a cada dia
      const newIndex = daysElapsed % frasesAmorosas.length;
      setCurrentMessageIndex(newIndex);
      setCurrentMessage(frasesAmorosas[newIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container poetsen-one-regular">
      <div className="flex-area glass">
        <h1 className="title-area">Relógio do Amor!</h1>
        <p className="title-area">Nossa história começou há:</p>
      </div>
      <div className="days-loved glass">
        <div>{daysLoved}</div>
        <div>Dias</div>
      </div>
      <div className="clock-area glass">
        <div className="flex-area">
          <div>{current.currentHour}</div>
          <div>Horas</div>
        </div>
        <div className="flex-area">
          <div>{current.currentMinute}</div>
          <div>Minutos</div>
        </div>
        <div className="flex-area">
          <div>
            {current.currentSeconds < 10
              ? "0" + current.currentSeconds
              : current.currentSeconds}
          </div>
          <div>Segundos</div>
        </div>
      </div>
      <div className="flex-area message-area glass">
        <p>{currentMessage}</p>
      </div>
    </div>
  );
};

export default AnniversaryClock;
