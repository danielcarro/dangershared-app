import { MessageChat } from "./MessageChat"
export type Chat = {
    id: string;
    title: string;
    messages: MessageChat[];
}