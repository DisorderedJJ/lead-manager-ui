import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import LeadManagerService from "../Services/LeadManagerService";
import { AxiosError } from "axios";
import { ErrorResponse } from "../types/Common";

export const useLeads = () => {
    return useQuery({
        queryKey: ['leads'],
        queryFn: () => LeadManagerService.getAllLeads()
    });
  };
  
export const mutateLeads = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: LeadManagerService.createNewLead,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['leads'] });
          },
          onError: (error: AxiosError<ErrorResponse>) => {
            console.error('Failed to create lead:', error);
            alert(error.response?.data.message);
          },
    })
} 