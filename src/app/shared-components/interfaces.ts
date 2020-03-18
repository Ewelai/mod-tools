export interface Language {
  language:string;
  detected?:object;
}

export interface DiagnoseData {
  clientId: number;
  language: string;
  text: string;
  contentType: string;
}