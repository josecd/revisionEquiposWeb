import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { ChatBotService, ChatMessage, MessageSegment } from 'src/app/services/chat-bot.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
})
export class ChatBotComponent implements OnInit {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  isOpen = false;
  messages: ChatMessage[] = [];
  currentMessage = '';
  isLoading = false;

  private readonly chatService = inject(ChatBotService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.messages = this.chatService.getHistory().map((m) => ({
      ...m,
      segments: m.segments ?? this.parseSegments(m.content),
    }));
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => this.scrollToBottom(), 50);
    }
  }

  send(): void {
    const text = this.currentMessage.trim();
    if (!text || this.isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      content: text,
      timestamp: Date.now(),
      segments: this.parseSegments(text),
    };

    this.messages = [...this.messages, userMsg];
    this.currentMessage = '';
    this.isLoading = true;
    this.scrollToBottom();

    this.chatService.sendMessage(text, this.messages).subscribe({
      next: (res) => {
        const botMsg: ChatMessage = {
          role: 'assistant',
          content: res.response,
          timestamp: Date.now(),
          segments: this.parseSegments(res.response),
        };
        this.messages = [...this.messages, botMsg];
        this.chatService.saveHistory(this.messages);
        this.isLoading = false;
        this.scrollToBottom();
      },
      error: () => {
        const errMsg: ChatMessage = {
          role: 'assistant',
          content: 'Lo siento, ocurrió un error. Por favor intenta de nuevo.',
          timestamp: Date.now(),
          segments: [{ text: 'Lo siento, ocurrió un error. Por favor intenta de nuevo.' }],
        };
        this.messages = [...this.messages, errMsg];
        this.isLoading = false;
        this.scrollToBottom();
      },
    });
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  clearChat(): void {
    this.messages = [];
    this.chatService.clearHistory();
  }

  goToReport(id: number): void {
    console.log('[ChatBot] goToReport llamado con id:', id);
    console.log('[ChatBot] Router:', this.router);
    this.isOpen = false;
    this.router.navigate(['/reportes/detalle', id]).then(
      (ok) => console.log('[ChatBot] navigate result:', ok),
      (err) => console.error('[ChatBot] navigate error:', err),
    );
  }

  parseSegments(content: string): MessageSegment[] {
    // Split on #123 patterns, keeping the delimiter
    const parts = content.split(/(#\d+)/g);
    return parts
      .filter((p) => p !== '')
      .map((p) => {
        const m = p.match(/^#(\d+)$/);
        return m ? { text: p, reportId: parseInt(m[1], 10) } : { text: p };
      });
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.messagesContainer) {
        const el = this.messagesContainer.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    }, 50);
  }
}
