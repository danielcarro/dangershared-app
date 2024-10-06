export interface ChatMessage {
    role: string;
    content: string;
  }  
  
  export interface ChatRequestData {
    model: string;
    messages: ChatMessage[];
    temperature: number;
  }
  
  export interface ChatResponse {
    choices: {
      message: {
        role: string;
        content: string;
      };
      text: string;
      index: number;
      logprobs: null;
      finish_reason: string;
    }[];
  }