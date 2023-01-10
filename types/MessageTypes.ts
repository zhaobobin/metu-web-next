import { IAuthor, IPageInfo, IPhoto, IArticle } from './CommonTypes';
import { IComment } from './CommentTypes';
import { ITopic } from './TopicTypes';
import { IQuestion } from './QuestionTypes';
import { IAnswer } from './AnswerTypes';

export interface IMessage {
  list: IMessageItem[];
  pageInfo: IPageInfo;
}

// 消息
export interface IMessageItem {
  readed: number;
  status: number;
  _id: string;
  type: string;
  content: string;
  send_from: IAuthor;
  send_to: IAuthor;
  create_at: string;
  update_at: string;
  article?: IArticle;
  photo?: IPhoto;
  comment?: IComment;
  topic?: ITopic;
  question?: IQuestion;
  answer?: IAnswer;
}