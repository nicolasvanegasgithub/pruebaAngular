import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private subject = new Subject<any>();

  setFormData(data: any) {
    console.log(data);
    this.subject.next({recipe: data})
  }

  getFormData(): Observable<any> {
    return this.subject.asObservable();
  }
}
