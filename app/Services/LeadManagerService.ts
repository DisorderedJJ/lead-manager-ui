import axiosClient from "../configs/AxiosConfig";
import { LeadData } from "../types/Common";

const getAllLeads = async (): Promise<Array<LeadData>> => {
  return await axiosClient.get('/').then((data) => data.data);
};

const createNewLead = async (newLead:LeadData ): Promise<LeadData> => {
    return await axiosClient.post('/', newLead);
}

const funcs = {
    getAllLeads: getAllLeads,
    createNewLead: createNewLead
}

export default funcs
