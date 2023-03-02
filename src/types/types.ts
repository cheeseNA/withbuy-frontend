export interface UserId {
  id: string;
}

export interface ChatId {
  id: string;
}

export interface Item {
  id: string;
  title: string;
  description: string;
  url: string;
  associate_url?: string;
  published_datetime: string;
  until_datetime?: string;
  close_datetiem?: string;
  state: 'open' | 'gathered' | 'close' | 'stop';
  num_persons_required: number;
  joining_person: UserId[];
  is_for_unit: boolean;
  chat: ChatId;
}
