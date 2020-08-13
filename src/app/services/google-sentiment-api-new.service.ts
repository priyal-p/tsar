import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { RequestFile } from '../classes/requestFile';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GoogleSentimentApiNewService {

  constructor(private httpclient: HttpClient) { }
  public getAnalysis(requestFileData):Observable<any>{
    return this.httpclient.post<any>
         ('https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyA-0HgfLNHNeavUQjoo_a-9M7XNbFNF_9w', requestFileData)
         .pipe(catchError(this.errorHandler));
}

errorHandler(error: HttpErrorResponse){
    return throwError(error);
} 
}
