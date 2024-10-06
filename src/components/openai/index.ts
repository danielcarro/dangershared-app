import React, { useState } from 'react';
import axios from 'axios';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatResponse = {
  choices: {
    message: {
      role: string;
      content: string;
    };
  }[];
};


type ChatRequestData = {
  model: string;
  messages: ChatMessage[];
  temperature: number;
};



export const reposta = (typingMessage: string) => {

  const openaiApiKey = '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'; // Substitua pela sua chave de API da OpenAI
  const apiUrl = 'https://api.openai.com/v1/chat/completions';


  const userMessage: ChatMessage = { role: 'user', content: typingMessage };
  const requestData: ChatRequestData = {
    model: 'gpt-3.5-turbo',
    messages: [userMessage],
    temperature: 0.7
  };

  axios.post(apiUrl, requestData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openaiApiKey}`
    }
  })
    .then(response => response.data)
    .then((data: ChatResponse) => {
      const assistantMessage: ChatMessage = { role: 'assistant', content: data.choices[0].message.content };
      return (assistantMessage.content);
    })
    .catch(error => {
      console.error('Erro ao gerar texto:', error);
    });


}
}

