export interface LeadData {
    name: string;
    email: string;
    status: string;
    createdAt?: Date;
  }

export interface ErrorResponse {
    status: number,
    message: string
}