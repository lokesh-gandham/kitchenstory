import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { tags } from "../model/tags";

@Injectable({
    providedIn:'root'
})
export class tagsservice{
    constructor(private http: HttpClient) { }

    baseUrl = 'http://localhost:8080';


    public getAllTags(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/tags/get/all`);
      }


      public updateTag(pid: number, tag: tags ): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/tag/update/${pid}`, tag);
      }
      public deleteTag(pid: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/tags/delete/${pid}`);
      }

      public addTag(tag:tags):Observable<tags>{
        return this.http.post<tags>(`${this.baseUrl}/tags/add`, tag);
      }
    
}