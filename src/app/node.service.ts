import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NodeService {

  constructor(private _http: HttpClient) { }

  getFiles(): any {
    return this._http.get('assets/data/files.json');
                // .toPromise()
                // .then(res => <TreeNode[]> res.json().data);
}

}
