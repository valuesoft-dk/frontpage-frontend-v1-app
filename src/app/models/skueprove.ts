import { ISkueprove } from '../interfaces/iskueprove';

// https://www.typescriptlang.org/docs/handbook/decorators.html
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

export class Skueprove {

    static fromJSON(json: ISkueprove): Skueprove {
        // let skueprove = Object.create(Skueprove.prototype);
        // return Object.assign(skueprove, json);
        return new Skueprove(
            json.prodNo,
            json.prodTp,
            json.descr,
            json.inf,
            json.rno,
            json.gr8
            );
    }

    static toJSON(skueprove: Skueprove): ISkueprove {
        const dto: ISkueprove = {
            prodNo: skueprove.ProdNo,
            prodTp: skueprove.ProdTp,
            descr: skueprove.Descr,
            inf: skueprove.Inf,
            rno: skueprove.Rno,
            gr8: skueprove.Gr8
        }
        return dto;
    }

    public ProdNo: string;
    public ProdTp: number;
    public Descr: string;
    public Inf: string;
    public Rno: number;
    public Gr8: number;

    constructor(
        prodNo: string,
        prodTp: number,
        descr: string,
        inf: string,
        rno: number,
        gr8: number
               
    ) {
        this.ProdNo = prodNo;
        this.ProdTp = prodTp;
        this.Descr = descr;
        this.Inf = inf;
        this.Rno = rno;
        this.Gr8 = gr8;

        // Object.defineProperty( this, 'ProdNo', {
        //     enumerable: true,
        //     get: function (): string {  return this._prodNo; },
        //     set:  function(value: string) { this._prodNo; }
        //   } );

        //   Object.defineProperty( this, 'ProdTp', {
        //     enumerable: true,
        //     get: function (): number {  return this._prodTp; },
        //     set:  function(value: number) { this._prodTp; }
        //   } ); 
          
        //   Object.defineProperty( this, 'Descr', {
        //     enumerable: true,
        //     get: function (): string {  return this._descr; },
        //     set:  function(value: string) { this._descr; }
        //   } ); 
          
        //   Object.defineProperty( this, 'Inf', {
        //     enumerable: true,
        //     get: function (): string {  return this._inf; },
        //     set:  function(value: string) { this._inf; }
        //   } ); 
          
        //   Object.defineProperty( this, 'Rno', {
        //     enumerable: true,
        //     get: function (): number {  return this._rno; },
        //     set:  function(value: number) { this._rno; }
        //   } ); 
          
        //   Object.defineProperty( this, 'Gr8', {
        //     enumerable: true,
        //     get: function (): number {  return this._gr8; },
        //     set:  function(value: number) { this._gr8; }
        //   } );           

    }
    
    // public get ProdNo(): string {
    //     return this._prodNo;
    // }

    // public set ProdNo(value: string) {
    //     this._prodNo = value;
    // }
    
    // public get ProdTp(): number {
    //     return this._prodTp;
    // }

    // public set ProdTp(value: number) {
    //     this._prodTp = value;
    // }
    
    // public get Descr(): string {
    //     return this._descr;
    // }

    // public set Descr(value: string) {
    //     this._descr = value;
    // }
    
    // public get Inf(): string {
    //     return this._inf;
    // }

    // public set Inf(value: string) {
    //     this._inf = value;
    // }
    
    // public get Rno(): number {
    //     return this._rno;
    // }

    // public set Rno(value: number) {
    //     this._rno = value;
    // }
    
    // public get Gr8(): number {
    //     return this._gr8;
    // }

    // public set Gr8(value: number) {
    //     this._gr8 = value;
    // }    

}
