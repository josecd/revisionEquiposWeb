import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface MessageSegment {
  text: string;
  reportId?: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  segments?: MessageSegment[];
}

const STORAGE_KEY = 'chat_history';
const MAX_STORED = 20;

@Injectable({ providedIn: 'root' })
export class ChatBotService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.API_URL;

  getHistory(): ChatMessage[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  saveHistory(messages: ChatMessage[]): void {
    const limited = messages.slice(-MAX_STORED);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(limited));
  }

  sendMessage(message: string, history: ChatMessage[]): Observable<{ response: string }> {
    const apiHistory = history.slice(-10).map(({ role, content }) => ({ role, content }));
    return this.http.post<{ response: string }>(`${this.apiUrl}/chat`, {
      message,
      history: apiHistory,
    });
  }

  clearHistory(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}
