import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ISession } from '../shared';

@Injectable()
export class VoterService {
  constructor(private http: HttpClient) {}

  addVoter(eventId: number, session: ISession, voterName: string): void {
    session.voters.push(voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    this.http
      .post(url, {}, options)
      .pipe(catchError(this.handleError('addVoter')))
      .subscribe();
  }

  deleteVoter(eventId: number, session: ISession, voterName: string): void {
    session.voters = session.voters.filter((voter: string) => voter !== voterName);

    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

    this.http
      .delete(url)
      .pipe(catchError(this.handleError('deleteVoter')))
      .subscribe();
  }

  userHasVoted(session: ISession, voterName: string): boolean {
    return session.voters.some((voter: string) => voter === voterName);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
