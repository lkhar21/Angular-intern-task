import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  getUserPosts(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts?userId=${userId}`);
  }

  getUserTodos(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/todos?userId=${userId}`);
  }
  
  getAllPosts(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/posts`);
}

}
