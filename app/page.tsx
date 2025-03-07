"use client"
import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import React from "react";
import { useMutateLeads, useLeads } from "./hooks/useLeadHook";
import { LeadData } from "./types/Common";

export default function Home() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");

  const {data, isLoading} = useLeads();
  const createLead = useMutateLeads()

  const onCreateNewLead = () => {
    const data: LeadData = {
      name: name,
      email: email,
      status: status
    }
    createLead.mutate(data)
    setName("")
    setEmail("")
    setStatus("")
  }

  return (
    
        <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <main className="flex flex-col gap-8 row-start-2 sm:items-start w-full">
                <Stack spacing={2} width="100%">
                  <Card>
                    <CardContent>
                      <Stack spacing={2}>
                        <TextField
                          required
                          id="outlined-required"
                          label="Name"
                          value={name}
                          onChange={(event) => setName(event.target.value as string)}
                          fullWidth
                        />
                        <TextField
                          required
                          id="outlined-required"
                          label="Email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value as string)}
                          fullWidth
                        />
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Age</InputLabel>
                          <Select
                            labelId="status-select"
                            id="status-select"
                            value={status}
                            label="Age"
                            onChange={(event) => setStatus(event.target.value as string)}
                          >
                            <MenuItem value={"New"}>New</MenuItem>
                            <MenuItem value={"Engaged"}>Engaged</MenuItem>
                            <MenuItem value={"Proposal Sent"}>Proposal Sent</MenuItem>
                            <MenuItem value={"Closed-Won"}>Closed-Won</MenuItem>
                            <MenuItem value={"Closed-Lost"}>Closed-Lost</MenuItem>
                          </Select>
                        </FormControl>
                        <Button variant="contained" onClick={onCreateNewLead}>Submit</Button>
                      </Stack>
                    </CardContent>
                  </Card>
                  <Stack direction="row" spacing={2}>
                    {isLoading? (
                      <h1>Loading !!!</h1>
                        ): data? (
                          data.map((lead, index) => {
                            return(
                            <Card key={index}>
                              <CardContent>
                                <Stack spacing={2}>
                                  <h3>Name: {lead.name}</h3>
                                  <h3>Email: {lead.email}</h3>
                                  <h3>Status: {lead.status}</h3>
                                  <h3>CreatedAt: {lead.createdAt?.toString() || ""}</h3>
                                </Stack>
                              </CardContent>
                            </Card>
                            )
                          })
                          
                        ) : (<div></div>)
                    }
                  
                  </Stack>
                </Stack>
              </main>
              
            </div>

    
  );
}
