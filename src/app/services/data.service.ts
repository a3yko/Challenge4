import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface PR {
  id: string;
  name: string;
  reps: number;
  weight: number;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public storage: Storage) {
   }


   public async generateKey(): Promise<string>{
    let key = `pr${ parseInt(`${Math.random() * 100}`)}`;
    let ret = await this.storage.get(key);

    while(ret){
      key = `pr${ parseInt(`${Math.random() * 100}`)}`;
      ret = await this.storage.get(key);
    }
    return key;
  }

  public async getPrs(): Promise<PR[]>{

    let prs: Array<PR> = [];
    await this.storage.forEach((v, key, i)=>{
      if(key.startsWith("pr")){
          prs.push(v);
      }
    });

    return prs;
  }

   public async create(key: string , pr: PR){
    console.log("Creating pr: ", pr);
    return await this.storage.set(key, pr);
  }

  public async getPrsById(id: string): Promise<any>{
    const result = await this.storage.get(id);
    console.log('storageGET: ' + id + ': ' + result);
    if (result != null) {
        return result;
    }
    return null;
    }  catch (reason) {
        console.log(reason);
        return null;
    }
  }
