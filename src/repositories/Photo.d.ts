declare module PhotoType {
  export interface Document {
    id: string;
    album: string;
    name: string;
    path: string;
    raw: string;
  }

  export interface PhotoListResponses {
    message: string;
    documents: Document[];
    count: number;
    skip: number;
    limit: number;
  }
}
