export class Description {
  project: string;
  sponsor: string;
  location: string;
  preparedby: string;
  noise: number;
  date: Date;
  source: string;

  constructor(){
    this.project='';
    this.sponsor='';
    this.location='';
    this.preparedby='';
    this.noise=0;
    this.date='2000-1-1';
    this.source='';
  }
}
