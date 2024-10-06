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

const resposta = async (typingMessage: string): Promise<string> => {
  const openaiApiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const userMessage: ChatMessage = { role: 'user', content: typingMessage };
  const requestData: ChatRequestData = {
    model: 'gpt-3.5-turbo',
    messages: [userMessage],
    temperature: 0.7
  };

  try {
    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
      }
    });

    const data: ChatResponse = response.data;
    const assistantMessageContent = data.choices[0].message.content;
    return assistantMessageContent;
  } catch (error) {
    console.error('Erro ao gerar texto:', error);
    throw error;
  }
};

export default resposta;
