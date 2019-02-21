import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs/index';
import { ApiResponse } from '../model/api.response';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080';

  login(payload): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/login`, payload);
  }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/users/`);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/users/${id}`);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/users/`, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/users/${id}`);
  }
}
