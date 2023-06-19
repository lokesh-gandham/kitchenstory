import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginServiceService } from "./login.service.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginServiceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //add the jwt token to the request
        let authRequest = req;
        const token = this.loginService.getToken();
        if (token != null) {
            authRequest = authRequest.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }
        return next.handle(authRequest);
    }

}
export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
];