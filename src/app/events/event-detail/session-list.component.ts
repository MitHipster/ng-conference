import { Component, OnChanges, Input } from '@angular/core';

import { ISession } from '../shared/index';

import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: 'session-list.component.html',
  styles: ['i { color: red; }']
})
export class SessionListComponent implements OnChanges {
  @Input() eventId: number;
  @Input() sortBy: string;
  @Input() filterByLevel: string;
  @Input() sessions: ISession[];
  @Input() filteredSessions: ISession[] = [];

  constructor(public authService: AuthService, private voterService: VoterService) {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessionsByLevel(this.filterByLevel);
      this.filteredSessions.sort(this.sortBy === 'name' ? this.sortByName : this.sortByVotes);
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName);
    }

    // Resort sessions if sort by votes is selected
    if (this.sortBy === 'votes') {
      this.filteredSessions.sort(this.sortByVotes);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }

  private filterSessionsByLevel(filter: string) {
    if (filter === 'all') {
      this.filteredSessions = [...this.sessions];
    } else {
      this.filteredSessions = this.sessions.filter(
        session => filter === session.level.toLowerCase()
      );
    }
  }

  private sortByName(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name) {
      return 1;
    } else if (s1.name === s2.name) {
      return 0;
    } else {
      return -1;
    }
  }

  private sortByVotes(s1: ISession, s2: ISession): number {
    // Array sort expect a positive, negative or zero value to be returned
    return s2.voters.length - s1.voters.length;
  }
}
