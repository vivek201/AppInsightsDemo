import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {}
    
    getAllProducts() {
        return this.http.get('http://localhost:61309/api/products');
    }
    getProduct(id: any) {
        return this.http.get(`http://localhost:61309/api/products/${id}`);
    }
}